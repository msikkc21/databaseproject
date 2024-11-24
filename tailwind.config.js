/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{php,html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'primary' : ['#000CFF'],
        'secondary' : ['#00043D']
      }
    },
  },
  plugins: [],
}

