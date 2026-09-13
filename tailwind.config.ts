import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        paper: '#f1eee7',
        cream: '#fffdf7',
        accent: {
          red: '#c30f1f',
          'red-dark': '#8f0b17',
          yellow: '#f4c430',
          teal: '#137c78'
        },
        muted: '#9a948a',
        line: '#302d29'
      },
      fontFamily: {
        display: ['Impact', 'Arial Narrow', 'sans-serif'],
        body: ['Trebuchet MS', 'Arial', 'sans-serif']
      },
      boxShadow: {
        neo: '7px 7px 0 #171717',
        'neo-sm': '3px 3px 0 #171717',
        'neo-hover': '2px 2px 0 #171717',
        'neo-lg': '10px 10px 0 #171717'
      }
    }
  },
  plugins: []
} satisfies Config;
