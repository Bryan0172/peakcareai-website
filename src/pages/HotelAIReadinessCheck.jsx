import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// ─── Icons ───────────────────────────────────────────────────────────────────

const IconInventory = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)
const IconCompliance = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)
const IconEfficiency = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
const IconAutomation = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
)
const IconDocument = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)
const IconRoadmap = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const DELIVERABLES = [
  {
    number: '01',
    Icon: IconInventory,
    title: 'AI & Tool Inventory',
    text: 'Structured overview of all systems in use, AI-enabled functions and relevant data flows across your hotel operations.',
  },
  {
    number: '02',
    Icon: IconCompliance,
    title: 'AI Compliance Risk Score',
    text: 'Assessment of GDPR, EU AI Act and transparency risks based on your current AI usage and data handling practices.',
  },
  {
    number: '03',
    Icon: IconEfficiency,
    title: 'Operational Efficiency Score',
    text: 'Evaluation of typical process gaps in Housekeeping, Maintenance, Front Office, guest communication and staff onboarding.',
  },
  {
    number: '04',
    Icon: IconAutomation,
    title: 'Automation Potential Score',
    text: 'Prioritised assessment of realistic AI and automation opportunities — ranked by impact, feasibility and implementation effort.',
  },
  {
    number: '05',
    Icon: IconDocument,
    title: 'Documents & Measures Package',
    text: 'Recommendations for internal AI policies, staff training, tool approvals and transparency documentation for guests and staff.',
  },
  {
    number: '06',
    Icon: IconRoadmap,
    title: '90-Day Roadmap',
    text: 'Concrete implementation plan with priorities, responsibilities and quick wins — designed for hotels without a dedicated IT or compliance department.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Initial Conversation',
    duration: '30 min',
    text: 'We understand your hotel type, system landscape and current challenges. No preparation required.',
  },
  {
    step: '02',
    title: 'Digital Questionnaire',
    duration: 'Self-service',
    text: 'Structured capture of tools, processes, AI usage patterns and potential risk areas.',
  },
  {
    step: '03',
    title: 'Analysis by Peak Care AI',
    duration: '3–5 days',
    text: 'We assess potentials, compliance risks and operational bottlenecks based on your specific situation.',
  },
  {
    step: '04',
    title: 'Management Report',
    duration: 'Written',
    text: 'Scores, prioritised measures and the 90-day roadmap — structured for management decision-making.',
  },
  {
    step: '05',
    title: 'Results Presentation',
    duration: '60 min',
    text: 'We walk through the findings, explain the recommendations and define concrete next steps together.',
  },
]

