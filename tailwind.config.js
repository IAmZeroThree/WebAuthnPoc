/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bus-bg': "url('/assets/images/bus_bg.webp')",
      }
    },
    screens: {
      'sm': { 'raw': '(max-width: 767px)' },
      'md': { 'raw': '(min-width: 768px)' },
    }
  },
  plugins: [],
}

