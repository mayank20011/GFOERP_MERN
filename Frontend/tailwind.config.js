export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'custom-range':{'min':'770px', 'max':'983px'},
        'max-1240':{'max':'1240px'},
        'lesspadding':{'max':'540px'},
        'max-620':{'max':'620px'},
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
    },
  },
  plugins: [],
};