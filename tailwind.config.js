/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9900',
        background: '#090909',
        light_gray: '#FFFFFF80'
      },
    },
  },
  plugins: [],
}
