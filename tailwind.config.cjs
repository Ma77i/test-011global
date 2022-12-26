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
      blueLight: "#0B0051",
      grey: "#252D39",
      otherBlue: "#075E8D",
      kindaBlack: "#252733",
      lightGrey: "#9FA2B4",
      blueGrey: "#374557",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
};
