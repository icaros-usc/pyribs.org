// Common configurations for Webpack. Included into the other Webpack
// configurations in this directory. See
// https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep
// for more info.
const Fiber = require("fibers");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/_webpack/js/index.jsx",
  output: {
    library: "BUNDLE",
    path: path.resolve(__dirname, "src/_compiled-assets"),
  },
  resolve: {
    // For preact: https://preactjs.com/guide/v10/getting-started
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat", // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/, // Matches .sass, .scss, .css
        use: [
          // Instead of style-loader - see
          // https://blog.jakoblind.no/css-modules-webpack/
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            // Note: There were issues where saving files did not reload
            // tailwind. Apparently this is a pretty common issue -- many people
            // have proposed TAILWIND_MODE=watch as a solution, but that was not
            // working.
            //
            // It turns out postcss-loader works by asking webpack to watch all
            // the files tailwind marks, but there's some weird stuff that
            // happens with the newest webpack. To resolve this, I picked an
            // older version of webpack and installed that, and now watching
            // (even of tailwind.config.js) seems to work.
            //
            // This issue was not really noticeable with the old Tailwind
            // because it included all the classes anyway. It only becomes
            // important now that we're in JIT mode.
            //
            // More info:
            // - https://github.com/tailwindlabs/tailwindcss/issues/4081
            // - https://github.com/tailwindlabs/tailwindcss/issues/4073
            // - https://stackoverflow.com/questions/69710177/why-styles-dont-update-when-saving-the-files-in-tailwind-css-jit-mode-and-i-nee
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: Fiber,
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
      {
        // Transpile and polyfill JS with Babel.
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          // Note: These options used to be in `babel.config.json`.
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "h",
                  pragmaFrag: "Fragment",
                },
              ],
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // Creates a separate CSS file for each JS file that needs it.
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  // Any `import`s from `node_modules` will compile into a `vendor.js` file.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};
