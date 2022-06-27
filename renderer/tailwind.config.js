const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Maison Neue', ...fontFamily.sans],
        extended: ['Maison Neue Extended', ...fontFamily.sans],
        mono: ['Maison Neue Mono', ...fontFamily.mono],
      },
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
        off: {
          1: '#ff9a02',
          2: '#ff3f02',
        },
        secondary: {
          DEFAULT: 'rgb(4 4 4 / 85%)',
          hover: 'rgb(4 4 4 / 80%)',
          border: 'rgb(230 230 230 / 20%)',
        },
        bg: {
          top: '#484848',
          bottom: '#232323',
        },
        blur: {
          1: 'rgb(255 255 255 / 10%)',
          2: 'rgb(255 255 255 / 20%)',
        },
        wrld: '#02a4ff',
      },
      boxShadow: {
        main: '0 6px 6px rgb(0 0 0 / 30%)',
        light: '0 6px 6px rgb(0 0 0 / 20%)',
        lighter: '0 6px 6px rgb(0 0 0 / 10%)',
      },
      borderRadius: {
        window: '10px',
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
          'background-color': 'theme(colors.blur.1)',
          'backdrop-filter': 'blur(var(--blur-amount))',
          'box-shadow': 'theme(boxShadow.main)',
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
            'background-color': 'rgb(0 0 0 / 50%)',

            '&:hover': {
              'background-color': 'rgb(0 0 0 / 55%)',
            },

            '&:active': {
              'background-color': 'rgb(0 0 0 / 65%)',
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
