import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

export function Privacy() {
  const { t } = useLang()
  const l = t.legal

  return (
    <>
      <SEO title={`${l.privacy_title} | Peak Care AI`} />
      <section className="bg-navy-900 py-14">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-white">{l.privacy_title}</h1>
          <p className="text-white/50 mt-2 text-sm">{l.privacy_updated}</p>
        </div>
      </section>
      <section className="section-white">
        <div className="container-main max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-800 text-sm">
              <strong>Note:</strong> {l.privacy_placeholder}
            </div>
            <p>{l.privacy_p1}</p>
            <h2 className="text-base font-bold text-navy-900 mt-6">{l.privacy_data_h}</h2>
            <p>{l.privacy_data_p}</p>
            <h2 className="text-base font-bold text-navy-900 mt-6">{l.privacy_rights_h}</h2>
            <p>{l.privacy_rights_p}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export function Imprint() {
  const { t } = useLang()
  const l = t.legal

  return (
    <>
      <SEO title={`${l.imprint_title} | Peak Care AI`} />
      <section className="bg-navy-900 py-14">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-white">{l.imprint_title}</h1>
        </div>
      </section>
      <section className="section-white">
        <div className="container-main max-w-3xl">
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-800 text-sm">
              <strong>Note:</strong> {l.imprint_placeholder}
            </div>
            <div>
              <h2 className="text-base font-bold text-navy-900 mb-2">{l.imprint_resp_h}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{l.imprint_resp_p}</p>
            </div>
            <div>
              <h2 className="text-base font-bold text-navy-900 mb-2">{l.imprint_disc_h}</h2>
              <p>{l.imprint_disc_p}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
