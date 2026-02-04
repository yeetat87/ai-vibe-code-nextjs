export default function FeatureIntel() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="reveal-left text-center lg:text-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs tracking-widest mb-4 justify-center lg:justify-start">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              EARLY ACCESS INTEL
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-white">Know first.</span>
              <br />
              <span className="italic text-slate-400">Move first.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Get updates on new AI tools and features before everyone else. While others are catching up, you&apos;re already shipping.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Real-time alerts</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Beta access</span>
              <span className="px-3 py-1.5 rounded-full glass-light text-sm text-slate-300">Insider tips</span>
            </div>
          </div>
          <div className="reveal-right">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-slate-400">Live feed</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-xs text-cyan-400">LIVE</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-light rounded-xl p-4 border-l-2 border-cyan-400">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-cyan-400 font-medium">BREAKING</span>
                    <span className="text-xs text-cyan-400">NOW</span>
                  </div>
                  <div className="font-medium text-white">Claude 4.5 released</div>
                  <div className="text-sm text-slate-400 mt-1">Extended context, faster responses, new capabilities...</div>
                </div>
                <div className="glass-light rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500">UPDATE</span>
                    <span className="text-xs text-slate-500">2h ago</span>
                  </div>
                  <div className="font-medium text-slate-300">Cursor 0.45 beta available</div>
                </div>
                <div className="glass-light rounded-xl p-4 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500">NEWS</span>
                    <span className="text-xs text-slate-500">5h ago</span>
                  </div>
                  <div className="font-medium text-slate-400">v0 adds React Native support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
