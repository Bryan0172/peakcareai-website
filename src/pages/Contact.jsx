import { useState, useRef, useEffect } from 'react'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const [form, setForm] = useState({ name: '', company: '', email: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef(null)
  const turnstileWidgetId = useRef(null)

  // Explizites Rendern statt implizitem data-sitekey-Auto-Scan: das Turnstile-Script
  // (async defer) laeuft haeufig VOR React das <div ref=turnstileRef> mountet, wodurch
  // der implizite Scan den Div nie sieht und real nie ein Token entsteht (stiller
  // Lead-Verlust ohne Fehler — identischer Bug wie bei peak-care.com). (11.07.)
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return
    let cancelled = false
    let pollTimer = null

    function renderWidget() {
      if (cancelled || !turnstileRef.current || turnstileWidgetId.current !== null) return
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      pollTimer = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollTimer)
          renderWidget()
        }
      }, 200)
    }

    return () => {
      cancelled = true
      if (pollTimer) clearInterval(pollTimer)
      if (turnstileWidgetId.current !== null && window.turnstile) {
        try { window.turnstile.remove(turnstileWidgetId.current) } catch (e) { /* noop */ }
      }
    }
  }, [])

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      // Brevo-Lead-Funktion (garantierte Zustellung in den Posteingang). res.ok prüfen,
      // damit bei Versand-Fehler KEIN falsches "gesendet" angezeigt wird (kein stiller Verlust).
      const res = await fetch('/.netlify/functions/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...form,
          'cf-turnstile-response': turnstileToken,
        }),
      })
      if (!res.ok) throw new Error('lead submit failed: ' + res.status)
      setSubmitted(true)
      // GA4 Lead-Conversion-Event (Consent-Mode-aware: gtag respektiert die Einwilligung)
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { form_name: 'contact' })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <SEO
        title={c.meta_title}
        description={c.meta_desc}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{c.hero_label}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.hero_h1}</h1>
            <p className="text-white/65 text-lg leading-relaxed">{c.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-navy-900 mb-6">{c.what_label}</h2>
              <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                {c.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-gold-400 text-navy-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800 mb-1">{step.title}</p>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-navy-900 mb-4 text-sm">{c.direct_label}</h3>
                <div className="space-y-3 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${c.email}`} className="hover:text-navy-700 transition-colors">
                      {c.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span style={{ whiteSpace: 'pre-line' }}>{c.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-navy-50 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-400/20 text-gold-500 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">{c.success_h2}</h2>
                  <p className="text-slate-500 leading-relaxed">{c.success_p}</p>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">{c.fields.name} *</label>
                      <input
                        type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder={c.fields.name_ph}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">{c.fields.company} *</label>
                      <input
                        type="text" name="company" required
                        value={form.company} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder={c.fields.company_ph}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">{c.fields.email} *</label>
                      <input
                        type="email" name="email" required
                        value={form.email} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder={c.fields.email_ph}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-1.5">{c.fields.role}</label>
                      <input
                        type="text" name="role"
                        value={form.role} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder={c.fields.role_ph}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">{c.fields.message} *</label>
                    <textarea
                      name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                      placeholder={c.fields.message_ph}
                    />
                  </div>

                  {TURNSTILE_SITE_KEY && (
                    // Kein "cf-turnstile"-Klassenname: Cloudflares eigener MutationObserver
                    // scannt sonst implizit und kollidiert mit dem expliziten render() oben.
                    <div ref={turnstileRef} className="turnstile-widget" style={{marginBottom: '8px'}}></div>
                  )}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-slate-400">
                      {c.privacy_note}{' '}
                      <Link to="/privacy" className="underline hover:text-navy-600">{c.privacy_link}</Link>.
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 disabled:opacity-60 text-navy-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-sm whitespace-nowrap"
                    >
                      {sending ? c.sending : c.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
