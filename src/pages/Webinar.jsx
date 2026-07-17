import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const AI_READINESS_CALL_LINK = 'https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai'

const BRIEFING_TOPICS = [
  'Map where AI is already shaping your hotel operations — from revenue management to front office workflows',
  'Understand what shadow AI means in practice and how to bring it under management control',
  'Identify where AI creates real operational value in guest communication, internal processes and team workflows',
  'See what a governance layer looks like in a hotel — practical, proportional and workable',
  'Leave with a clear sense of where your operation should start — and what to do in the first 30 days',
]

const WHY_NOW = [
  'Staff may already be using AI tools independently — without management visibility or any approved framework',
  'Guest communication, revenue management, internal workflows and training are increasingly AI-adjacent across hotel operations',
  'Hotels that define their AI approach now gain efficiency and management control — not just compliance peace of mind',
  'Structured AI introduction creates visible operational improvement within weeks, not months',
]

const WHO_ATTENDS = [
  { icon: '🏨', label: 'Hotel owners' },
  { icon: '👔', label: 'General managers' },
  { icon: '⚙️', label: 'Operations directors' },
  { icon: '🏢', label: 'Hospitality groups' },
  { icon: '🛎️', label: 'Boutique hotels' },
  { icon: '🏠', label: 'Aparthotels & serviced apartments' },
  { icon: '🤝', label: 'Hospitality consultants' },
  { icon: '🌊', label: 'Resort operators' },
]

