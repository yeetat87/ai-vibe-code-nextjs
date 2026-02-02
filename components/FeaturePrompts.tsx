export default function FeaturePrompts() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-left">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <span className="ml-auto text-xs text-slate-500 font-mono">prompts.sh</span>
              </div>
              <div className="font-mono text-sm space-y-3">
                <div className="text-slate-500"># Build authentication</div>
                <div className="text-cyan-300">&gt; create JWT auth with refresh tokens</div>
                <div className="mt-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/10">
                  <div className="text-slate-400 text-xs mb-2">Output:</div>
                  <div className="text-slate-300 text-xs leading-relaxed">
                    Creating auth system with:<br />
                    • JWT access tokens (15min)<br />
                    • Refresh tokens (7 days)<br />
                    • Secure httpOnly cookies<br />
                    <span className="text-cyan-400">✓ 12 files generated</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Ready for next prompt...
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal-right">
            <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              PROMPT LIBRARY
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-white">Copy. Paste.</span>
              <br />
              <span className="italic text-slate-400">Ship.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              200+ prompts that actually work. No more guessing what to say. Just copy the prompt, paste it, and watch the magic happen.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Auth systems</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">API routes</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">UI components</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
