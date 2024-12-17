/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'custom':'18px'
      },
      colors:{
        'header-color1':'#274257',
        'header-color2':'#6192b8',
        'custom-color' : '#23354b',
      },
       height:{
        'custom-700' : '700px',
       },
       width:{
        'custom-width' : '700px',
       }
    },
  },
  plugins: [],
}

