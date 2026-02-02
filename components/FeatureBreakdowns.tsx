export default function FeatureBreakdowns() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="reveal-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              BUILD BREAKDOWNS
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-white">Learn from real ships.</span>
              <br />
              <span className="italic text-slate-400">Not tutorials.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              See exactly how developers shipped real MVPs in a weekend. Every prompt, every tool, every decision documented.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Full source</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Exact prompts</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Lessons learned</span>
            </div>
          </div>
          <div className="reveal-right">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="text-sm text-slate-400 mb-6">Recent case study</div>
              <div className="glass-light rounded-xl p-5 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-semibold text-white text-lg">SaaS Dashboard MVP</div>
                    <div className="text-sm text-slate-400">Next.js + Supabase + Claude</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">48h</div>
                    <div className="text-xs text-slate-500">to launch</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <div className="text-lg font-bold text-white">23</div>
                    <div className="text-xs text-slate-500">Prompts used</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <div className="text-lg font-bold text-white">4</div>
                    <div className="text-xs text-slate-500">Tools</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <div className="text-lg font-bold text-white">$0</div>
                    <div className="text-xs text-slate-500">Cost</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-cyan-400">+ 12 more case studies inside</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
