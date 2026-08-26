import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: (s.meta_title || 'Hotel AI Services').split('|')[0].trim(),
    serviceType: 'Hotel AI — Direct Bookings, Automation & Guest Communication',
    provider: { '@type': 'Organization', name: 'Peak Care AI', url: 'https://peakcareai.com' },
    areaServed: ['Europe', 'Germany', 'Austria', 'Switzerland', 'Bulgaria', 'Balkans'],
    description: s.meta_desc,
    url: 'https://peakcareai.com/services',
  }

  return (
    <>
      <SEO
        title={s.meta_title}
        description={s.meta_desc}
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{s.hero_label}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {s.hero_h1}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">{s.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-white">
        <div className="container-main space-y-16">
          {s.items.map((item, i) => (
            <div key={item.id} id={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-1">
                <span className="text-4xl font-bold text-slate-100">{item.number}</span>
              </div>
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold text-navy-900 mb-1">{item.title}</h2>
                <p className="text-gold-500 font-medium text-sm mb-4">{item.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs text-slate-400 italic">
                  <span className="font-semibold not-italic text-slate-500">{s.suited_label}:</span> {item.suited}
                </p>
              </div>
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-7">
                <h3 className="text-sm font-bold text-navy-800 uppercase tracking-wide mb-4">{s.deliverables_heading}</h3>
                <ul className="space-y-3">
                  {item.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="text-gold-500 mt-0.5 shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-light py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">How it works</p>
            <h2 className="section-heading">Three steps. No overhead.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center">1</div>
              <div>
                <h3 className="font-bold text-navy-900 mb-2">Initial conversation</h3>
                <p className="text-slate-500 text-sm leading-relaxed">30 minutes, no slides. We talk through where the pressure sits — operations, compliance, or both.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center">2</div>
              <div>
                <h3 className="font-bold text-navy-900 mb-2">Operational assessment</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Map tools, workflows, and exposure. Identify what AI is already in use and what realistic potential looks like for your property.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center">3</div>
              <div>
                <h3 className="font-bold text-navy-900 mb-2">Structured implementation roadmap</h3>
                <p className="text-slate-500 text-sm leading-relaxed">A 90-day plan, sequenced by impact — starting with what improves operations today, then closing the Article 50 transparency gaps that have applied since 2 August 2026.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{s.cta_h2}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{s.cta_sub}</p>
          <Link to="/contact" className="btn-primary">{s.cta}</Link>
        </div>
      </section>
    </>
  )
}
