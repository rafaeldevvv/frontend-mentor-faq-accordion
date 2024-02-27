const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightpink: "hsl(275, 100%, 97%)",
      grayishpurple: "hsl(292, 16%, 49%)",
      darkpurple: "hsl(292, 42%, 14%)",
      gray: "hsl(295 5% 51%)"
    },
    fontFamily: {
      sans: ["WorkSans", ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}

