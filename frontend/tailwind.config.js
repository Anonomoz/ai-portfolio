/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'from-blue-200', 'to-blue-400',
    'from-pink-200', 'to-pink-400',
    'from-green-200', 'to-green-400',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
