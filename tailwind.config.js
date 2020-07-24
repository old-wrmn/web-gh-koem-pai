const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  theme: {
    fontFamily:{
        'display':['Oregano'],
    },
    extend:{
        colors:{
            leaf: '#8cac40',
            sky: '#E1F0CE',
            sea: '#599EAA'
        },
    },
  },
  variants: {},
  plugins: [
   plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem .5rem',
          fontWeight: '600',
        },
        '.btn-social': {
            color: '#fff',
          '&:hover': {
              color: '#599eaa'
          },
        },
      }

      addComponents(buttons)
    })
  ],
}
