const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkmode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.amber,
        red: colors.red,
      },
      fontFamily: {
        poppins: ["Poppins, Sans-Serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
