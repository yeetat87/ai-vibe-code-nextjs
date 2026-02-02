'use client'

import { useState } from 'react'

export default function Hero() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-light text-cyan-300 text-xs sm:text-sm mb-6 sm:mb-8 float-in-1">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 status-pulse"></span>
          Free for the first 5,000 developers
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-5 sm:mb-6 float-in-2">
          <span className="text-white">Your unfair</span>
          <br />
          <span className="text-white">advantage in</span>
          <br />
          <span className="italic text-gradient">AI coding.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed float-in-2 px-2">
          The curated playbook top developers use to ship 10x faster.
          Tools. Prompts. Techniques. All in one place.
        </p>

        {!submitted ? (
          <div className="max-w-lg mx-auto mb-6 float-in-3 px-2 sm:px-0">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:relative gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-5 sm:px-6 py-4 sm:py-5 sm:pr-36 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-cyan-500/15 placeholder-slate-500 text-white focus:outline-none focus:border-cyan-500/30 transition-all"
              />
              <button
                type="submit"
                className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 btn-glow px-5 py-3 sm:py-3 rounded-xl font-semibold text-white text-sm"
              >
                Get Access
              </button>
            </form>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">Join 2,847 developers. 100% free.</p>
          </div>
        ) : (
          <div className="max-w-md mx-auto float-in-3">
            <div className="glass rounded-2xl p-8 glow-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">You&apos;re in!</h3>
              <p className="text-slate-400">Check your inbox for access.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
