import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function BlogHotelAiVendorQuestions() {
  const sections = [
    {
      category: 'Data & Privacy',
      color: 'blue',
      questions: [
        {
          q: 'Where exactly is our guest data stored — and in which country?',
          why: 'EU data protection law (GDPR) requires that personal data transferred outside the EU is covered by appropriate safeguards. If the vendor stores data in the US, India, or "the cloud" without specifying a region, you have an open compliance issue before you have even turned on the product.',
          listen: 'A precise answer: country, data centre provider, and EU standard contractual clauses if outside EEA. Vague answers like "secure cloud infrastructure" are not answers.'
        },
        {
          q: 'Is a Data Processing Agreement (DPA) included in the contract — or do we have to request one?',
          why: 'Under GDPR, any vendor that processes personal data on your behalf must sign a DPA. It is not optional. Vendors who do not have one ready, or who describe it as a premium add-on, have not taken GDPR seriously.',
          listen: 'A standard DPA ready to sign. The vendor should send it to you, not the other way around.'
        },
        {
          q: 'Can we delete guest data on request — and in what timeframe?',
          why: 'Guests have the right to request deletion of their data. If the vendor cannot delete individual records within a defined period (typically 30 days), you inherit the compliance exposure.',
          listen: 'A specific timeframe and a confirmed process. "We handle deletion requests" is not sufficient without a defined procedure.'
        },
      ]
    },
    {
      category: 'EU AI Act',
      color: 'red',
      questions: [
        {
          q: 'What risk category does your system fall under according to the EU AI Act?',
          why: 'The EU AI Act requires that AI systems are classified — prohibited, high-risk, limited-risk, or minimal-risk. Vendors operating in the EU should know the answer for their own product. If they do not, they either have not done the analysis or do not believe the regulation applies to them.',
          listen: 'A clear category with a brief rationale. If the vendor says "we\'re still assessing," note the date and follow up. If they say "the EU AI Act doesn\'t apply to us," ask them to explain why in writing.'
        },
        {
          q: 'Do you provide EU AI Act documentation for your system — technical specifications, conformity assessment, or a system card?',
          why: 'The EU AI Act requires documentation for limited-risk and high-risk systems — from vendors, not just from hotel operators. Vendors deploying chatbots, automated communication tools, or recommendation systems in EU hotels should be able to produce this.',
          listen: 'An actual document or a clear timeline for when it will be available. "We\'re working on it" is less reassuring with the 2 August 2026 deadline in place.'
        },
        {
          q: 'Does your system require a transparency disclosure to guests — and does your product support implementing one?',
          why: 'The EU AI Act requires guests to be informed when interacting with AI systems, particularly chatbots and virtual assistants. If the vendor\'s product does not support adding a disclosure notice, you cannot meet this requirement without custom development.',
          listen: 'Confirmation that guest-facing AI interactions include a disclosure, and a description of where and how it appears. Ideally: a screenshot.'
        },
      ]
    },
    {
      category: 'Performance & Accountability',
      color: 'amber',
      questions: [
        {
          q: 'What happens when the system produces a wrong answer or makes a bad recommendation — who is responsible?',
          why: 'AI systems make errors. Revenue management tools occasionally produce unrealistic pricing. Chatbots occasionally give guests incorrect information. The question is not whether this will happen, but who owns the outcome when it does, and what the resolution process looks like.',
          listen: 'A clear accountability statement: what the vendor will do, in what timeframe, and whether there is contractual liability for harm caused by system errors. "We are not responsible for outputs" buried in a terms of service is a meaningful risk.'
        },
        {
          q: 'What is your SLA for system availability — and what happens if you miss it?',
          why: 'A guest-facing chatbot that goes down during peak check-in creates an operational problem that falls on your team. If the SLA does not include meaningful financial remedies for downtime, the vendor has no incentive to prioritise availability.',
          listen: 'A specific percentage (99.5%+), a measurement window, and a concrete remedy — typically service credits. Check whether scheduled maintenance is excluded from the SLA calculation.'
        },
        {
          q: 'Can we turn the system off — completely and immediately — if needed?',
          why: 'Human oversight is a requirement under the EU AI Act for AI systems. In practice, it means someone at your property must be able to disable the tool quickly if it behaves unexpectedly. Some SaaS tools make this harder than it sounds — the off-switch may require vendor involvement or carry contractual penalties.',
          listen: 'Confirmation that you can disable the system via your admin panel without contacting the vendor. Note any contractual provisions that penalise pausing or stopping the service.'
        },
      ]
    },
    {
      category: 'Pricing & Exit',
      color: 'purple',
      questions: [
        {
          q: 'What is the total cost of ownership — including implementation, integrations, training, and ongoing support?',
          why: 'The advertised price is rarely the total cost. PMS integrations often carry one-time fees. Staff training is rarely included. Custom configuration for your property structure may be billed separately. Ongoing support beyond basic ticket handling may require a premium tier.',
          listen: 'An itemised breakdown of all costs in year one and year two. Ask specifically: integration fees, training, onboarding, support tier, and whether pricing changes at renewal.'
        },
        {
          q: 'What does the exit process look like — how do we get our data out, and are there penalties for leaving?',
          why: 'Switching costs are how many SaaS vendors retain customers after quality declines. If your guest data is in a proprietary format, if exports are expensive, or if the contract includes significant early termination fees, you are less free than the initial contract implies.',
          listen: 'A data export format (ideally standard: CSV, JSON), an export process that does not require vendor assistance, and early termination costs stated in writing — not in a future "order form."'
        },
        {
          q: 'What happens to pricing and service levels if your company is acquired?',
          why: 'The hotel technology sector consolidates regularly. A vendor acquired by a larger platform may change pricing, discontinue products, or modify service terms on short notice. Your contract should address what happens to your agreement in this scenario.',
          listen: 'Contract language that gives you the right to exit without penalty if the vendor is acquired and materially changes terms. Absent this, you are betting on the acquirer\'s goodwill.'
        },
      ]
    },
    {
      category: 'Implementation Reality',
      color: 'green',
      questions: [
        {
          q: 'What is the actual implementation timeline for a property like ours — from contract to live?',
          why: 'Demo timelines are rarely implementation timelines. PMS integration alone can take four to six weeks if the vendor\'s engineering queue is backed up. Staff training adds time. If you are approaching a high season or a regulatory deadline, the gap between "we can go live in two weeks" and "we went live in eight weeks" is operationally significant.',
          listen: 'A specific timeline based on your PMS, your property size, and the vendor\'s current queue. Ask: "What are the most common causes of delay with implementations like ours?"'
        },
        {
          q: 'What does my team need to do to make this work — and what ongoing management does it require?',
          why: 'AI tools are not passive. Revenue management tools require regular calibration. Chatbots require content updates when policies change. Automated messaging tools require someone to monitor escalations. If no one at your property has the time or context to manage the tool, it will underperform — and the vendor will attribute this to user error.',
          listen: 'A specific description of what the vendor expects from your team: time per week, which role, and what ongoing tasks. If the answer is "nothing, it\'s fully automated," probe further.'
        },
        {
          q: 'Can I speak to a general manager at a comparable property who went live in the last 12 months?',
          why: 'References given by vendors are curated. Asking for a reference from a property similar to yours — by size, market, and PMS — and requiring it to be recent (last 12 months) filters out legacy success stories that may not reflect the current product.',
          listen: 'A specific reference, not a general testimonial. A vendor unwilling to provide a reference call from a recent customer at a comparable property should be asked why directly.'
        },
      ]
    },
  ]

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', label: 'bg-blue-100 text-blue-700' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', label: 'bg-red-100 text-red-700' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', label: 'bg-amber-100 text-amber-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', label: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', label: 'bg-green-100 text-green-700' },
  }

  return (
    <>
      <SEO
        title="Questions to Ask Any AI Vendor Before Signing — Hotel Operator's Checklist | peakcareai.com"
        description="15 questions every hotel operator should ask an AI vendor before signing. Data storage, EU AI Act compliance, exit clauses, implementation reality. What to ask — and what answers to accept."
        ogTitle="Questions to Ask Any AI Vendor Before Signing — Hotel Operator's Checklist"
        ogDescription="The vendor pitch looks good. Here is what to ask before you sign. 15 questions across data, compliance, pricing, and implementation reality."
        type="article"
        canonical="https://peakcareai.com/blog/hotel-ai-vendor-questions"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Questions to Ask Any AI Vendor Before Signing — A Hotel Operator's Checklist",
          "inLanguage": "en",
          "author": { "@type": "Person", "name": "Andreas Donner", "url": "https://peakcareai.com/about" },
          "publisher": { "@type": "Organization", "name": "Peak Care AI", "url": "https://peakcareai.com" },
          "datePublished": "2026-05-27",
          "description": "15 questions hotel operators should ask AI vendors before signing contracts. Covers GDPR and data storage, EU AI Act documentation, accountability for errors, total cost of ownership, exit clauses, and implementation reality.",
          "keywords": "hotel AI vendor questions, AI vendor evaluation hotel, hotel technology vendor checklist, EU AI Act vendor compliance, hotel AI contract questions, PMS AI integration, hotel SaaS vendor due diligence"
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What questions should a hotel ask an AI vendor before signing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hotels should ask AI vendors about: (1) where guest data is stored and whether a Data Processing Agreement is included, (2) the EU AI Act risk classification of the system and what compliance documentation is available, (3) accountability when the system makes an error, (4) the full cost of ownership including integrations and training, (5) the data export process and exit penalties, and (6) a reference call with a comparable property that went live in the last 12 months."
              }
            },
            {
              "@type": "Question",
              "name": "What should a hotel check regarding EU AI Act compliance before buying an AI tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask the vendor: What risk category does your system fall under according to the EU AI Act? Can you provide EU AI Act documentation — technical specifications, conformity assessment, or a system card? Does your product support adding guest-facing transparency disclosures for AI interactions? Vendors operating in the EU should have answers to these questions by mid-2026. If they do not, they are not prepared for the 2 August 2026 deadline."
              }
            },
            {
              "@type": "Question",
              "name": "What are common hidden costs when hotels buy AI software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common hidden costs include: PMS integration fees (often one-time, billed separately), staff training and onboarding not included in base price, custom configuration for your property structure, premium support tiers beyond basic ticket handling, and price increases at contract renewal. Ask for a full year-one and year-two cost breakdown itemised by category."
              }
            },
            {
              "@type": "Question",
              "name": "What should a hotel's AI vendor contract include regarding data portability?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The contract should specify: the format in which data can be exported (ideally CSV or JSON), whether export requires vendor assistance or can be done independently, the timeframe for data deletion on request, and early termination costs. A vendor that makes it expensive or procedurally complex to leave has structurally reduced your negotiating power at renewal."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it actually take to implement an AI tool in a hotel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Actual implementation timelines vary considerably from demo timelines. PMS integration alone can take 4–6 weeks if the vendor's engineering queue is backed up. Staff training adds additional time. For a property approaching a high season or regulatory deadline (such as the EU AI Act's Article 50 deadline of 2 August 2026), ask specifically about the vendor's current onboarding queue and the most common causes of delay at comparable properties."
              }
            },
            {
              "@type": "Question",
              "name": "What should a hotel ask about AI vendor references?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Request a reference call with a general manager at a property comparable to yours — by size, market segment, and PMS — who went live in the last 12 months. This filters out legacy success stories that may not reflect the current product. A vendor unwilling to provide a specific recent reference from a comparable property should be asked directly why they cannot."
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
            <span className="text-gold-400 text-sm">Vendor Selection · Hotels</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Hotel Operator's Checklist
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Questions to ask any AI vendor<br />
            <span className="text-gold-400">before signing</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            The demo looked good. The sales rep answered everything smoothly. Here are 15 questions to ask before you sign — covering data, EU compliance, accountability, real costs, and what happens when you want to leave.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>By <strong className="text-white/70">Andreas Donner</strong></span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* INTRO BAR */}
      <div className="bg-gray-900 border-y border-gray-700 py-3">
        <div className="container-main max-w-3xl flex items-center gap-3 text-sm">
          <span className="text-gold-400">→</span>
          <span className="text-gray-300">15 questions across 5 categories. For each question: why it matters and what answer to accept.</span>
        </div>
      </div>

      {/* BODY */}
      <section className="py-16 bg-white">
        <div className="container-main max-w-3xl">

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">The vendor pitch is designed to close deals, not surface problems</h2>
            <p>
              Hotel AI vendors invest considerably in their sales process. The demo environment works perfectly. References are pre-selected. Pricing is quoted without integrations, training, or support tiers. Implementation timelines are optimistic. EU AI Act compliance is described as "in progress."
            </p>
            <p>
              None of this is unique to hotel tech. It is how software sales works. The questions below are not accusatory — they are the ones that require real answers before a contract makes sense. A vendor that cannot answer them has not done the work. A vendor that answers them clearly has.
            </p>
            <p>
              The list is organised by category. Work through each section before your next vendor meeting.
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-12">
            {sections.map(({ category, color, questions }) => {
              const c = colorMap[color]
              return (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.label}`}>
                      {category}
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="space-y-5">
                    {questions.map(({ q, why, listen }) => (
                      <div key={q} className={`border rounded-2xl overflow-hidden ${c.border}`}>
                        <div className="p-6">
                          <p className="font-bold text-gray-900 text-base mb-3 leading-snug">"{q}"</p>
                          <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold text-gray-700">Why it matters: </span>{why}</p>
                        </div>
                        <div className={`border-t px-6 py-3 flex gap-3 ${c.bg} ${c.border}`}>
                          <span className={`text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5 ${c.text}`}>What to accept</span>
                          <p className={`text-sm leading-relaxed ${c.text}`}>{listen}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* SCORING */}
          <div className="mt-14 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How to use the answers</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              After a vendor meeting, score each of the five categories: Green (clear, written answers), Yellow (incomplete or deferred answers), Red (no answer or evasion). A vendor with two or more Red categories in Data, Compliance, or Exit is not ready for a responsible deployment at your property — regardless of how good the demo looked.
            </p>
            <div className="space-y-3">
              {[
                { color: 'bg-green-500', label: 'Green', desc: 'Clear, written answer — acceptable to proceed' },
                { color: 'bg-amber-400', label: 'Yellow', desc: 'Incomplete or deferred — request written confirmation before signing' },
                { color: 'bg-red-500', label: 'Red', desc: 'No answer, evasion, or "we\'re working on it" — risk flag, investigate further' },
              ].map(({ color, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className={`w-3 h-3 rounded-full mt-1 shrink-0 ${color}`} />
                  <p className="text-sm text-gray-600"><strong className="text-gray-800">{label}:</strong> {desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The EU AI Act question is a proxy for overall readiness</h2>
            <p>
              In practice, vendors who can answer the EU AI Act questions clearly — risk category, documentation available, transparency disclosure implemented — tend to also have cleaner answers on data, accountability, and exit. The EU AI Act requires that vendors document exactly what their system does, how it processes data, and what safeguards exist. Vendors who have done this work have, by necessity, thought carefully about their product.
            </p>
            <p>
              Vendors who cannot answer the EU AI Act questions by mid-2026 are unlikely to be ready by August. That is itself useful information before your next contract renewal.
            </p>
            <p>
              The checklist above is designed to surface this quickly, without requiring legal support or deep technical knowledge. The answers — or the absence of answers — tell you what you need to know.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently asked questions</h2>
          </div>

          <div className="space-y-5 mt-2">
            {[
              {
                q: 'What are the most important questions to ask an AI vendor as a hotel operator?',
                a: 'Start with data storage (country, DPA) and EU AI Act risk classification — these two areas reveal the most about how seriously a vendor takes compliance. Then ask about accountability for errors, total cost of ownership, and the exit process. Finish with a reference call request.'
              },
              {
                q: 'What EU AI Act compliance documentation should a hotel AI vendor provide?',
                a: 'At minimum: the risk classification of their system with a rationale, a technical description of how the system works, evidence that guest transparency disclosures are implemented (for limited-risk tools), and a DPA for data processing. Vendors who cannot provide these by 2 August 2026 are not compliant.'
              },
              {
                q: 'What are common hidden costs when buying AI tools for hotels?',
                a: 'PMS integration fees (often one-time), staff training not included in base price, custom configuration billed separately, premium support tiers, and price increases at renewal. Request a full year-one and year-two breakdown itemised by category.'
              },
              {
                q: 'How do I evaluate an AI vendor\'s implementation claims?',
                a: 'Ask for actual timelines at comparable properties in the last 12 months. Ask what the most common causes of delay are. Ask what your team needs to do during implementation. Then ask for a reference call with a GM at a property of similar size and PMS who went live recently.'
              },
              {
                q: 'What contract protections should a hotel request for AI software?',
                a: 'Data export in standard format (CSV, JSON) without vendor assistance. Deletion on request within 30 days. Exit rights without penalty if the vendor is acquired and changes terms materially. SLA remedies (service credits) for missed availability targets. These are standard in well-drafted SaaS contracts.'
              },
              {
                q: 'Should I use the same questions for all hotel AI vendors?',
                a: 'Yes — consistency is the point. The questions let you compare vendor responses directly. A vendor who answers all 15 clearly is demonstrably more prepared than one who deflects on data, compliance, and exit. The scoring framework (Green/Yellow/Red by category) makes that comparison concrete.'
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
              Evaluating an AI vendor — or already committed to one?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              A structured 30-minute conversation to review your current or planned AI tools — what questions remain open, which Article 50 transparency gaps are still open now that the rules apply, and what your team needs to manage this without external support.
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
              <Link to="/blog/eu-ai-act-hotel-checklist-2026" className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors">
                <p className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-2">EU AI Act</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug">EU AI Act Hotel Checklist: 8 things to document before 2 August 2026</p>
              </Link>
              <Link to="/blog/shadow-ai-hotels" className="border border-gray-100 rounded-xl p-5 hover:border-gray-300 transition-colors">
                <p className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-2">Operations</p>
                <p className="font-semibold text-gray-900 text-sm leading-snug">Shadow AI in Hotels: What your team is already using — and why you should know</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
