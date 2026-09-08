import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function BlogEuAiActChecklist() {
  const checklist = [
    {
      num: '01',
      title: 'Inventory: what AI systems are you actually running?',
      body: 'Before any documentation, you need a complete list. This includes the tools your procurement team bought — and the ones your staff added themselves. Revenue management software, chatbots, guest messaging automation, upsell tools, pricing tools, translation plugins, review response generators. If it uses AI or machine learning, it goes on the list.',
      tip: 'Run a 30-minute team round with front desk, F&B, and management. Ask: "Which apps or tools do you use that feel automatic or suggest things to you?" You will find tools nobody formally approved.',
    },
    {
      num: '02',
      title: 'Risk classification: which category does each system fall under?',
      body: 'The EU AI Act organises AI systems into four risk categories. Most hotel tools fall into "limited risk" (chatbots, recommendation systems) or "minimal risk" (spam filters, content tools). High-risk systems — those that influence decisions about people — carry stricter requirements. A tool that scores guests for upgrade eligibility or flags staff performance likely qualifies.',
      tip: 'For each tool, ask: does this system influence a decision about a person (guest or employee)? If yes, treat it as potential high-risk until you confirm otherwise.',
    },
    {
      num: '03',
      title: 'System description: what does each tool do, and what decisions does it influence?',
      body: 'For each AI system on your list, write one paragraph: what it does, what input data it processes, what output it produces, and what happens next. "Our chatbot receives guest inquiries, processes the text, and generates a response that is sent to the guest without human review." That is a sufficient description for limited-risk systems.',
      tip: 'One paragraph per system. No technical detail required. The goal is a plain-language record that a regulator or auditor can read without needing to be an engineer.',
    },
    {
      num: '04',
      title: 'Data access map: what guest or staff data does each system touch?',
      body: 'List what personal data each AI tool accesses: reservation data, guest names, room preferences, contact details, payment status, communication history. Note where the data is stored (your PMS, the vendor\'s cloud, which country), and whether a data processing agreement is in place with the vendor.',
      tip: 'If your vendor stores guest data outside the EU — the US, India, or undisclosed — you need a Data Processing Agreement (DPA) that covers this. Most reputable vendors have one. If they don\'t, that is a red flag.',
    },
    {
      num: '05',
      title: 'Guest transparency: where does AI interact with guests?',
      body: 'The EU AI Act requires that guests know when they are interacting with an AI system — specifically chatbots and automated communication tools. This means your chatbot or automated messaging tool needs a disclosure. "You are chatting with an automated assistant. For immediate help, reply HUMAN." It does not need to be prominent. It needs to exist.',
      tip: 'Check every guest touchpoint: booking confirmation emails, pre-arrival messages, in-stay chatbots, review response automation. Add a one-line AI disclosure to each that doesn\'t already have one.',
    },
    {
      num: '06',
      title: 'Oversight: who is responsible for each tool, and what can be overridden?',
      body: 'The EU AI Act requires "meaningful human oversight" for AI systems. In practice, this means: someone at your property is responsible for each tool, that person can override or disable it, and there is a procedure for doing so. "Front desk manager can manually override chatbot responses and disable the tool via the admin panel." That is sufficient.',
      tip: 'Document the override procedure for each tool. It does not need to be complex — it needs to be written down and known to the person responsible.',
    },
    {
      num: '07',
      title: 'Vendor compliance: does your AI vendor provide the documentation you need?',
      body: 'Your vendors — particularly for high-risk or limited-risk AI tools — should be able to provide their own EU AI Act documentation: technical specifications, risk assessments, and evidence of compliance testing. Ask each vendor directly: "Do you provide EU AI Act documentation for your system?" The answer tells you a great deal about how seriously they are taking Article 50 transparency compliance.',
      tip: 'Vendors who could not answer this question by May 2026 were not ready for August — and most still are not compliant now.',
    },
    {
      num: '08',
      title: 'Written record: one system card per tool',
      body: 'Combine points 1–7 into a simple one-page record per AI system. Name of the tool. Vendor. What it does. Risk category. Data it accesses. Guest-facing disclosure (yes/no). Person responsible. Override procedure. Vendor DPA status. That document is your EU AI Act compliance record. Update it when systems change.',
      tip: 'This is not a legal document. You do not need a lawyer to write it. A structured Word or Notion document with consistent fields for each tool is sufficient for most independent hotels.',
    },
  ]

  return (
    <>
      <SEO
        lang="en"
        title="EU AI Act Hotel Checklist: 8 Things to Document — Article 50 In Force Since 2 August 2026 | peakcareai.com"
        description="Since 2 August 2026, the EU AI Act's Article 50 transparency rules have applied to hotels. Here are the 8 things an independent hotel needs to document — without a lawyer, without an IT team, in one afternoon."
        ogTitle="EU AI Act Hotel Checklist: 8 Things to Document — Article 50 In Force Since 2 August 2026"
        ogDescription="Practical EU AI Act compliance for independent hotels. What to document, how to do it, and what counts as sufficient."
        type="article"
        canonical="https://peakcareai.com/blog/eu-ai-act-hotel-checklist-2026"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "EU AI Act Hotel Checklist: 8 Things to Document — Article 50 In Force Since 2 August 2026",
          "inLanguage": "en",
          "author": { "@type": "Person", "name": "Andreas Donner", "url": "https://peakcareai.com/about" },
          "publisher": { "@type": "Organization", "name": "Peak Care AI", "url": "https://peakcareai.com" },
          "datePublished": "2026-05-27",
          "description": "Since 2 August 2026, the EU AI Act's Article 50 transparency rules have applied to European hotels. An 8-point checklist for independent hotel operators: what to document, how to classify AI tools, and what constitutes sufficient compliance without legal support.",
          "keywords": "EU AI Act hotels, EU AI Act hotel checklist, hotel AI compliance 2026, EU AI Act Article 50 August 2026, independent hotel EU AI Act, hotel AI documentation, EU AI Act hospitality"
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does the EU AI Act apply to independent hotels?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The EU AI Act applies to any organisation operating in the EU that deploys AI systems — including independent hotels. Most hotel AI tools fall into the limited-risk or minimal-risk category, which means the compliance requirements are manageable: primarily transparency disclosures and basic documentation. High-risk systems require more, but most hotel tools do not qualify as high-risk."
              }
            },
            {
              "@type": "Question",
              "name": "What is the EU AI Act deadline for hotels?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The key date was 2 August 2026, when the Article 50 transparency requirements became applicable. Hotels using chatbots, automated guest communication tools, or AI-driven pricing systems should already have their documentation and transparency notices in place."
              }
            },
            {
              "@type": "Question",
              "name": "What counts as an AI system under the EU AI Act for a hotel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Any software that uses machine learning, statistical inference, or automated decision-making to generate outputs — including recommendations, predictions, or decisions. In a hotel context this includes: revenue management software, chatbots and automated messaging, upsell and upgrade tools, guest sentiment analysis, review response generators, and demand forecasting tools."
              }
            },
            {
              "@type": "Question",
              "name": "Does a hotel chatbot need an AI disclosure under the EU AI Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The EU AI Act requires that users are informed when they are interacting with an AI system — particularly chatbots and virtual assistants. The disclosure does not need to be prominent, but it must be present. A single line such as 'You are chatting with an automated assistant. Type HUMAN to reach a staff member.' satisfies this requirement."
              }
            },
            {
              "@type": "Question",
              "name": "Do hotels need a lawyer to comply with the EU AI Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For most independent hotels using limited-risk AI tools, no. The documentation requirements — a plain-language system description, data access record, transparency disclosure, and oversight procedure — can be completed by an operations manager in a structured afternoon. Legal support is warranted if you use high-risk AI systems or are part of a larger group subject to regulatory scrutiny."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if a hotel does not comply with the EU AI Act's Article 50 rules by 2 August 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enforcement is risk-tiered. Hotels using minimal- or limited-risk AI systems face low near-term enforcement risk for incomplete documentation in this first phase. However, guest transparency requirements (chatbot disclosures) are more actively enforced. The practical risk for independent hotels is less regulatory penalty and more reputational: a guest complaint about undisclosed AI interaction is harder to manage than completing a one-page system record."
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
            <span className="text-gold-400 text-sm">EU AI Act · Hotels</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            ✓ In force since: 2 August 2026
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            EU AI Act Hotel Checklist:<br />
            <span className="text-gold-400">8 things to document — Article 50 in force since 2 August 2026</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            No lawyer. No IT team. One structured afternoon. Here is what an independent hotel needs to have on paper — and what actually counts as sufficient.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>By <strong className="text-white/70">Andreas Donner</strong></span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* URGENCY BAR */}
      <div className="bg-red-950 border-y border-red-800/40 py-3">
        <div className="container-main max-w-3xl flex items-center gap-3 text-sm">
          <span className="text-red-400">⚠</span>
          <span className="text-red-300">The EU AI Act's Article 50 transparency requirements have applied since <strong>2 August 2026</strong>. Most hotel chatbots, automated messaging tools, and upsell systems fall into this category.</span>
        </div>
      </div>

      {/* BODY */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700">

            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Why this still matters — and what 2 December 2026 changes</h2>
            <p>
              Most hotel operators have heard that the EU AI Act exists. Fewer know that 2 August 2026 has already passed — Article 50 transparency requirements for the AI systems most hotels already run have been enforceable since that date, and since 20 July 2026 the European Commission's final guidelines set out exactly what "enforceable" means in practice.
            </p>
            <p>
              The good news: for an independent hotel using standard AI tools, compliance is not complex. It is documentation. It is disclosure. It is knowing what you are running and having a one-page record of it. A 50-room property can complete this in an afternoon.
            </p>
            <p>
              The next real date is 2 December 2026 — the marking deadline for AI systems that were already on the market before August. This checklist is for hotels closing that gap before it arrives.
            </p>

          </div>

          {/* CHECKLIST */}
          <div className="mt-10 space-y-6">
            {checklist.map(({ num, title, body, tip }) => (
              <div key={num} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-4 p-6">
                  <span className="text-3xl font-bold text-gold-400 shrink-0 leading-none mt-1">{num}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
                  </div>
                </div>
                <div className="bg-blue-50 border-t border-blue-100 px-6 py-3 flex gap-3">
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Practical step</span>
                  <p className="text-blue-800 text-sm leading-relaxed">{tip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What the completed record looks like</h2>
            <p>
              When you have worked through the eight points above, you will have a simple document — one page per AI system — that contains:
            </p>
            <ul className="space-y-1 text-sm">
              {[
                'System name and vendor',
                'What it does (plain language, one paragraph)',
                'Risk category under EU AI Act',
                'Personal data it accesses and where it is stored',
                'Guest-facing disclosure (present / not present / not applicable)',
                'Person responsible and override procedure',
                'Vendor DPA status',
                'Date last reviewed',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 mt-1 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              That document is your compliance record. Keep it somewhere accessible. Update it when you add or change tools. That is the full obligation for most independent hotels under EU AI Act limited-risk requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The thing most hotels discover during this process</h2>
            <p>
              The exercise of listing every AI system in your property almost always surfaces tools that no one formally approved. A front desk manager started using a ChatGPT plugin for email responses. Someone connected a third-party review tool to the PMS. A booking engine vendor quietly added an upsell recommendation feature in the last software update.
            </p>
            <p>
              This is shadow AI — AI use that happens outside management visibility. It is not unique to your property. It is common across the industry. The EU AI Act creates a formal reason to surface it and bring it under the same documentation and oversight you are applying to your sanctioned tools.
            </p>
            <p>
              The checklist above is also, in practice, a shadow AI audit.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently asked questions</h2>
          </div>

          <div className="space-y-5 mt-2">
            {[
              {
                q: 'Does the EU AI Act apply to independent hotels?',
                a: 'Yes. It applies to any organisation operating in the EU that deploys AI systems. Most hotel AI tools fall into limited-risk or minimal-risk categories, which means manageable requirements: primarily transparency disclosures and basic documentation.'
              },
              {
                q: 'What was the actual deadline?',
                a: '2 August 2026 — the Article 50 transparency requirements have applied since that date, covering most hotel chatbots, automated messaging tools, and pricing systems.'
              },
              {
                q: 'What counts as an AI system in a hotel?',
                a: 'Any software using machine learning, statistical inference, or automated decision-making. In hotels: revenue management software, chatbots, automated messaging, upsell tools, guest sentiment analysis, review response generators, demand forecasting tools.'
              },
              {
                q: 'Do we need a lawyer to do this?',
                a: 'For most independent hotels using limited-risk tools: no. The documentation — plain-language system descriptions, data records, transparency notices, oversight procedures — can be completed by an operations manager in a structured afternoon.'
              },
              {
                q: 'What if we miss the August deadline?',
                a: 'Enforcement is risk-tiered. The near-term risk for independent hotels is less about regulatory penalty and more about guest complaints regarding undisclosed AI interaction, which are harder to manage than a one-page compliance record. Starting now is the practical choice.'
              },
              {
                q: 'How long does this take for a typical 40–80 room property?',
                a: 'In practice: 60–90 minutes to inventory all AI systems (including a team round to surface shadow AI), and 30 minutes per system to complete the one-page record. Most properties have 3–6 AI systems. Total: one half-day.'
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-navy-900 rounded-2xl p-8 text-center">
            <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">AI Readiness Check</p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which of your systems need documentation?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              A 30-minute structured conversation to map your current AI tools, classify them, and identify what needs to be on paper for Article 50 compliance. No slides. No software pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Book a free 30-min call
              </a>
              <Link
                to="/hotel-ai-readiness-check"
                className="inline-block border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Learn about the AI Readiness Check →
              </Link>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">Related articles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/blog/shadow-ai-hotels" className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors">
                <p className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-2">EU AI Act</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug">Shadow AI in Hotels: What your team is already using — and why you should know</p>
              </Link>
              <Link to="/blog/hotel-ai-vendor-questions" className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors">
                <p className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-2">Vendor Selection</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug">Questions to ask any AI vendor before signing — a hotel operator's checklist</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
