/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [],
  theme: {
    colors: {
      'white': '#EEEEEE',
      'black': '#222831',
      'orange': '#D65A31',
      'gray': {
        100: '#393E46',
        800: '#1F2937'
      }
    },
    extend: {},
  },
  plugins: [],
}
