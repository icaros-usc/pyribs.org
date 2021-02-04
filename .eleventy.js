// Configuration for Eleventy.

const fs = require("fs");
const htmlmin = require("html-minifier");
const path = require("path");

module.exports = function (eleventyConfig) {
  const inputDir = "src";
  const outputDir = "build";

  // Don't use the gitignore because it will ignore src/compiled-assets.
  eleventyConfig.setUseGitIgnore(false);

  staticFiles = ["robots.txt", "favicon.ico", "imgs/", "favicon/"];
  for (const file of staticFiles) {
    eleventyConfig.addPassthroughCopy(path.join(inputDir, file));
  }

  // Webpack files.
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.css");
  eleventyConfig.addWatchTarget("./src/compiled-assets/main.js");
  eleventyConfig.addWatchTarget("./src/compiled-assets/vendor.js");
  // Copy src/compiled-assets to /assets.
  eleventyConfig.addPassthroughCopy({ "src/compiled-assets": "assets" });

  // Markdown parsing with markdown-it.
  const markdownLib = require("markdown-it")({
    html: true,
    xhtmlOut: false,
    linkify: true,
    typographer: true,
  })
    .use(require("@iktakahiro/markdown-it-katex"))
    .use(require("markdown-it-center-text"))
    .use(require("markdown-it-anchor"), {
      level: 2,
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: "¶",
      permalinkClass: "permalink", // Style in index.liquid
    })
    .use(require("markdown-it-toc-done-right"), {
      level: 2,
      listType: "ul",
      containerClass: "l-body",
    })
    .use(require("markdown-it-implicit-figures"), {
      figcaption: true,
      link: true,
    });
  eleventyConfig.setLibrary("md", markdownLib);

  // Syntax highlighting.
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));

  // Minify HTML.
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if (outputPath.endsWith(".html")) {
        const minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
        });
        return minified;
      }
      return content;
    });
  }

  // BrowserSync settings.
  eleventyConfig.setBrowserSyncConfig({
    port: 3000,
    open: "local",
    online: false,
    localOnly: true,
    host: "localhost",
    notify: true,
    // Only bind to the localhost IP, (instead of 0.0.0.0, which allows external
    // connections -- interesting that this is an undocumented feature here:
    // https://www.browsersync.io/docs/options). I found out about this feature
    // here: https://github.com/BrowserSync/browser-sync/pull/1431
    listen: "localhost",
    // See https://www.11ty.dev/docs/quicktips/not-found/
    callbacks: {
      ready: function (err, bs) {
        const content404 = fs.readFileSync("build/404.html");
        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "liquid",

    // Using /dev in development helps catch instances where we depend on assets
    // to be hosted at / (in these cases, we should be using Eleventy's "url"
    // Liquid filter.
    pathPrefix: process.env.ELEVENTY_ENV === "development" ? "/dev" : "/",
  };
};
