export default function FeatureWorkflows() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-left">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="text-sm text-slate-400 mb-6">From idea to production</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                  <div className="flex-1">
                    <div className="font-medium text-white">Define the feature</div>
                    <div className="text-sm text-slate-400">Use our feature spec prompt</div>
                  </div>
                  <div className="text-xs text-cyan-400">✓</div>
                </div>
                <div className="w-px h-6 bg-cyan-500/20 ml-5"></div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                  <div className="flex-1">
                    <div className="font-medium text-white">Generate the code</div>
                    <div className="text-sm text-slate-400">Copy our implementation prompt</div>
                  </div>
                  <div className="text-xs text-cyan-400">✓</div>
                </div>
                <div className="w-px h-6 bg-cyan-500/20 ml-5"></div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold">3</div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-300">Review & deploy</div>
                    <div className="text-sm text-slate-500">Use our review checklist</div>
                  </div>
                  <div className="h-1.5 w-12 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 progress-bar rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal-right">
            <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              WORKFLOWS
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-white">Steal our systems.</span>
              <br />
              <span className="italic text-slate-400">Ship in hours.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Step-by-step workflows used by engineers at top startups. Go from idea to deployed feature in hours, not weeks.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Feature building</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Bug fixing</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Refactoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
