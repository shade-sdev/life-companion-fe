/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'life-100-dark': '#0b0b0e',
        'life-200-dark': '#111214',
        'life-300-dark': '#1b1c20',
        'life-border-dark': '#1b1c20'
      }
    },
  },
  plugins: [],
}

