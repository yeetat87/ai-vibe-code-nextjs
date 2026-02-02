export default function Testimonial() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed mb-6 sm:mb-8 reveal px-2">
          <span className="text-white italic">&ldquo;This is the resource I wish existed when I started using AI for coding.</span>
          <span className="text-slate-500 italic"> It&apos;s like having a cheat sheet for the future.&rdquo;</span>
        </blockquote>
        <div className="flex items-center justify-center gap-3 reveal delay-1">
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500"></div>
          <div className="text-left">
            <div className="font-medium text-sm">Founding Member</div>
            <div className="text-xs text-slate-500">Staff Engineer</div>
          </div>
        </div>
      </div>
    </section>
  )
}
