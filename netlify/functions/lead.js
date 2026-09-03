// netlify/functions/lead.js — PCAI-Kontaktanfragen → Brevo-Mail (Zustellung in den Posteingang, wie BC).
// AJAX-Endpoint: liefert JSON-Status (kein Redirect). Bei Versand-Fehler 502 → der Client zeigt KEIN
// falsches "gesendet" (verhindert stillen Lead-Verlust). Benötigt env BREVO_API_KEY (Netlify-Site-Settings).
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';
const SENDER = { email: 'peakcare@peak-care.com', name: 'Peak Care AI Website' };

// PATCH 03.09.2026 (SEO/GEO, REQ-2026-09-02-PCAI-BITTET-SEO-GEO-UM-DIE-SERVERSEITIGE-
// FORMULAR-HAERTUNG): Fail-Verhalten auf das PC/BC-Muster umgestellt (31.07.2026, teuer
// gelernt). Vorher fiel ein FEHLENDES Token genauso "open" (=> durchgelassen) wie ein
// technischer Cloudflare-Fehler — die eine Zeile, die einen echten Bot von einem
// Verifikations-Hickup unterscheidet, fehlte. Jetzt: fehlendes/leeres Token faellt CLOSED
// (false), jeder technische Fehler (HTTP, Parse, Netzwerk) faellt weiterhin OPEN (true) —
// ein Cloudflare-Ausfall darf nie einen echten Lead stumm killen.
async function verifyTurnstile(token, ip) {
  if (!token) return false;
  try {
    const body = new URLSearchParams();
    body.append('secret', process.env.CLOUDFLARE_TURNSTILE_SECRET || '');
    body.append('response', token);
    if (ip) body.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v1/siteverify', {
      method: 'POST', body,
    });
    if (!res.ok) {
      console.error(`Turnstile siteverify HTTP ${res.status} — failing open`);
      return true;
    }
    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch (e) {
      console.error('Turnstile siteverify returned non-JSON — failing open', text.slice(0, 200));
      return true;
    }
    return json.success === true;
  } catch (e) {
    console.error('Turnstile verification threw — failing open to avoid losing a lead', (e && e.message) || String(e));
    return true;
  }
}

