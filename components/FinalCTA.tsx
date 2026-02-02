'use client'

import { useState, FormEvent, useEffect } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-uid', '033d6e952c')
    script.src = 'https://aicapitol.kit.com/033d6e952c/index.js'
    document.head.appendChild(script)
  }, [])

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
        setMessage('Success! Check your email to confirm.')
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
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 reveal">
          Ready to <span className="text-gradient">level up</span>?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 reveal delay-1 px-4">
          Join the waitlist and be the first to access the complete AI coding arsenal.
        </p>

        {status !== 'success' ? (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto reveal delay-2 px-4 sm:px-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-cyan-400/50 focus:outline-none transition-colors text-sm sm:text-base"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-glow px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
            </button>
          </form>
        ) : (
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-md mx-auto reveal delay-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-semibold mb-2">You&apos;re on the list!</p>
            <p className="text-slate-400 text-sm sm:text-base">{message}</p>
          </div>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-4">{message}</p>
        )}
      </div>
    </section>
  )
}
