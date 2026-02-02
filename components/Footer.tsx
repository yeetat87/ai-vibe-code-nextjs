export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tools Library</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Prompt Templates</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-slate-400 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold">AI</span>
            </div>
            <span className="text-base sm:text-lg font-semibold">Vibe Code</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">© 2025 AI Vibe Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
