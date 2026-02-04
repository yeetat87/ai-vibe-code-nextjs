export default function FeatureTools() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="reveal-left text-center lg:text-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest mb-4 justify-center lg:justify-start">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              CURATED TOOLS
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-white">Skip the research.</span>
              <br />
              <span className="italic text-slate-400">We did it for you.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Every AI coding tool tested, rated, and explained. Stop wasting hours figuring out what&apos;s actually worth using.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Weekly reviews</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Honest ratings</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Use cases</span>
            </div>
          </div>
          <div className="reveal-right">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-slate-400">This week&apos;s top pick</span>
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">NEW</span>
              </div>
              <div className="space-y-4">
                <div className="glass-light rounded-xl p-4 border-l-2 border-cyan-400">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Claude Code</div>
                      <div className="text-sm text-slate-400">Terminal-based AI coding</div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-semibold">★ 4.9</div>
                      <div className="text-xs text-slate-500">Top rated</div>
                    </div>
                  </div>
                </div>
                <div className="glass-light rounded-xl p-4 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-700 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-slate-800 rounded w-32"></div>
                    </div>
                  </div>
                </div>
                <div className="glass-light rounded-xl p-4 opacity-40">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-700 rounded w-20 mb-2"></div>
                      <div className="h-2 bg-slate-800 rounded w-28"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
