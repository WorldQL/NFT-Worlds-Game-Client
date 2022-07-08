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
          1: 'rgb(200 200 200 / 10%)',
          tint: 'rgb(200 200 200 / 15%)',
          light: 'rgb(200 200 200 / 18%)',
          modal: 'rgb(40 40 40 / 60%)',
        },
        wrld: '#02a4ff',
        'card-stroke': '#fefefe',
      },
      boxShadow: {
        main: '0 6px 6px rgb(0 0 0 / 30%)',
        light: '0 6px 6px rgb(0 0 0 / 20%)',
        lighter: '0 6px 6px rgb(0 0 0 / 10%)',
        modal: '0 10px 15px rgb(0 0 0 / 65%)',
        'modal-title': '0 6px 10px rgb(0 0 0 / 32%)',
        slider: 'inset 1px 3px 6px 1px rgb(0 0 0 / 40%)',
        'card-image': 'inset 0 0 0px 1px rgb(255 255 255 / 20%)',
      },
      borderRadius: {
        window: '10px',
      },
      gridTemplateRows: {
        inventory: 'repeat(4, 2fr) 1fr',
      },
      gridTemplateColumns: {
        inventory: '1fr 2fr 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities, addComponents, addVariant }) {
      addUtilities({
        '.drag': {
          '-webkit-app-region': 'drag',
        },
        '.no-drag': {
          '-webkit-app-region': 'no-drag',
        },
        '.bgblur': {
          'background-color': 'theme(colors.blur.1)',
          'backdrop-filter': 'var(--bgblur-filter)',
          'box-shadow': 'theme(boxShadow.main)',
        },
        '.pixelated': {
          'image-rendering': 'pixelated',
        },
        '.unpad': {
          'margin-left': 'calc(var(--pad) * -1)',
          'margin-right': 'calc(var(--pad) * -1)',
          'padding-left': 'var(--pad)',
          'padding-right': 'var(--pad)',
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

      addVariant('slider-thumb', '&::-webkit-slider-thumb')
    }),
  ],
}
