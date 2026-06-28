import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#22d3ee',
          600: '#0891b2',
          700: '#0e7490'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(34, 211, 238, 0.35)'
      }
    }
  },
  plugins: []
} satisfies Config;
