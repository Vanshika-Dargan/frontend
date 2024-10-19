/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "40px",
      },
      screens:{
        sm: "375px",
        md: "768px",
        lg: "1200px"
        },
    },
    screens:{
      sm: "375px",
      md: "768px",
      lg: "1200px"
      },
    extend: {
      colors: {
        cuvetteGray: "#576474",
        cuvetteLightGray: '#F4F4F4',
        cuvetteBlue: '#0B66EF',
        cuvetteBlack: '#535353'
      },
    },
  },
  plugins: [],
}

