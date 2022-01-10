module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'mosaic': 'url("/mosaique.png")',
        'logo': 'url("/icon.png")',
      },
      color:{
        'primary': '#00bcd4',
        'secondary': '#ff9800',
      },
    },
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
}