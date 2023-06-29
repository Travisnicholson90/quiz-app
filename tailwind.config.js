/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#212A3E",
        lightBlue: 'rgba(255, 255, 255, 0.4)',
        blue: 'rgba(59, 130, 246, .4)',
        blueQuiz: '#3b82f6'
      },
    },
  },
  plugins: [],
}