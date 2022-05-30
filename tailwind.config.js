const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./layouts/**/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  theme: {
    fontFamily: {
      sans: "myriad-pro, sans-serif",
      headline: "myriad-pro, sans-serif",
      body: "myriad-pro, sans-serif",
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.5rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#fafafa',
        100: '#f7f7f7',
        200: '#f2f2f2',
        300: '#d9d9d9',
        400: '#cccccc',
        500: '#808080',
        600: '#666666',
        700: '#4d4d4d',
        800: '#333333',
        900: '#1a1a1a',
      },
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      teal: colors.teal,
      blue: colors.blue,
      purple: colors.violet
    },
    // controls screen width eg `max-w-screen-2xl`
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        brand: {
          light: "rgba(59, 130, 246)",    // same as tailwind default bg-blue-500
          DEFAULT: "rgba(37, 99, 235)",  // same as tailwind default bg-blue-600 
          dark: "rgba(29, 78, 216)",     // same as tailwind default bg-blue-700 
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "label-checked", "invalid"],
        borderColor: ["invalid"]
    },
  },
  plugins: [
    plugin(({addVariant, e}) => {
      addVariant('label-checked', ({modifySelectors, separator}) => {
          modifySelectors(
              ({className}) => {
                  const eClassName = e(`label-checked${separator}${className}`); // escape class
                  const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
                  return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
              }
          )
      })
    }),
    plugin(({addVariant, e}) => {
        addVariant("invalid", ({modifySelectors, separator}) => {
            modifySelectors(({className}) => {
                return `form.submitted .${e(`invalid${separator}${className}`)}:invalid`;
            });
        })
    }),
  ],
}
