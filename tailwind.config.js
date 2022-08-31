/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        light_header: 'hsl(225, 100%, 98%)',
        light_card: 'hsl(227, 47%, 96%)',
        darkbg: {
          DEFAULT: '#20222f',
          card: '#252b43',
          dark: '#1d2029'
        }
      },
    },
  },
  plugins: [],
}