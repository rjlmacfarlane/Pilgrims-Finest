module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blood-red': '#5c1500',
        'cornsilk': '#fff5d5'
      },
      fontFamily: {
        'medula': ['Medula One', 'cursive']
      },
      backgroundImage: theme => ({
        'nav': 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
        'body': 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
        'hero-image': 'url("/src/images/index.png")'
      }),
      height: {
        'half-screen': '57vh'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff5d5',
            'h1, h3': {
              color:'#fff5d5'
            }
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
