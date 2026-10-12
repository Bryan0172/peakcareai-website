import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function BlogAiActProviderOrDeployer() {
  return (
    <>
      <SEO
        lang="en"
        title="EU AI Act for hotels: provider or deployer? | peakcareai.com"
        description="Whose duty is the AI disclosure in a guest chat? The name on the chat window decides. Orientation on Articles 3(3) and 50(1) of the EU AI Act."
        ogTitle="EU AI Act for hotels: provider or deployer?"
        ogDescription="The name on the chat window decides whose duty the AI disclosure is. A practical test for hotel guest assistants under Articles 3(3) and 50(1)."
        type="article"
        canonical="https://peakcareai.com/blog/eu-ai-act-provider-or-deployer"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "EU AI Act for hotels: are you the provider or the deployer of your guest assistant?",
          "inLanguage": "en",
          "author": { "@type": "Person", "name": "Andreas Donner", "url": "https://peakcareai.com/about" },
          "publisher": { "@type": "Organization", "name": "Peak Care AI", "url": "https://peakcareai.com" },
          "datePublished": "2026-09-30",
          "keywords": "EU AI Act provider deployer, EU AI Act Article 3, EU AI Act Article 50, hotel AI disclosure, guest chatbot AI Act, hotel guest assistant compliance",
          "description": "Whose duty is the AI disclosure in a guest chat? Orientation on Articles 3(3) and 50(1) of the EU AI Act for hotel guest assistants."
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does this apply equally to the website assistant and the one on WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The duty does not depend on the channel but on whether a guest speaks directly to an AI system. Website chat, messenger and phone announcements are each looked at separately."
              }
            },
            {
              "@type": "Question",
              "name": "Is a note in the imprint or privacy notice enough?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The duty aims at the guest being able to recognise it during the conversation. A note elsewhere is therefore weak protection. What matters is what the guest sees in the chat window."
              }
            },
            {
              "@type": "Question",
              "name": "Does the \\\"obvious\\\" exception apply to an assistant with a human first name?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A human first name, a photo or a natural conversational tone argue against it being obvious. Anyone relying on the exception should be able to justify it in writing."
              }
            },
            {
              "@type": "Question",
              "name": "Who in the hotel should settle this?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Whoever selected or named the assistant knows the contract path to the agency or manufacturer. The classification should be written down once, with a date."
              }
            }
          ]
        }]}
      />

      {/* HERO */}
      <section className="bg-navy-900 py-16">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <Link to="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link to="/blog/eu-ai-act-hotels-2026" className="text-white/40 hover:text-white/70 text-sm transition-colors">EU AI Act Guide</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold-400 text-sm">Provider or Deployer</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Article 3(3) &amp; Article 50(1)
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            EU AI Act for hotels:<br />
            <span className="text-gold-400">are you the provider or the deployer of your guest assistant?</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            Whose duty is the AI disclosure in a guest chat? The name on the chat window decides.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>By <strong className="text-white/70">Andreas Donner</strong></span>
            <span>·</span>
            <span>September 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">

            <article className="lg:col-span-3 prose prose-slate max-w-none">

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Since 2 August 2026, a guest talking to an AI assistant has to be able to tell that it is a machine.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Article 50(1) of the EU AI Act places that duty on the <strong>provider</strong> of the system, not on
                whoever merely uses it. The exception covers what is already obvious to a reasonably well-informed
                person from the circumstances.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">The test question: whose name is on the chat window?</h2>
              <p className="text-slate-600 leading-relaxed">
                Under Article 3(3), a provider is whoever develops an AI system, or has one developed, and puts it
                into service under its own name or trademark. A deployer is whoever uses a system under its own
                authority without providing it in that sense.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="text-left px-5 py-4 font-semibold">Situation</th>
                      <th className="text-left px-5 py-4 font-semibold">Likely classification</th>
                      <th className="text-left px-5 py-4 font-semibold">What follows</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-5 py-4 text-slate-600 align-top">A concierge assistant called "Ask Anna" on the house's own website, built or adapted by an agency and switched on under the house's name</td>
                      <td className="px-5 py-4 text-slate-600 align-top font-semibold">The house is providing the system</td>
                      <td className="px-5 py-4 text-slate-600 align-top">The disclosure "you are talking to an AI" is the house's own duty</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 text-slate-600 align-top">A standard widget running under the manufacturer's name</td>
                      <td className="px-5 py-4 text-slate-600 align-top font-semibold">The house is a deployer</td>
                      <td className="px-5 py-4 text-slate-600 align-top">The disclosure sits with the manufacturer; the house checks that it is actually visible in the chat window</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Most houses have never checked which of the two applies to them. It is rarely written down, and it
                tends to be decided by whoever chose the assistant's name.
              </p>

              {/* FAQ */}
              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-5">Four questions hotels ask</h2>
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                {[
                  { q: 'Does this apply equally to the website assistant and the one on WhatsApp?', a: 'The duty does not depend on the channel but on whether a guest speaks directly to an AI system. Website chat, messenger and phone announcements are each looked at separately.' },
                  { q: 'Is a note in the imprint or privacy notice enough?', a: 'The duty aims at the guest being able to recognise it during the conversation. A note elsewhere is therefore weak protection. What matters is what the guest sees in the chat window.' },
                  { q: 'Does the "obvious" exception apply to an assistant with a human first name?', a: 'A human first name, a photo or a natural conversational tone argue against it being obvious. Anyone relying on the exception should be able to justify it in writing.' },
                  { q: 'Who in the house should settle this?', a: 'Whoever selected or named the assistant knows the contract path to the agency or manufacturer. The classification should be written down once, with a date.' },
                ].map((item, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                      <span className="font-semibold text-navy-900 text-sm">{item.q}</span>
                      <svg className="w-4 h-4 text-gold-500 shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Your assistant, one page</h2>
              <p className="text-slate-600 leading-relaxed">
                Tell us which assistants your guests can reach and under which names they appear. We will send back
                one page setting out, for each, which of the two cases it most likely is and what follows from that.
              </p>
              <p className="text-slate-400 text-sm italic leading-relaxed mt-6">
                Orientation, not legal advice. Scope: EU. For a binding interpretation in an individual case, take legal advice.
              </p>

              {/* Author */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold shrink-0">AD</div>
                <div>
                  <p className="font-bold text-navy-900">Andreas Donner</p>
                  <p className="text-slate-500 text-sm">Founder, peakcareai.com · Dipl.-Ing. · 25 years of international hotel and construction projects, including for Meliá, Aldiana and Thomas Cook.</p>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="bg-navy-900 rounded-2xl p-5 text-center sticky top-20">
                <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Your Assistant, One Page</div>
                <p className="text-white font-bold text-sm mb-1">Send an enquiry</p>
                <p className="text-white/50 text-xs mb-4">Tell us which assistants you use — we send back the classification</p>
                <Link to="/contact" className="block bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold py-3 rounded-xl transition-colors text-sm">
                  Send an enquiry →
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
                <div className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">5-Minute Check</div>
                <p className="text-navy-900 font-bold text-sm mb-1">Is your hotel affected?</p>
                <p className="text-slate-500 text-xs mb-4">5 questions · instant result · free</p>
                <Link to="/assessment" className="block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Take the Assessment →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">More on the EU AI Act</div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/blog/eu-ai-act-hotels-2026" className="text-navy-700 hover:text-gold-500 font-medium">Article 50: What hotels must disclose →</Link></li>
                  <li><Link to="/blog/eu-ai-act-hotel-checklist-2026" className="text-navy-700 hover:text-gold-500 font-medium">The compliance checklist →</Link></li>
                  <li><Link to="/blog/hotel-ai-vendor-questions" className="text-navy-700 hover:text-gold-500 font-medium">Questions to ask your AI vendor →</Link></li>
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy-900 py-16">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Whoever chose your assistant's name made a legal classification without knowing it.
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            Tell us which assistants your guests can reach — we send back one page per assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors">
              Send an enquiry →
            </Link>
            <Link to="/assessment" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors">
              Take the 5-Minute Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