const FAQS = [
  {
    q: 'Is the check a legal or data protection consultation?',
    a: 'No. The check does not replace legal or data protection advice. It helps hotel operators systematically identify AI usage, processes and risks — and prepares concrete next steps for implementation.',
  },
  {
    q: 'Do we need to be using AI already?',
    a: 'No. The check works equally well for hotels already using AI tools and for hotels planning their first steps. Both starting points have value.',
  },
  {
    q: 'Do we need an IT department?',
    a: 'No. The check is designed specifically for hotels without a dedicated AI, IT or compliance team. That is precisely the situation it is built for.',
  },
  {
    q: 'Are PMS integrations required for the check?',
    a: 'Not for an initial check. The analysis works on the basis of a questionnaire, interviews, tool lists, process information and available documentation.',
  },
  {
    q: 'What happens after the check?',
    a: 'On request, Peak Care AI can support the implementation of prioritised measures, tool selection, staff training and the development of internal AI policies.',
  },
]

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-slate-200 last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-5">
        <span className="font-semibold text-navy-900 text-base leading-snug pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-gold-500 shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {open && (
        <p className="text-slate-500 text-sm leading-relaxed pb-5 -mt-2">{a}</p>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HotelAIReadinessCheck() {
  return (
    <>
      <SEO
        title="Hotel Operations & AI Assessment for Independent Hotels | Peak Care AI"
        description="Peak Care AI maps operational pain points, existing tools, shadow-AI exposure and realistic AI potential for independent hotels and small groups. Includes a 90-day plan."
        ogTitle="Hotel Operations & AI Assessment for Independent Hotels | Peak Care AI"
        ogDescription="Structured AI readiness check for independent hotels and small hotel groups — tool inventory, EU AI Act compliance risk, operational efficiency, 90-day roadmap."
        type="website"
        canonical="https://peakcareai.com/hotel-ai-readiness-check"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hotel Operations & AI Assessment',
          provider: { '@type': 'Organization', name: 'Peak Care AI', url: 'https://peakcareai.com' },
          description: 'Structured operations and AI assessment for independent hotels and small hotel groups. Includes AI tool inventory, EU AI Act compliance risk score, operational efficiency score, automation potential assessment, and a 90-day implementation roadmap.',
          areaServed: [
            { '@type': 'Country', name: 'Germany' },
            { '@type': 'Country', name: 'Austria' },
            { '@type': 'Country', name: 'Switzerland' },
            { '@type': 'Country', name: 'France' },
            { '@type': 'Country', name: 'Netherlands' },
            { '@type': 'Country', name: 'Belgium' },
            { '@type': 'Country', name: 'United Kingdom' }
          ],
          audience: { '@type': 'Audience', audienceType: 'Hotel owners, General Managers, Operations Managers' },
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a Hotel AI Readiness Check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Hotel AI Readiness Check is a structured assessment of a hotel's current AI and technology usage, operational processes, and EU AI Act compliance status. It produces: a complete AI tool inventory, a compliance risk score (GDPR and EU AI Act), an operational efficiency score, an automation potential assessment, and a 90-day implementation roadmap. It is designed for independent hotels and small hotel groups without a dedicated IT or compliance team."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Hotel AI Readiness Check a legal or data protection consultation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The check does not replace legal or data protection advice. It helps hotel operators systematically identify AI usage, operational gaps, and compliance risks — and prepares concrete next steps for implementation. For hotels that identify high-risk AI usage or receive a regulatory inquiry, legal review is recommended as a separate step."
              }
            },
            {
              "@type": "Question",
              "name": "Does a hotel need to be using AI already to benefit from an AI Readiness Check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The check works equally well for hotels already using AI tools and for hotels planning their first steps. Hotels not yet using AI typically find that staff are using tools informally (shadow AI) and that significant operational automation potential has not yet been captured. Both starting points benefit from the structured assessment."
              }
            },
            {
              "@type": "Question",
              "name": "Does a hotel need an IT department to complete the AI Readiness Check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The check is designed specifically for hotels without a dedicated AI, IT, or compliance team — independent properties, boutique hotels, and small groups where the GM or Operations Manager handles technology decisions. The assessment is based on conversations, questionnaires, tool lists, and process documentation, not technical access."
              }
            },
            {
              "@type": "Question",
              "name": "Are PMS integrations required for the Hotel AI Readiness Check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not for an initial check. The analysis works on the basis of a questionnaire, structured interviews, tool lists, process information and available documentation. No technical integration with your PMS or other systems is required."
              }
            },
            {
              "@type": "Question",
              "name": "What happens after the Hotel AI Readiness Check?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The check produces a written management report with scores, prioritised measures, and a 90-day roadmap. On request, Peak Care AI can support the implementation of prioritised measures: tool selection, EU AI Act documentation, staff training, and the development of internal AI policies. The 90-day roadmap is designed to be actionable without ongoing external support."
              }
            },
            {
              "@type": "Question",
              "name": "What does a Hotel AI Readiness Check cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Hotel Operations & AI Assessment is scoped individually per hotel and offered as a tailored quote on request. It includes an initial 30-minute conversation, a digital questionnaire, 3–5 days of analysis by Peak Care AI, a written management report with six scored components, and a 60-minute results presentation. Book an initial free 30-minute call to discuss whether the check fits your hotel's current situation."
              }
            }
          ]
        }]}
      />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[78vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(105deg, rgba(7,22,40,0.97) 0%, rgba(11,33,55,0.90) 50%, rgba(11,33,55,0.70) 100%),
            url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=85&w=1920&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,152,10,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,152,10,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-main relative py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase">
                Hotel Operations & AI Assessment
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Start with your operation.<br />
              <span className="text-gold-400">AI follows from there.</span>
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-5 max-w-2xl font-light">
              The Hotel Operations & AI Assessment maps where pressure sits in your operation, which AI is already in play, and where AI can realistically help — for independent hotels and small groups, with a clear 90-day plan to start.
            </p>

            <p className="text-sm text-white/40 mb-10 flex flex-wrap gap-x-4 gap-y-1.5">
              {['Independent hotels', 'Boutique & business hotels', 'Holiday hotels', 'Small hotel groups (2–10 properties)', 'DACH region'].map(tag => (
                <span key={tag} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gold-400/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </span>
              ))}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-gold-400/20"
              >
                Request a confidential conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#scope"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors duration-200 text-base backdrop-blur-sm"
              >
                See what's included
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ─── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">The Status Quo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
              Most hotels are already using AI — but very few are managing it.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Staff are testing ChatGPT. PMS and revenue systems are gaining AI features. Guest communication is being automated. Reviews are analysed with AI assistance. Yet in most independent hotels, clear rules, accountability, documentation and a realistic overview of risks and benefits are missing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '⚠️', text: 'AI use without internal policies or guidelines' },
                { icon: '🔒', text: 'Uncertainty around GDPR and EU AI Act obligations' },
                { icon: '🗂️', text: 'Tool fragmentation across PMS, channel manager, revenue, reviews and communication' },
                { icon: '📉', text: 'Operational bottlenecks caused by staffing and process gaps' },
                { icon: '🔍', text: 'No clear view of actual automation potential' },
                { icon: '❓', text: 'No structured prioritisation for technology investments' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ──────────────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">The Check</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
                Structure for your AI introduction — not another abstract report.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Peak Care AI analyses your current system landscape, AI usage, core hotel processes and potential compliance risks. The result is not a theoretical assessment, but a concrete management report: scores, quick wins and a 90-day action plan.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Designed for hotel operators who run without a dedicated AI, IT or compliance department — and who need practical guidance, not generic consulting.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'AI Compliance Risk Score', color: 'border-amber-400 bg-amber-50', text: 'GDPR · EU AI Act · Transparency' },
                { label: 'Operational Efficiency Score', color: 'border-blue-400 bg-blue-50', text: 'Housekeeping · Front Office · Maintenance' },
                { label: 'Automation Potential Score', color: 'border-emerald-400 bg-emerald-50', text: 'Quick wins · Realistic priorities' },
                { label: '90-Day Roadmap', color: 'border-gold-400 bg-gold-400/10', text: 'Steps · Owners · Timeline' },
              ].map(({ label, color, text }) => (
                <div key={label} className={`rounded-xl p-5 border-l-4 ${color} shadow-sm`}>
                  <div className="font-bold text-navy-900 text-sm mb-1.5">{label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ──────────────────────────────────────────────────── */}
      <section id="scope" className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Scope of the Check</p>
            <h2 className="section-heading">What you receive.</h2>
            <p className="section-subheading">Six structured output components — each designed for independent hotel operations without specialist in-house expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERABLES.map(({ number, Icon, title, text }) => (
              <div key={number} className="card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-widest">{number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How the check works.</h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Five clear steps — from the initial conversation to the results presentation.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {PROCESS.map(({ step, title, duration, text }, i) => (
              <div key={step} className="relative flex gap-6 items-start pb-8 last:pb-0">
                {/* Line connector */}
                {i < PROCESS.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-white/10" />
                )}
                <div className="w-10 h-10 rounded-full bg-gold-400 text-navy-900 font-bold text-sm flex items-center justify-center shrink-0 z-10">
                  {step}
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white">{title}</h3>
                    <span className="text-xs font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/20 px-2.5 py-1 rounded-full shrink-0">
                      {duration}
                    </span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
            >
              Request a confidential conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TARGET GROUP ──────────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">For Which Hotels</p>
              <h2 className="text-3xl font-bold text-navy-900 mb-5 leading-tight">
                The check is built for hotels without a specialist in-house team.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The Hotel Operations & AI Assessment is particularly suited to hotels that want to introduce or improve AI usage — but do not have a dedicated AI, IT or compliance function in-house.
              </p>
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">A good fit for:</div>
                {[
                  'Single properties with 30–150 rooms',
                  'Boutique hotels',
                  'Business hotels',
                  'Holiday hotels',
                  'Family-run hotels',
                  'Small hotel groups with 2–10 properties',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Less suited for:</div>
                  <div className="space-y-2.5 mb-8">
                    {[
                      'Very small guesthouses with no digital systems',
                      'Large hotel chains with dedicated IT and legal departments',
                      'Businesses with no current need for digitalisation',
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-slate-500 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">Not sure if this applies to you?</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    An initial 15-minute call is enough to determine whether the check is the right starting point for your hotel.
                  </p>
                  <Link to="/contact" className="btn-primary text-sm px-5 py-2.5 inline-block">
                    Request a confidential conversation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY NOW ───────────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Now</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
              AI is already in your hotel — the question is whether you're managing it.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              AI is entering PMS, revenue management, guest communication, marketing, review analysis and internal processes. At the same time, data protection requirements, EU AI Act obligations, staff training needs and tool governance are creating new demands.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Hotels that create structure now avoid operating blind, reduce compliance risks and use AI more purposefully. Those that wait are managing the consequences of unstructured AI adoption — without knowing it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <div className="bg-white rounded-xl p-5 border-l-4 border-amber-400 shadow-sm">
              <div className="font-bold text-navy-900 mb-2 text-sm">EU AI Act Article 50 — 2 August 2026</div>
              <p className="text-slate-500 text-sm leading-relaxed">Article 4 requires documented AI literacy for all staff working with AI systems — in force in three months.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-l-4 border-red-400 shadow-sm">
              <div className="font-bold text-navy-900 mb-2 text-sm">GDPR Exposure Today</div>
              <p className="text-slate-500 text-sm leading-relaxed">Processing guest or employee data with external AI tools without a documented legal basis is a GDPR violation — now, not in 2026.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-400 shadow-sm">
              <div className="font-bold text-navy-900 mb-2 text-sm">Operational Efficiency</div>
              <p className="text-slate-500 text-sm leading-relaxed">Staff shortages, process gaps and rising guest expectations make structured AI use a competitive advantage — not a luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ───────────────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">What You Gain</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
                After the check, you know exactly what to do.
              </h2>
              <div className="space-y-3">
                {[
                  'Which AI applications are genuinely useful for your hotel',
                  'Which compliance risks need short-term attention',
                  'Which processes are first candidates for automation',
                  'Which tools your operation actually needs',
                  'Which internal rules your team requires',
                  'Which measures have priority in the next 90 days',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold-400/15 border border-gold-400/40 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Management Report</div>
                <div className="text-white font-bold text-xl mb-4">Clear answers.<br />Concrete actions.</div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Not a slide deck full of recommendations. A structured report with scores, priorities and a 90-day plan designed for hotel management — not for AI specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILOT PRICING ─────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-navy-900 px-8 py-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-gold-400/15 text-gold-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Pilot Offer
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">Hotel Operations & AI Assessment<br /><span className="text-gold-400">for selected pilot hotels.</span></h2>
              </div>
              <div className="px-8 py-7">
                <p className="text-slate-600 leading-relaxed mb-6">
                  For the initial validation phase, Peak Care AI offers the Hotel Operations & AI Assessment to a limited number of independent hotels at a reduced pilot price.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-1">Pilot pricing</div>
                    <div className="text-3xl font-bold text-navy-900">On request</div>
                  </div>
                  <div className="h-px sm:h-12 sm:w-px bg-slate-200" />
                  <div className="text-slate-500 text-sm leading-relaxed">
                    Final scope depends on hotel size, number of properties and complexity of system landscape. Clarified in the initial conversation.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-md shadow-gold-400/20"
                  >
                    Request a Pilot Spot
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link to="/contact" className="btn-secondary inline-flex items-center justify-center text-base px-8 py-4">
                    Ask a question →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="section-heading">Common questions.</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
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
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Make your hotel AI-ready —<br />
            <span className="text-gold-400">with structure, not guesswork.</span>
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            One confidential conversation is enough to determine whether the Hotel Operations & AI Assessment is the right starting point for your house.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-10 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
            >
              Request a confidential conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors text-base"
            >
              Take the 5-min self-assessment →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
