/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./english-department.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}