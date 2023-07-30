/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'db': 'hsl(209, 23%, 22%)', /* Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) */
        'vdb': 'hsl(207, 26%, 17%)', /* Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%) */
        'vdb-text': 'hsl(200, 15%, 8%)', /* Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%) */
        'dg': 'hsl(0, 0%, 52%)', /* Dark Gray (Light Mode Input): hsl(0, 0%, 52%) */
        'vlg': 'hsl(0, 0%, 98%)', /* Very Light Gray (Light Mode Background): hsl(0, 0%, 98%) */
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
