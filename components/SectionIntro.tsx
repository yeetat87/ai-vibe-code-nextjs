export default function SectionIntro() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-light text-cyan-300 text-xs tracking-widest mb-4 sm:mb-6 reveal">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          WHAT&apos;S INSIDE
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif reveal delay-1 px-2">
          <span className="text-white">The complete AI coding arsenal.</span>
          <br />
          <span className="italic text-slate-500">Built for builders.</span>
        </h2>
      </div>
    </section>
  )
}
