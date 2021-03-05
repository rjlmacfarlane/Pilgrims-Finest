module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blood-red': '#5c1500'
      },
      backgroundImage: theme => ({
        'navbg': 'url("https://www.transparenttextures.com/patterns/black-linen.png")'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
