import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <>
      <SEO
        title={a.meta_title}
        description={a.meta_desc}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{a.hero_label}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {a.hero_h1_line1}<br />
              <span className="text-gold-400">{a.hero_h1_line2}</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">{a.hero_sub}</p>
          </div>
        </div>
      </section>

      {/* Who / What */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{a.who_label}</p>
              <h2 className="section-heading mb-6">{a.who_h2}</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>{a.who_p1}</p>
                <p>{a.who_p2}</p>
                <p>{a.who_p3}</p>
              </div>
            </div>
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{a.what_label}</p>
              <h2 className="section-heading mb-6">{a.what_h2}</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>{a.what_p1}</p>
                <p>{a.what_p2}</p>
                <p>{a.what_p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{a.principles_label}</p>
            <h2 className="section-heading">{a.principles_h2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {a.principles.map((p) => (
              <div key={p.title} className="card p-7">
                <div className="w-2 h-2 rounded-full bg-gold-400 mb-4" />
                <h3 className="font-bold text-navy-900 text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand clarity */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-navy-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-5">{a.brand_h2}</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>{a.brand_p1}</p>
              <p>{a.brand_p2}</p>
              <p>{a.brand_p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{a.cta_h2}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{a.cta_sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">{a.cta_primary}</Link>
            <Link to="/services" className="btn-outline">{a.cta_secondary}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
