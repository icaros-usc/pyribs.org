// Configuration for tailwind.css
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.liquid",
    "./src/**/*.md",
    ".eleventy.js", // We generate some markup in the shortcodes listed here.
  ],
  content: ["src/**/*.html", "src/**/*.liquid", "src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        dark: "#603f8c",
        semidark: "#6f4ba7",
        DEFAULT: "#7e57c2",
        light: "#f1eafd",
      },
      secondary: {
        DEFAULT: "#e040fb",
      },
      light: "rgba(0,0,0,0.54)",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover", "group-focus"],
    },
  },
  plugins: [],
};