// PATCH 03.09.2026 (SEO/GEO, dieselbe REQ): eine blockierte PCAI-Einsendung verschwand
// bisher spurlos ("still akzeptieren, kein Mailversand"). Uebernommen aus dem PC/BC-Muster
// (09.08.2026): eine sichtbare Alarm-Mail mit Rohdaten, Verdikt und Feld-Whitelist (nur
// Feldnamen, die dieses Formular kennt, zaehlen — verhindert, dass injizierte Zusatzfelder
// die Zaehlung verzerren, A386-SEO).
async function notifyBlocked(reason, data, formName, client) {
  try {
    const KNOWN_FIELDS = ['name', 'company', 'email', 'role', 'message'];
    const payload = Object.entries(data).filter(([k]) => KNOWN_FIELDS.includes(k));
    const rows = payload
      .map(([k, v]) => `<tr><td style="padding:4px 12px;font-weight:600;vertical-align:top;border-bottom:1px solid #eee">${esc(k)}</td><td style="padding:4px 12px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`)
      .join('');
    const filled = payload.filter(([, v]) => String(v || '').trim() !== '').length;
    const verdict = filled === 0
      ? '<strong style="color:#b00">BOT (sehr wahrscheinlich)</strong> — kein einziges Nutzfeld ausgefuellt; ein Mensch haette mindestens eines befuellt.'
      : '<strong style="color:#0a0">MENSCH MOEGLICH</strong> — es wurden Nutzfelder ausgefuellt, bitte inhaltlich pruefen.';
    const diag = `<p style="font-size:13px;margin:10px 0 0;padding:8px 10px;background:#f6f6f6;border-left:3px solid #999">
          Einschaetzung: ${verdict}<br>
          Nutzfelder gesamt: <strong>${payload.length}</strong> · davon ausgefuellt: <strong>${filled}</strong>
          · IP: ${esc((client && client.ip) || 'unbekannt')}
          · User-Agent: ${esc((client && client.ua) || 'unbekannt')}
        </p>`;
    await fetch(BREVO_URL, {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY || '', 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: SENDER,
        to: TO,
        bcc: BCC,
        subject: `⚠️ PCAI-Anfrage blockiert (${reason}) — evtl. echter Lead, bitte prüfen (${formName})`,
        htmlContent: `<div style="font-family:Arial,sans-serif;color:#1a1a1a">
          <h2 style="margin:0 0 12px">⚠️ Peak-Care-AI-Anfrage blockiert — ${esc(reason)}</h2>
          <p style="font-size:14px;margin:0 0 12px">Diese Übermittlung wurde <strong>nicht</strong> als Lead zugestellt.
          Der Absender hat im Formular „gesendet" gesehen. Bitte prüfen, ob es ein echter Interessent war.</p>
          <table style="border-collapse:collapse;font-size:14px">${rows}</table>
          ${diag}
          <p style="color:#888;font-size:12px;margin-top:14px">Quelle: peakcareai.com · Formular „${esc(formName)}" · Grund: ${esc(reason)}</p>
        </div>`,
      }),
    });
  } catch (e) {
    console.error('notifyBlocked failed', (e && e.message) || String(e));
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

  const formName = data['form-name'] || 'contact';

  // Honeypot: gefülltes Bot-Feld → still akzeptieren (kein Mailversand), damit Bots keinen Fehler sehen.
  // Bewusst OHNE Benachrichtigung: das Feld ist im Formular unsichtbar, ein Mensch kann es
  // nicht ausfuellen — hier gibt es keinen Zweifelsfall, den jemand pruefen muesste.
  if (data['bot-field']) return { statusCode: 200, body: JSON.stringify({ ok: true }) };

  // Turnstile: nur aktiv wenn CLOUDFLARE_TURNSTILE_SECRET gesetzt.
  if (process.env.CLOUDFLARE_TURNSTILE_SECRET) {
    const token = data['cf-turnstile-response'];
    const ip = event.headers['cf-connecting-ip'] || event.headers['x-forwarded-for'] || '';
    if (!await verifyTurnstile(token, ip)) {
      // PATCH 03.09.2026: dieser Zweig verlor bisher still. Ein FEHLENDES/abgelaufenes Token
      // (Turnstile-Tokens leben ~300s) trifft auch echte Menschen, die laenger schreiben.
      await notifyBlocked(token ? 'Turnstile-Verifikation fehlgeschlagen' : 'Turnstile-Token fehlte oder war abgelaufen', data, formName, { ip, ua: event.headers['user-agent'] || event.headers['User-Agent'] || '' });
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
  }

  // Spam still verwerfen (200 zurück, damit der Bot „Erfolg" sieht und keine echte Mail rausgeht).
  if (isSpam(data)) return { statusCode: 200, body: JSON.stringify({ ok: true }) };

  const name = data.name || data.Name || '';
  const email = data.email || data.Email || '';

  const rows = Object.entries(data)
    .filter(([k]) => !['form-name', 'bot-field'].includes(k))
    .map(([k, v]) => `<tr><td style="padding:4px 12px;font-weight:600;vertical-align:top;border-bottom:1px solid #eee">${esc(k)}</td><td style="padding:4px 12px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`)
    .join('');

  // REQ-2026-08-17-JEDE-FUNNEL-TESTMAIL-TRAEGT-DENSELBEN-BETREFF-WIE-EIN-ECHTER-HOTEL-LEAD (PCAI, 17.08.):
  // funnel-check test submissions were indistinguishable from real leads by subject line alone,
  // because both go through this exact same code path (that sameness IS the delivery proof).
  // Fix: an explicit opt-in flag only SEO/GEO's own test payloads set — never present in a real
  // form submission — swaps the subject prefix without touching delivery, replyTo, or the Brevo
  // call itself. The proof stays "did it arrive", not "does it say the right words".
  const isFunnelTest = String(data['_funnel_test'] || '').toLowerCase() === 'true';

  const html = `<div style="font-family:Arial,sans-serif;color:#1a1a1a">
    <h2 style="margin:0 0 12px">${isFunnelTest ? '🧪 Funnel-Testmail' : '🏨 Neue PCAI-Anfrage'} — ${esc(formName)}</h2>
    <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    <p style="color:#888;font-size:12px;margin-top:14px">Quelle: peakcareai.com · Formular „${esc(formName)}"</p>
  </div>`;

  const payload = {
    sender: SENDER,
    to: TO,
    bcc: BCC,
    subject: `${isFunnelTest ? '🧪 PCAI-TEST' : '🏨 PCAI-Lead'}: ${formName}${name ? ' — ' + name : ''}`,
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
