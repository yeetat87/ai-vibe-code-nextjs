export default function LogoBar() {
  const companies = ['Vercel', 'Anthropic', 'OpenAI', 'Stripe', 'Linear', 'Figma', 'Notion']

  return (
    <div className="border-y border-white/5 py-3 sm:py-4 overflow-hidden float-in-1">
      <div className="flex items-center gap-8 sm:gap-14 opacity-20 marquee whitespace-nowrap">
        <span className="text-[10px] sm:text-xs tracking-[0.2em]">DEVELOPERS FROM</span>
        {companies.map((company) => (
          <span key={company} className="text-sm sm:text-lg font-semibold">{company}</span>
        ))}
        <span className="text-[10px] sm:text-xs tracking-[0.2em]">DEVELOPERS FROM</span>
        {companies.map((company) => (
          <span key={`${company}-2`} className="text-sm sm:text-lg font-semibold">{company}</span>
        ))}
      </div>
    </div>
  )
}
