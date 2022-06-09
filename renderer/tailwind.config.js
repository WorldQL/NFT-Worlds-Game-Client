const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: '#ffffff',
          sub: '#b1b1b1',
          action: '#232323',
        },
        cta: {
          green: '#03ff21',
          cyan: '#03ffda',
        },
      },
      borderRadius: {
        window: '6px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.drag': {
          '-webkit-app-region': 'drag',
        },
        '.no-drag': {
          '-webkit-app-region': 'no-drag',
        },
      })
    }),
  ],
}
