const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
      errors: colors.red,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
