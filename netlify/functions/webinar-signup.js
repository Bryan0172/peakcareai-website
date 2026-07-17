// Netlify Function: webinar-signup
// Triggered by Netlify Forms submission webhook for "webinar-registration"
// 1. Adds contact to Brevo list #7 (Webinar KW20)
// 2. Sends confirmation email via Brevo transactional API

// Key kommt aus der Netlify-Env (wie lead.js) — NIE hartcodiert. Der zuvor hier
// hartcodierte Schluessel war der am 17.07. deaktivierte 'Peak Care Website'-Key:
// die Funktion war seitdem kaputt (Brevo lehnt den toten Key ab) und der Key haette
// bei einem oeffentlichen Repo im Klartext gestanden. [[no_secrets]]
const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = 9  // Webinar-Liste KW20

// ZOOM-LINK: nach Erstellung eintragen
const ZOOM_LINK = 'https://us05web.zoom.us/j/87605027371?pwd=gTrICkGdf9zgr1wXJlRxFsbloL9iRg.1'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let payload
  try {
    payload = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  // Netlify Forms sends data in payload.data
  const formData = payload.data || payload
  const email = formData.email
  const name = formData.name
  const hotel = formData.hotel || ''
  const role = formData.role || ''

  if (!email || !name) {
    return { statusCode: 400, body: 'Missing required fields' }
  }

  // 1. Add to Brevo contact list
  try {
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' ') || '',
        attributes: { HOTEL: hotel, ROLE: role, WEBINAR: 'EU AI Act 13.05.2026' },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    })
  } catch (err) {
    console.error('Brevo contact error:', err)
  }

  // 2. Send confirmation email
  try {
    const firstName = name.split(' ')[0]
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Andreas Donner | peakcareai.com', email: 'kontakt.ki.hotel@gmail.com' },
        to: [{ email, name }],
        replyTo: { email: 'kontakt.ki.hotel@gmail.com' },
        subject: `AI in Hotel Operations — Your seat is confirmed · 13 May`,
        htmlContent: `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #fff; color: #1a2332;">
  <span style="display:none;max-height:0;overflow:hidden;mso-hide:all;">30-minute session for hotel operators · Operations first · Governance as context · No slides</span>

  <div style="border-bottom: 2px solid #c4980a; padding-bottom: 20px; margin-bottom: 28px;">
    <p style="color: #c4980a; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 4px;">peakcareai.com</p>
    <p style="color: #1a2332; font-size: 22px; font-weight: 700; margin: 0;">Your seat is confirmed.</p>
  </div>

  <p style="color: #333; font-size: 15px; margin: 0 0 16px;">Hi ${firstName},</p>
  <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
    Thank you for registering. Below are your access details for the live session on Tuesday, 13 May — AI in Hotel Operations.
  </p>

  <div style="background: #071628; border-radius: 12px; padding: 24px; margin: 0 0 24px;">
    <p style="color: #c4980a; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 8px;">Session Details</p>
    <p style="color: #fff; font-size: 17px; font-weight: 700; margin: 0 0 4px;">AI in Hotel Operations</p>
    <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0 0 16px;">Tuesday, 13 May 2026 · 10:00–10:30 CET · Zoom</p>
    <a href="${ZOOM_LINK}" style="display: inline-block; background: #c4980a; color: #071628; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none;">Join on Zoom →</a>
  </div>

  <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 16px;"><strong>What to prepare (optional):</strong><br>
  Have a rough list of the software systems your hotel uses — PMS, RMS, any guest-facing tools. Not required, but useful for the Q&A section.</p>

  <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
    If you have a specific question about your operation you would like addressed during the live Q&A, reply to this email before the session.
  </p>

  <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">See you on 13 May.</p>
  <p style="color: #333; font-size: 14px; font-weight: 600; margin: 0;">Andreas Donner</p>
  <p style="color: #999; font-size: 13px; margin: 4px 0 0;"><a href="https://peakcareai.com" style="color: #999;">peakcareai.com</a> · <a href="mailto:kontakt.ki.hotel@gmail.com" style="color: #999;">kontakt.ki.hotel@gmail.com</a></p>
</body>
</html>`,
      }),
    })
  } catch (err) {
    console.error('Brevo email error:', err)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}
