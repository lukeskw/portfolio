/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export const darkMode = 'class'
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const safelist = ['w-1/4', 'w-2/4', 'w-3/4']
export const theme = {
  extend: {
    screens: {
      xlCards: '1320px',
    },
    fontFamily: {
      sans: ['var(--font-jet)'],
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    width: {
      icon: '36px',
    },
    height: {
      icon: '36px',
    },
    colors: {
      zinc: {
        925: '#111112',
      },
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
  },
}
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') },
    )
  }),
]
