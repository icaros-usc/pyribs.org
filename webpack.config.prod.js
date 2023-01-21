// Production config for Webpack.
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      // Applies cssnano
      // https://github.com/webpack-contrib/css-minimizer-webpack-plugin
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ELEVENTY_ENV": '"production"',
    }),
  ],
});
