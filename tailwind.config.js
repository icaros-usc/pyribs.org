// Configuration for tailwind.css
const customWidths = {};
for (let i = 1; i < 60; ++i) {
  customWidths[`${i}/60`] = `${(i / 60) * 100}%`;
}

const gray100 = "#f3f4f7";
const primaryDefault = "#7e57c2";
const secondaryDefault = "#e040fb";

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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: primaryDefault,
              fontWeight: "normal",
              textDecoration: "none",
              "&:hover": {
                color: secondaryDefault,
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
        primary: {
          dark: "#603f8c",
          semidark: "#6f4ba7",
          DEFAULT: primaryDefault,
          light: "#f1eafd",
        },
        secondary: {
          DEFAULT: secondaryDefault,
        },
        light: "rgba(0,0,0,0.54)",
        gray: {
          100: gray100,
        },
      },
      width: customWidths,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover", "group-focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
