/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
			center: true,
			padding: '1rem'
		},
    screen: {
			xs: '320px', // mobile
			sm: '576px', // mobile
			md: '768px', // tablet
			lg: '992px', // tablet
			xl: '1200px', // laptop
			'2xl': '1448px', // laptop
			'3xl': '1600px' // laptop
		},
    extend: {
      lineHeight: {
        '12': '3rem',
        '16': '4rem'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}