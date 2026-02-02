export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-6 py-5 float-in">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold">AI Vibe Code</span>
        </div>
      </div>
    </nav>
  )
}
