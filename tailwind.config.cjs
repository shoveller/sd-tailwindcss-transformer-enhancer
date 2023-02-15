const config = require('./theme/tailwind.config.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: JSON.parse(),
  plugins: []
};
