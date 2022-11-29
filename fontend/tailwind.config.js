/** @type {import('tailwindcss').Config} */
const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {}
  },
  plugins: []
});
