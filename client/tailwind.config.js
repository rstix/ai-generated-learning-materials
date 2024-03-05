/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      indie: ['Lato', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      yellow: '#fca311',
      darkBlue: '#14213d',
      lightGray: '#e5e5e5',
    },
  },
  plugins: [],
};
