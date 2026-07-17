import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export default function CorporateAI() {
  const { t } = useLang()
  const c = t.corporateAI

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

      {/* Why governance */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{c.why_label}</p>
              <h2 className="section-heading">{c.why_h2}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">{c.why_p1}</p>
              <p className="text-slate-600 leading-relaxed mb-5">{c.why_p2}</p>
              <p className="text-slate-600 leading-relaxed">{c.why_p3}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-bold text-navy-900 mb-5 text-sm uppercase tracking-wide">{c.questions_heading}</h3>
              <ul className="space-y-4">
                {c.questions.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="text-navy-300 mt-0.5 shrink-0 font-bold">?</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data classification */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{c.data_label}</p>
            <h2 className="section-heading">{c.data_h2}</h2>
            <p className="section-subheading">{c.data_sub}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  {c.data_cols.map((col, i) => (
                    <th key={col} className={`text-left px-5 py-4 font-semibold ${i === 0 ? 'rounded-tl-xl' : ''} ${i === c.data_cols.length - 1 ? 'rounded-tr-xl' : ''}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.data_rows.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-4 font-semibold text-navy-800">{row.category}</td>
                    <td className="px-5 py-4 text-slate-500">{row.examples}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        row.risk === 'High' || row.risk === 'Hoch' ? 'bg-red-100 text-red-700' :
                        row.risk === 'Medium' || row.risk === 'Mittel' ? 'bg-amber-100 text-amber-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {row.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Governance elements */}
      <section className="section-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{c.elements_label}</p>
            <h2 className="section-heading">{c.elements_h2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.elements.map((el, i) => (
              <div key={el.title} className="card p-6">
                <div className="text-2xl font-bold text-slate-100 mb-3">0{i + 1}</div>
                <h3 className="font-bold text-navy-900 mb-2">{el.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR/DSGVO */}
      <section className="bg-navy-800 py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-5">{c.gdpr_h2}</h2>
            <p className="text-white/60 leading-relaxed mb-5">{c.gdpr_p1}</p>
            <p className="text-white/60 leading-relaxed">{c.gdpr_p2}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{c.cta_h2}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{c.cta_sub}</p>
          <Link to="/contact" className="btn-primary">{c.cta}</Link>
        </div>
      </section>
    </>
  )
}
