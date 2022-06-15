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
        secondary: {
          DEFAULT: 'rgb(4 4 4 / 75%)',
          hover: 'rgb(4 4 4 / 60%)',
          border: 'rgb(230 230 230 / 20%)',
        },
        bg: {
          top: '#484848',
          bottom: '#232323',
        },
        blur: {
          1: 'rgba(255, 255, 255, 0.1)',
          2: 'rgba(255, 255, 255, 0.2)',
        },
      },
      borderRadius: {
        window: '6px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.drag': {
          '-webkit-app-region': 'drag',
        },
        '.no-drag': {
          '-webkit-app-region': 'no-drag',
        },
        '.bgblur': {
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(var(--blur-amount))',
          'box-shadow': '0 6px 6px rgb(0 0 0 / 30%)',
        },
        '.pixelated': {
          'image-rendering': 'pixelated',
        },
      })

      addComponents({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '13px',
            height: '0',
          },
          '&::-webkit-scrollbar-thumb': {
            height: '1em',
            border: '4px solid transparent',
            'background-clip': 'padding-box',
            'border-radius': '50px',
            'box-shadow': 'inset 0 0 0 1px transparent',
            'background-color': 'rgba(0, 0, 0, 0.5)',

            '&:hover': {
              'background-color': 'rgba(0, 0, 0, 0.55)',
            },

            '&:active': {
              'background-color': 'rgba(0, 0, 0, 0.65)',
            },
          },
          '&::-webkit-scrollbar-button': {
            width: '0',
            height: '0',
            display: 'none',
          },
          '&::-webkit-scrollbar-corner': {
            'background-color': 'transparent',
          },
        },
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}
