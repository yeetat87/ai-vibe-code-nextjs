'use client'

import { useState, FormEvent, useEffect } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')



  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('email_address', email)

      const response = await fetch(
        'https://app.convertkit.com/forms/9009438/subscriptions',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.ok) {
        setStatus('success')
        setMessage('')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
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

        {status !== 'success' ? (
          <div className="max-w-lg mx-auto mb-6 float-in-3 px-2 sm:px-0">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row sm:relative gap-3 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 sm:pr-36 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-cyan-500/15 placeholder-slate-500 text-white focus:outline-none focus:border-cyan-500/30 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 btn-glow px-5 py-3 sm:py-3 rounded-xl font-semibold text-white text-sm disabled:opacity-50"
              >
                {status === 'loading' ? 'Submitting...' : 'Get Access'}
              </button>
            </form>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">Join 2,847 developers. 100% free.</p>
            {status === 'error' && (
              <p className="text-red-400 text-xs sm:text-sm mt-2">{message}</p>
            )}
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
              <p className="text-slate-400">{message}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
