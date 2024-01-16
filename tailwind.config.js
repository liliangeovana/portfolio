/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorBasic: '#604f71', 
        colorDetail: '#807094',
        colorDark: '#16131a'
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

