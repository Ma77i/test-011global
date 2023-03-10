/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      blue: "#0C0535",
      red: "#ff0000",
      orange: "#ff7800",
      dark: "#272837",
      blueLight: "#0B0051",
      otherBlue: "#075E8D",
      lightGrey: "#9FA2B4",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
