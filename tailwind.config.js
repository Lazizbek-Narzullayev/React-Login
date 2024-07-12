/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
          '380px':'380px',
      },
      boxShadow: {
        'custom': '5px 5px 15px 1px rgba(0, 0, 0, 0.1)',
      },
      height:{
        '50px':'50px'
      },
      translate:{
        'trans':'-50%'
      },
      fontSize:{
        '17px':'17px'
      }
    },
  },
  plugins: [],
}