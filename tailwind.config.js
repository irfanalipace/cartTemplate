/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        navColor: '#00000080',
        cardHeadColor: '#191825',
        tapc: "#5D50C6",
        pinkColor: "#F85E9F",
        ratingColor: "#FF5722",
        formColor: "#FFFBF0",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }


    },
  },
  plugins: [],
}
