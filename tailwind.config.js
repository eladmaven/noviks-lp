/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        "ass-reg": ["Assistant-Regular", "sans-serif"],
        "ass-semi": ["Assistant-SemiBold", "sans-serif"],
        "ass-bold": ["Assistant-Bold", "sans-serif"],
      },
      colors: {
        "nov-color": "#56595A",
        azov: "#97AE9B",
        "light-azov": "#D9D7C1",
        levander: "#9B9BB5",
        care: "#E2A7A4",
      },
      // fontSize: {
      //   "10xl": ["11rem", "1"],
      // },
    },
  },
  plugins: [],
};
