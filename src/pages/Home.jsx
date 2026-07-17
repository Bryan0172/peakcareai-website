import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLang()
  const h = t.home

  return (
    <>
      <SEO
        title={h.meta_title}
        description={h.meta_desc}
        keywords="hotel AI visibility, AI search for hotels, GEO for hotels, generative engine optimization hospitality, hotel direct bookings AI, reduce OTA commission, hotel ChatGPT visibility, hotel AI schema markup, boutique hotel AI, hotel structured data, AI concierge, DACH hospitality AI, Bulgaria hotel AI, Balkans hospitality AI, hotel AI consultant Europe"
        type="website"
        siteName="Peak Care AI"
        canonical="https://peakcareai.com/"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Peak Care AI",
          "url": "https://peakcareai.com",
          "description": "AI visibility and GEO for hotels — we help independent and boutique hotels get found and recommended by AI search (ChatGPT, Google AI, booking assistants) and win back direct bookings. Built by a hotel-industry insider with 25 years developing, building and implementing hotels for international brands.",
          "serviceType": ["Hotel AI Visibility & GEO Optimization", "Structured Data / Schema for Hotels", "AI Search Readiness Check", "Direct Booking Optimization", "AI Concierge & Guest Communication"],
          "areaServed": [
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Austria" },
            { "@type": "Country", "name": "Switzerland" },
            { "@type": "Country", "name": "France" },
            { "@type": "Country", "name": "Spain" },
            { "@type": "Country", "name": "Netherlands" },
            { "@type": "Country", "name": "Belgium" },
            { "@type": "Country", "name": "Sweden" },
            { "@type": "Country", "name": "Norway" },
            { "@type": "Country", "name": "Denmark" },
            { "@type": "Country", "name": "Finland" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Italy" },
            { "@type": "Country", "name": "Czech Republic" },
            { "@type": "Country", "name": "Poland" },
            { "@type": "Country", "name": "Bulgaria" },
            { "@type": "Country", "name": "Greece" },
            { "@type": "Country", "name": "Romania" },
            { "@type": "Country", "name": "Serbia" },
            { "@type": "Country", "name": "North Macedonia" }
          ],
          "founder": {
            "@type": "Person",
            "name": "Andreas Donner",
            "jobTitle": "Founder",
            "url": "https://peakcareai.com/about",
            "description": "25 years in international hotel project development, construction and brand implementation (Aldiana, Meliá, Thomas Cook, Maritim International).",
            "knowsAbout": ["Hotel AI Visibility", "GEO for Hospitality", "Hotel Brand Implementation", "Hospitality Operations"]
          },
          "sameAs": [
            "https://www.linkedin.com/in/andreas-donner-peakcare",
            "https://www.linkedin.com/company/peakcareai"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": h.faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }]}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(105deg, rgba(7,22,40,0.96) 0%, rgba(11,33,55,0.88) 45%, rgba(11,33,55,0.65) 100%),
            url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1920&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,152,10,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,152,10,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-main relative py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase">
                {h.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              {h.hero.h1_line1}<br />
              <span className="text-gold-400">{h.hero.h1_line2}</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/65 leading-relaxed mb-4 max-w-2xl font-light">
              {h.hero.sub}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-white/45">
              {h.hero.trust.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gold-400/70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-gold-400/20"
              >
                {h.hero.cta_primary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/hotel-ai-readiness-check"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors duration-200 text-base backdrop-blur-sm"
              >
                {h.hero.cta_secondary}
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/45">
              {h.hero.microtext}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-main py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-gold-500 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              The Problem
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-navy-900 leading-tight mb-6">
              {h.trust.h2}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              {h.trust.body}
            </p>
            <p className="text-navy-900 font-semibold text-base md:text-lg border-l-2 border-gold-400 pl-4">
              {h.trust.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ─── LIVE PROOF ─── */}
      <section className="section-white py-20" style={{ backgroundColor: '#f8f9fb' }}>
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">See For Yourself</p>
            <h2 className="section-heading">Ask ChatGPT right now.</h2>
            <p className="section-subheading mb-8">
              Open ChatGPT, Perplexity or Google AI Overviews and ask: <span className="font-semibold text-navy-900">"best boutique hotels in [your town]"</span>. Is your hotel there? Most independent hotels aren't — not because they're not good enough, but because AI can't read their website.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
              >
                Get your free AI Visibility Check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY NOW ─── */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.why_now.label}</p>
            <h2 className="section-heading">{h.why_now.h2}</h2>
            <p className="section-subheading">{h.why_now.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {h.why_now.items.map((c) => (
              <div key={c.title} className="card p-6">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-navy-900 mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFER ─── */}
      <section className="bg-navy-900 py-16 border-t border-white/5">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold-400/15 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-4">
                Free to start
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                One clear engagement per hotel — no subscription.
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                Start with a free AI visibility check. If it's useful, we agree a clear fixed price for the 5 fixes — sized to your house, no subscription lock-in, no pricing surprises.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center gap-4">
              <a
                href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20 whitespace-nowrap"
              >
                Get your free AI Visibility Check
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/hotel-ai-readiness-check"
                className="text-white/50 hover:text-white text-sm transition-colors underline underline-offset-2"
              >
                or see how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY PEAK CARE AI ─── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.why_us.label}</p>
              <h2 className="section-heading mb-6">{h.why_us.h2}</h2>
              <p className="text-slate-500 leading-relaxed mb-8">{h.why_us.body}</p>
              <Link to="/about" className="btn-secondary">{h.why_us.cta}</Link>
            </div>
            <div className="space-y-5">
              {h.why_us.items.map((d, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-gold-400 text-navy-900 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{d.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEAD MAGNET ─── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Free AI Visibility Snapshot</p>
            <h2 className="section-heading mb-4">Get your free AI Visibility Snapshot.</h2>
            <p className="section-subheading mb-8">
              Tell us your hotel's name and website — we'll check what AI currently sees (or doesn't see) and send you the 5 findings. No commitment.
            </p>
            <a
              href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
            >
              Request your free snapshot
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.faq_label}</p>
            <h2 className="section-heading">{h.faq_h2}</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {h.faqs.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-semibold text-navy-900 text-base">{item.q}</span>
                  <svg className="w-5 h-5 text-gold-500 shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(7,22,40,0.97) 0%, rgba(11,33,55,0.93) 100%),
            url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1920&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-main text-center relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">{h.cta_final.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {h.cta_final.h2_line1}<br />
            {h.cta_final.h2_line2}
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{h.cta_final.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-10 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
            >
              {h.cta_final.cta_primary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/hotel-ai-readiness-check"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors text-base"
            >
              {h.cta_final.cta_secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
