/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      FuturaBold: ['FuturaBold', 'sans-serif'],
      FuturaLight: ['FuturaLight', 'sans-serif'],
      FuturaMedium: ['FuturaMedium', 'sans-serif'],
      FuturaBook: ['FuturaBook', 'sans-serif'],
    },
  },
  plugins: [],
}