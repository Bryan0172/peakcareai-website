import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const QUESTIONS = [
  {
    id: 'rms',
    text: 'Does your hotel use a revenue management system (RMS)?',
    sub: 'Examples: IDeaS, Duetto, Atomize, Cloudbeds, or similar tools that set or suggest room prices automatically.',
    options: [
      { label: 'Yes, automated pricing', value: 2 },
      { label: 'Yes, but fully manual', value: 1 },
      { label: 'No', value: 0 },
    ],
  },
  {
    id: 'chatbot',
    text: 'Do you use automated guest communication or a chatbot?',
    sub: 'Examples: Asksuite, Quicktext, HiJiffy, automated pre-arrival emails, AI-driven review responses.',
    options: [
      { label: 'Yes, AI-powered', value: 2 },
      { label: 'Yes, rule-based only', value: 1 },
      { label: 'No', value: 0 },
    ],
  },
  {
    id: 'informal',
    text: 'Does your team use AI tools informally — even without official approval?',
    sub: 'Examples: ChatGPT for writing emails, Canva AI for images, Google Translate for guest communication.',
    options: [
      { label: 'Yes, regularly', value: 2 },
      { label: 'Possibly, not sure', value: 1 },
      { label: 'No / we have a policy against it', value: 0 },
    ],
  },
  {
    id: 'docs',
    text: 'Do you have documented records of which AI systems your hotel runs?',
    sub: 'A list of AI-powered tools, what data they process, and what decisions they influence.',
    options: [
      { label: 'No documentation exists', value: 2 },
      { label: 'Partial documentation', value: 1 },
      { label: 'Yes, fully documented', value: 0 },
    ],
  },
  {
    id: 'awareness',
    text: 'How familiar are you with the EU AI Act requirements for hospitality businesses?',
    sub: 'The regulation applies from August 2026 to all AI systems used in the EU.',
    options: [
      { label: 'Not familiar at all', value: 2 },
      { label: 'Heard of it, not yet assessed', value: 1 },
      { label: 'We have already assessed our position', value: 0 },
    ],
  },
]

function getResult(score) {
  if (score >= 7) {
    return {
      level: 'High Priority',
      color: 'red',
      headline: 'Your hotel is actively exposed — a structured review is overdue.',
      body: 'Based on your answers, your property is using multiple AI systems without the governance layer they require. Guest data, staff workflows and service standards are all in scope. A structured assessment will map the exposure and give you a clear, practical starting point.',
      cta: 'Request a confidential conversation',
      ctaLink: '/contact',
      ctaSub: 'Hotel Operations & AI Assessment · 90-day roadmap',
      badge: '🔴 High exposure — structured review recommended',
    }
  }
  if (score >= 4) {
    return {
      level: 'Action Required',
      color: 'amber',
      headline: 'You\'re partially exposed — a structured review will clarify your position.',
      body: 'Your hotel has AI systems in place, but the operational picture isn\'t fully mapped yet — specifically where AI touches guest communication, staff workflows or data. A structured assessment will clarify what you\'re running and where to focus first.',
      cta: 'Explore the Hotel Operations & AI Assessment',
      ctaLink: '/hotel-ai-readiness-check',
      ctaSub: 'Structured assessment · Practical starting point · 90-day roadmap',
      badge: '🟡 Partial exposure — review recommended',
    }
  }
  return {
    level: 'Good Starting Position',
    color: 'green',
    headline: 'You\'re in a reasonable position — one confirmation step left.',
    body: 'Your hotel has limited AI exposure and some awareness of the governance requirements. The practical next step is a quick documentation review to confirm your position. This is typically done in a single structured session.',
    cta: 'Read the EU AI Act Guide for Hotels',
    ctaLink: '/blog/eu-ai-act-hotels-2026',
    ctaSub: 'Free · Practical · 8 min read',
    badge: '🟢 Lower exposure — confirm your position',
  }
}

