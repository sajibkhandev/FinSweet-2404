/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BBBBCB',
      },
      fontFamily: {
        'pop': ["Poppins"],
        
      },
      width: {
        'container': '1280px',
      }
    },
  },
  plugins: [],
}

