import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function HospitalityFocus() {
  const { t } = useLang()
  const h = t.hospitality

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: (h.meta_title || 'AI for Independent Hotels').split('|')[0].trim(),
    serviceType: 'AI for Independent Hotels — Direct Bookings, Less OTA Dependency',
    provider: { '@type': 'Organization', name: 'Peak Care AI', url: 'https://peakcareai.com' },
    areaServed: ['Europe', 'Germany', 'Austria', 'Switzerland', 'Bulgaria', 'Balkans'],
    description: h.meta_desc,
    url: 'https://peakcareai.com/hospitality',
  }

  return (
    <>
      <SEO
        title={h.meta_title}
        description={h.meta_desc}
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{h.hero_label}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{h.hero_h1}</h1>
            <p className="text-white/65 text-lg leading-relaxed">{h.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Hotel as a system */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.system_label}</p>
              <h2 className="section-heading">{h.system_h2}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{h.system_p1}</p>
              <p className="text-slate-600 leading-relaxed mb-6">{h.system_p2}</p>
              <p className="text-slate-600 leading-relaxed">{h.system_p3}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {h.departments.slice(0, 8).map((d) => (
                <div key={d.name} className="bg-navy-50 rounded-xl px-4 py-3 text-center">
                  <span className="text-navy-800 font-semibold text-sm">{d.name}</span>
                </div>
              ))}
              <div className="col-span-2 bg-gold-400/20 border border-gold-400 rounded-xl px-4 py-3 text-center">
                <span className="text-navy-900 font-bold text-sm">{h.system_connector}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department use cases */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.depts_label}</p>
            <h2 className="section-heading">{h.depts_h2}</h2>
            <p className="section-subheading">{h.depts_sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {h.departments.map((d) => (
              <div key={d.name} className="card p-6">
                <h3 className="font-bold text-navy-900 mb-3 pb-2 border-b border-slate-100">{d.name}</h3>
                <ul className="space-y-1.5">
                  {d.useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-gold-400 mt-0.5 shrink-0">▸</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadow AI */}
      <section id="shadow-ai" className="bg-navy-800 py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/40 text-gold-400 flex items-center justify-center shrink-0 text-xl">⚠</div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{h.shadow_h2}</h2>
                <p className="text-white/65 leading-relaxed mb-4">{h.shadow_p1}</p>
                <p className="text-white/65 leading-relaxed mb-4">{h.shadow_p2}</p>
                <p className="text-white/65 leading-relaxed">{h.shadow_p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{h.faq_label}</p>
            <h2 className="section-heading">{h.faq_h2}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {h.faqs.map((item) => (
              <div key={item.q} className="card p-6">
                <h3 className="font-bold text-navy-900 mb-2">{item.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{h.cta_h2}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{h.cta_sub}</p>
          <Link to="/contact" className="btn-primary">{h.cta}</Link>
        </div>
      </section>
    </>
  )
}