export default function Assessment() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)

  const handleAnswer = (value) => {
    setSelected(value)
  }

  const handleNext = () => {
    if (selected === null) return
    const next = [...answers, selected]
    setAnswers(next)
    setSelected(null)
    setCurrent((c) => c + 1)
  }

  const total = QUESTIONS.length
  const done = current >= total
  const score = answers.reduce((a, b) => a + b, 0)
  const result = done ? getResult(score) : null

  const colorMap = {
    red: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-800', btn: 'bg-red-600 hover:bg-red-700 text-white' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800', btn: 'bg-amber-500 hover:bg-amber-600 text-white' },
    green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-800', btn: 'bg-green-600 hover:bg-green-700 text-white' },
  }

  return (
    <>
      <SEO
        title="EU AI Act Hotel Self-Assessment — 5 Minutes | peakcareai.com"
        description="Find out in 5 minutes whether your hotel is affected by the EU AI Act. Free self-assessment for Hotel GMs and operations managers."
      />

      {/* HERO */}
      <section className="bg-navy-900 py-16">
        <div className="container-main max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Free · 5 Minutes · Instant Result
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            EU AI Act Hotel<br />
            <span className="text-gold-400">Self-Assessment</span>
          </h1>
          <p className="text-white/60 leading-relaxed">
            5 questions. Find out in 3 minutes whether your hotel needs to act before August 2026 — and what the priority steps are.
          </p>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section className="section-white">
        <div className="container-main max-w-xl mx-auto">

          {!done ? (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Question {current + 1} of {total}</span>
                <span className="text-xs text-slate-400">{Math.round(((current) / total) * 100)}% complete</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mb-8">
                <div
                  className="bg-gold-400 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${(current / total) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="bg-navy-50 rounded-2xl p-7 mb-6">
                <h2 className="text-lg font-bold text-navy-900 mb-2">{QUESTIONS[current].text}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{QUESTIONS[current].sub}</p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {QUESTIONS[current].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                      selected === opt.value
                        ? 'border-navy-700 bg-navy-50 text-navy-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 shrink-0 align-middle ${
                      selected === opt.value ? 'border-navy-700 bg-navy-700' : 'border-slate-300'
                    }`}>
                      {selected === opt.value && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={selected === null}
                className="w-full bg-navy-900 hover:bg-navy-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-sm"
              >
                {current < total - 1 ? 'Next question →' : 'See my result →'}
              </button>
            </div>
          ) : (
            /* RESULT */
            <div>
              <div className="text-center mb-6">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${colorMap[result.color].badge}`}>
                  {result.badge}
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">{result.headline}</h2>
              </div>

              <div className={`rounded-2xl p-6 border ${colorMap[result.color].bg} ${colorMap[result.color].border} mb-6`}>
                <p className="text-slate-700 leading-relaxed text-sm">{result.body}</p>
              </div>

              {/* Recommended action */}
              <div className="bg-navy-900 rounded-2xl p-6 text-center mb-6">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Recommended next step</p>
                <h3 className="text-white font-bold text-lg mb-1">{result.cta}</h3>
                <p className="text-white/50 text-sm mb-4">{result.ctaSub}</p>
                <Link
                  to={result.ctaLink}
                  className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
                >
                  {result.cta} →
                </Link>
              </div>

              {/* Share / restart */}
              <div className="text-center space-y-3">
                <button
                  onClick={() => { setCurrent(0); setAnswers([]); setSelected(null) }}
                  className="text-sm text-slate-400 hover:text-slate-600 underline transition-colors"
                >
                  Start over
                </button>
                <p className="text-slate-400 text-xs">
                  Questions?{' '}
                  <a href="mailto:kontakt.ki.hotel@gmail.com" className="underline hover:text-navy-700">
                    kontakt.ki.hotel@gmail.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      {!done && (
        <section className="bg-amber-50 border-t border-amber-200 py-8">
          <div className="container-main text-center">
            <p className="text-amber-800 text-sm">
              <strong>EU AI Act deadline: August 2026.</strong>{' '}
              3 months left.{' '}
              <Link to="/webinar" className="font-bold underline">Book an AI Readiness Call →</Link>
            </p>
          </div>
        </section>
      )}
    </>
  )
}
