/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        popins: ['Popins', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}