export default function Webinar() {
  return (
    <>
      <SEO
        title="Executive Briefing: Shadow AI & AI Literacy for Hotels | Peak Care AI"
        description="A focused conversation for hotel operators — where AI is already in your operation, how to bring staff tool usage under management control, and what practical AI governance looks like."
        ogTitle="Executive Briefing: Shadow AI & AI Literacy for Hotels | Peak Care AI"
        ogDescription="Understand where your hotel stands before AI becomes unmanaged. One-to-one AI Readiness Call for hotel owners, GMs and operations leaders."
        type="website"
      />

      {/* TOPIC BAR */}
      <div className="bg-navy-900 text-gold-400 text-center py-2.5 text-sm font-semibold tracking-wide border-b border-gold-400/20">
        Executive Briefing · Shadow AI &amp; AI Literacy for Hotels · For hotel operators and hospitality businesses
      </div>

      {/* HERO */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(7,22,40,0.97) 0%, rgba(11,33,55,0.92) 100%)`,
          backgroundColor: '#071628',
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(196,152,10,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,152,10,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-main relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Executive Briefing for Hotel Operators
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Shadow AI &amp; AI Literacy for Hotels
              </h1>
              <p className="text-2xl font-semibold text-gold-400 mb-6">
                Understand where your hotel stands before AI becomes unmanaged
              </p>

              <p className="text-white/65 text-base leading-relaxed mb-8">
                A focused 30-minute conversation for hotel operators and hospitality businesses. We discuss where AI is already reducing operational pressure, how to bring staff tool usage under management control, and how governance protects guest data, service standards and the integrity of your operation.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2.5 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong className="text-white">30 minutes</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span><strong className="text-white">Online · One-to-one</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/60">For hotel owners, GMs and operations leaders</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={AI_READINESS_CALL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
                >
                  Book an AI Readiness Call →
                </a>
                <a
                  href={AI_READINESS_CALL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-4 rounded-xl border border-white/20 transition-colors text-base"
                >
                  Discuss Shadow AI in your hotel
                </a>
              </div>
            </div>

            {/* Right — CTA card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-navy-900 mb-1">Book an AI Readiness Call</h2>
                <p className="text-slate-500 text-sm">30 minutes · One-to-one · Your operation, your questions</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  'Where is AI already in your hotel — visible and invisible?',
                  'Which tools are your staff using without management oversight?',
                  'What does practical AI governance look like for your operation?',
                  'What is your realistic first step — this month?',
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-slate-600 text-sm leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
              <a
                href={AI_READINESS_CALL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold py-4 rounded-xl transition-colors text-base text-center mb-3"
              >
                Book an AI Readiness Call →
              </a>
              <p className="text-xs text-slate-400 text-center">
                No pitch deck. No generic slides. Your operation, your questions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Briefing Topics</p>
              <h2 className="text-3xl font-bold text-navy-900">What we cover</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {BRIEFING_TOPICS.map((topic, i) => (
                <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-navy-900 font-medium text-base leading-relaxed pt-1">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS NOW */}
      <section className="bg-navy-900 py-16">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Context</p>
              <h2 className="text-3xl font-bold text-white">Why this matters now</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_NOW.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                  <svg className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/75 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Audience</p>
              <h2 className="text-3xl font-bold text-navy-900">Who this is for</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {WHO_ATTENDS.map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-navy-900 font-semibold text-sm leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE HOST */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-1">
                <div className="bg-navy-50 rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    AD
                  </div>
                  <h3 className="font-bold text-navy-900">Andreas Donner</h3>
                  <p className="text-slate-500 text-sm mt-1">Founder, Peak Care AI</p>
                  <div className="mt-4 space-y-2 text-xs text-slate-500 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">✓</span> 25+ years in luxury hospitality
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">✓</span> Hotel project development &amp; construction
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">✓</span> AI implementation specialist
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">✓</span> EU AI Act compliance advisor
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Why this conversation is different</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Most AI conversations for hotels are run by tech consultants. This one is run by an operator. The starting point is your operation — front office pressure, guest communication, staff workflows — not a compliance lecture or a tool demo.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  With 25+ years in international luxury hospitality and hotel-related project environments, I know what revenue management systems do, how guest communication is handled day to day, and where AI quietly enters hotel operations whether management is aware of it or not.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  This is a practical conversation that ends with a clear sense of where to start. EU AI Act context is included as the trust layer — not as the headline.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <p className="text-navy-900 text-sm font-semibold mb-1">After this call, you will know:</p>
                  <p className="text-slate-600 text-sm">
                    Where AI is already touching your operation, what you can do about it next week, and where governance protects you over the next 12 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CTA */}
      <section className="bg-navy-900 py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Book an AI Readiness Call
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Operations first. Governance second. No hype, no technical overload. Your hotel, your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AI_READINESS_CALL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-10 py-4 rounded-xl transition-colors text-base"
            >
              Book an AI Readiness Call →
            </a>
            <a
              href={AI_READINESS_CALL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors text-base"
            >
              Discuss Shadow AI in your hotel
            </a>
          </div>
        </div>
      </section>

      {/* ONE-TO-ONE CONVERSATION */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 border border-slate-100 shadow-sm text-center">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-4">Your next step</p>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              A one-to-one conversation about your operation
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6 max-w-xl mx-auto">
              A confidential 30-minute conversation about your specific operation — where pressure sits, which AI is already in play, and what a sensible first step would look like for your house. No pitch deck. No slides.
            </p>
            <a
              href={AI_READINESS_CALL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Request a confidential conversation →
            </a>
            <p className="text-slate-400 text-xs mt-6">
              This session provides general business and operational guidance and does not constitute legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white">
        <div className="container-main max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-navy-900 mb-6 text-center">Frequently asked questions</h2>
          <div className="divide-y divide-slate-100">
            {[
              {
                q: 'Is this the right call for independent hotels?',
                a: 'Yes. The briefing is designed specifically for hotel operators and hospitality businesses — independent hotels, boutique properties, small groups and owner-managed houses. Not large chains with dedicated IT or compliance teams.',
              },
              {
                q: "I'm not sure if my hotel uses AI. Is this still relevant?",
                a: "Especially then. Most hotels discover they are already using multiple AI-supported systems within the first 10 minutes of a structured conversation — revenue management, chatbots, review tools, staff scheduling software. The call helps you see what is already there.",
              },
              {
                q: 'How long is the call?',
                a: '30 minutes. Focused, practical and specific to your operation. No generic presentation, no upsell pressure.',
              },
              {
                q: 'Does this call provide legal advice?',
                a: 'No. This session provides general business and operational guidance for hotel leaders. EU AI Act context is included as an operational trust layer, not as legal advice. For legal questions specific to your business, consult a qualified legal advisor.',
              },
              {
                q: 'What should I prepare?',
                a: 'Nothing is required. A short list of the software your hotel uses daily is helpful but not necessary — we will guide you through that process during the call.',
              },
            ].map((item, i) => (
              <details key={i} className="group py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-semibold text-navy-900 text-sm">{item.q}</span>
                  <svg className="w-4 h-4 text-gold-500 shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8 pt-6 border-t border-slate-100">
            <p className="text-slate-500 text-sm">
              Questions?{' '}
              <a href="mailto:kontakt.ki.hotel@gmail.com" className="text-navy-700 font-semibold underline">
                kontakt.ki.hotel@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
