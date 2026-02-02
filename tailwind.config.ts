import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float-up': 'float-up 0.8s ease-out forwards',
        'float-gentle': 'float-gentle 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'progress-fill': 'progress-fill 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(34, 211, 238, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34, 211, 238, 0)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '50%': { width: '85%' },
          '100%': { width: '100%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
