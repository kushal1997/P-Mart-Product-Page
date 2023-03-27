/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'sm': '640px',},
    extend: {
      colors:{
        "logo":{
          700: "#1C59AE",
          800: "#114a9a",
        }
      }
    },
  },
  plugins: [],
}
