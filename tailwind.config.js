/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'bg-blue-400',
    'bg-red-400',
    'bg-green-400'
  ],
  theme: {
    colors: {
      'white': '#EEEEEE',
      'blue': {
        400: '#60A5FA'
      },
      'green': {
        400: '#4ADE80'
      },
      'red': {
        400: '#F87171'
      },
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
