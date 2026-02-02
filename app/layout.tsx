import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Vibe Code - Your Unfair Advantage in AI Development',
  description: 'The curated playbook top developers use to ship 10x faster. Tools. Prompts. Techniques. All in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
