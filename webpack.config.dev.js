// Development config for Webpack.
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // Allow watching and live reloading of assets
  watch: true,
  watchOptions: {
    // Don't watch vim files, as doing so causes tons of reloads.
    ignored: "**/*.swp",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ELEVENTY_ENV": '"development"',
    }),
  ],
});
