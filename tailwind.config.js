// Configuration for tailwind.css
// const colors = require("tailwindcss/colors");

const customWidths = {};
for (let i = 1; i < 60; ++i) {
  customWidths[`${i}/60`] = `${(i / 60) * 100}%`;
}

const primary = {
  dark: "#603f8c",
  semidark: "#6f4ba7",
  DEFAULT: "#7e57c2",
  light: "#f1eafd",
};
const secondary = {
  DEFAULT: "#e040fb",
};
const gray100 = "#f3f4f7";

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,liquid,md}",
    ".eleventy.js", // We generate some markup in the shortcodes listed here.
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: primary.DEFAULT,
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: secondary.Default,
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: gray100,
              padding: "0.2rem",
              fontWeight: "normal",
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
            pre: {
              borderRadius: 0,
            },
            h2: {
              fontWeight: 300,
            },
            h3: {
              fontWeight: 300,
            },
            h4: {
              fontWeight: 300,
            },
            figcaption: {
              textAlign: "center",
            },
          },
        },
      },
      colors: {
        primary,
        secondary,
        light: "rgba(0,0,0,0.54)",
        gray: {
          100: gray100,
        },
      },
      width: customWidths,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
