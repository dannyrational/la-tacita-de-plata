module.exports = {
  corePlugins: {
    container: false,
  },
  purge: ['**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '425px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#3DB8B3',
        'secondary': '#FFFBF2',
      },
      transitionProperty: {
        'max-height': 'max-height',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
      },
    }),
  ],
}