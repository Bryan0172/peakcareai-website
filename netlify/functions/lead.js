// netlify/functions/lead.js — PCAI-Kontaktanfragen → Brevo-Mail (Zustellung in den Posteingang, wie BC).
// AJAX-Endpoint: liefert JSON-Status (kein Redirect). Bei Versand-Fehler 502 → der Client zeigt KEIN
// falsches "gesendet" (verhindert stillen Lead-Verlust). Benötigt env BREVO_API_KEY (Netlify-Site-Settings).
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
const SENDER = { email: 'peakcare@peak-care.com', name: 'Peak Care AI Website' };

async function verifyTurnstile(token, ip) {
  // Fail-open bei Cloudflare-Fehlern (leere/kaputte Response) statt Absturz — ein 502 hier
  // hat zuvor JEDEN Lead stumm gekillt (identischer Bug wie BC/PC, ceace37/9b3f1c0). (11.07.)
  try {
    const body = new URLSearchParams();
    body.append('secret', process.env.CLOUDFLARE_TURNSTILE_SECRET || '');
    body.append('response', token || '');
    if (ip) body.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v1/siteverify', {
      method: 'POST', body,
    });
    if (!res.ok) return true;
    const json = await res.json().catch(() => null);
    if (!json) return true;
    return json.success === true;
  } catch (e) {
    console.error('verifyTurnstile exception (fail-open)', e && e.message);
    return true;
  }
} // in Brevo verifizierter Absender
const TO = [{ email: 'kontakt.ki.hotel@gmail.com', name: 'Peak Care AI' }];
const BCC = [{ email: 'andy7203@googlemail.com' }];

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Server-seitiger Spam-Filter (Honeypot allein reicht nicht — Bots fuellen die echten Felder).
// Verwirft leere Probe-Submissions + Score aus Casino-/Jackpot-Keywords, Links, fehlender Mail.
function isSpam(data) {
  const name = String(data.name || data.Name || data.fullname || '').trim();
  const email = String(data.email || data.Email || '').trim();
  const msg = String(data.message || data.Message || data.nachricht || '').trim();
  const hay = (name + ' ' + msg + ' ' + (data.service || '')).toLowerCase();
  // Komplett leere / Endpunkt-Probe (kein Name, keine Mail, keine Nachricht) -> Bot.
  if (!name && !email && !msg) return true;
  let score = 0;
  // Geldbetrag-Muster entfernt (11.07., wie BC/PC 05a3e4c): ein genannter Betrag ("$500,000")
  // ist bei einem Hotel-/Investoren-Kontaktformular ein Kaufintent-Signal, kein Spam-Signal —
  // wurde zuvor still gedroppt. Echter Geld-Spam bleibt über Keywords/URLs/Invalid-Mail gefangen.
  if (/jackpot|casino|lottery|\blotto\b|viagra|cialis|bitcoin|crypto|forex|\bwinner\b|you won|you have won|congratulations|earn \$|make money|gift ?card|inheritance|loan offer|backlink|seo service|escort|\bnude\b|\bsex\b/i.test(hay)) score += 4;
  const urlCount = (hay.match(/https?:\/\/|www\.|\b\w+\.(ru|cn|tk|top|xyz|click|loan|win)\b/gi) || []).length;
  if (urlCount >= 2) score += 4; else if (urlCount === 1) score += 2;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) score += 2;
  return score >= 4;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  let data = {};
  try {
    const ct = (event.headers['content-type'] || event.headers['Content-Type'] || '').toLowerCase();
    let raw = event.body || '';
    if (event.isBase64Encoded) raw = Buffer.from(raw, 'base64').toString('utf8');
    if (ct.includes('application/json')) data = JSON.parse(raw);
    else for (const [k, v] of new URLSearchParams(raw)) data[k] = v;
  } catch (e) {
    data = {};
  }

  // Honeypot: gefülltes Bot-Feld → still akzeptieren (kein Mailversand), damit Bots keinen Fehler sehen.
  if (data['bot-field']) return { statusCode: 200, body: JSON.stringify({ ok: true }) };

  // Turnstile: nur aktiv wenn CLOUDFLARE_TURNSTILE_SECRET gesetzt.
  if (process.env.CLOUDFLARE_TURNSTILE_SECRET) {
    const token = data['cf-turnstile-response'];
    const ip = event.headers['cf-connecting-ip'] || event.headers['x-forwarded-for'] || '';
    if (!await verifyTurnstile(token, ip)) return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  // Spam still verwerfen (200 zurück, damit der Bot „Erfolg" sieht und keine echte Mail rausgeht).
  if (isSpam(data)) return { statusCode: 200, body: JSON.stringify({ ok: true }) };

  const formName = data['form-name'] || 'contact';
  const name = data.name || data.Name || '';
  const email = data.email || data.Email || '';

  const rows = Object.entries(data)
    .filter(([k]) => !['form-name', 'bot-field'].includes(k))
    .map(([k, v]) => `<tr><td style="padding:4px 12px;font-weight:600;vertical-align:top;border-bottom:1px solid #eee">${esc(k)}</td><td style="padding:4px 12px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`)
    .join('');

  const html = `<div style="font-family:Arial,sans-serif;color:#1a1a1a">
    <h2 style="margin:0 0 12px">🏨 Neue PCAI-Anfrage — ${esc(formName)}</h2>
    <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    <p style="color:#888;font-size:12px;margin-top:14px">Quelle: peakcareai.com · Formular „${esc(formName)}"</p>
  </div>`;

  const payload = {
    sender: SENDER,
    to: TO,
    bcc: BCC,
    subject: `🏨 PCAI-Lead: ${formName}${name ? ' — ' + name : ''}`,
    htmlContent: html,
  };
  if (email && /\S+@\S+\.\S+/.test(email)) payload.replyTo = { email, name: name || email };

  try {
    const res = await fetch(BREVO_URL, {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY || '', 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('Brevo send failed', res.status, await res.text());
      return { statusCode: 502, body: JSON.stringify({ ok: false }) };
    }
  } catch (e) {
    console.error('lead handler exception', e && e.message);
    return { statusCode: 502, body: JSON.stringify({ ok: false }) };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
