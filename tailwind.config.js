/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: '#ededff98',
      second: '#cecece'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
