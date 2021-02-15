// Configuration for tailwind.css
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
              color: "#7e57c2",
              "&:hover": {
                color: "#603f8c",
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
          },
        },
      },
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
        gray: {
          100: "#f3f4f7",
        },
      },
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
