const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      saturate: {
        25: '.25',
        75: '.75',
      },
      screens: {
        'xs': '456px' 
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

