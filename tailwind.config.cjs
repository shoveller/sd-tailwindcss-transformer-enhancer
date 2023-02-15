const { theme } = require('./src/theme/tailwind.config.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme,
  plugins: []
};
