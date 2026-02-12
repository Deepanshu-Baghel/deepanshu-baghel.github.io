import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6', // Neon Purple
        secondary: '#06b6d4', // Neon Cyan
        accent: '#3b82f6', // Neon Blue
        background: '#0a0a0a', // Deep Black
        foreground: '#f8fafc', // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-secondary': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-accent': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
