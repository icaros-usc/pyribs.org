// Configuration for Eleventy.

const { EleventyRenderPlugin } = require("@11ty/eleventy");
const QRCode = require("qrcode");
const cheerio = require("cheerio");
const fs = require("fs");
const htmlmin = require("html-minifier");
const path = require("path");
const configData = require("./src/_data/config.js");

module.exports = function (eleventyConfig) {
  const inputDir = "src";
  const outputDir = "build";

  // Don't use the gitignore because it will ignore _compiled-assets.
  eleventyConfig.setUseGitIgnore(false);

  // Merge array and object data like `tags` instead of overwriting.
  eleventyConfig.setDataDeepMerge(true);

  // _webpack/ is built and placed in src/_compiled-assets/, where Eleventy
  // detects the change and copies the new assets to build/assets/.
  eleventyConfig.addPassthroughCopy({
    [path.join(inputDir, "_compiled-assets")]: "assets/",
  });

  // Copy static files.
  for (const file of [
    "**/*.{jpg,jpeg,png,svg,mp4,mp3,pdf}",
    // Copy additional static (non-compiled) assets.
    "assets/",
  ]) {
    eleventyConfig.addPassthroughCopy(path.join(inputDir, file));
  }

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

  // renderTemplate and renderFile - https://www.11ty.dev/docs/plugins/render/
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Syntax highlighting.
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));

  // RSS.
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  // Eleventy favicon.
  eleventyConfig.addPlugin(require("./eleventy/favicon-plugin.js"), {
    destination: outputDir,
    pathPrefix: configData.pathPrefix,
    appleBkgdColor: "black",
    applePad: 15,
  });

  //
  // Shortcodes and filters.
  //

  // Sanitizes a phone number so it is just a string of digits.
  eleventyConfig.addFilter("sanitizePhone", (phone) => {
    return phone.replace(/[^\d]/g, "");
  });

  // Clipboard button using clipboard.js.
  //
  // Usage: Make sure clipboard.js is included on the page and initialized (this
  // is done in index.jsx). Then, add {% clipboard %} before the text to be
  // copied and add {% endclipboard %} after the text to be copied.
  let clipboardId = 0;
  eleventyConfig.addPairedShortcode("clipboard", (content) => {
    const id = `__clipboard__${clipboardId}`;
    ++clipboardId;
    return `
<div class="relative">
  <div id="${id}">
    ${content}
  </div>
  <button class="clipboard group transition cursor-pointer flex items-center
                 absolute right-0 top-0 p-2
                 text-xs text-gray-400 hover:text-white focus:text-white"
          aria-label="Copy citation"
          data-clipboard-target="#${id}">
      <span class="pr-2 hidden group-hover:inline-block group-focus:inline-block group-active:hidden">
        Copy
      </span>
      <span class="pr-2 hidden group-active:inline-block">
        Copied!
      </span>
      <span class="material-icons">content_copy</span>
  </button>
</div>`;
  });

  // YouTube videos.
  eleventyConfig.addShortcode("youtube", (id, title) => {
    return `
<div class="relative w-full h-0"
     style="padding-bottom: 56.25%">
  <iframe
    title="${title}"
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/${id}"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>`;
  });

  // Make images lazy, but only if they do not already have the "loading"
  // attribute.
  eleventyConfig.addTransform("lazy-imgs", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      const article = cheerio.load(content);
      article("img:not([loading])").attr("loading", "lazy");
      return article.html();
    }
    return content;
  });

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
          minifyCSS: true, // Minifying JS does not seem to work very well.
        });
        return minified;
      }
      return content;
    });
  }

  // QR Codes -- thanks to this tutorial for the idea:
  // https://www.raymondcamden.com/2021/10/13/adding-pdf-output-supports-to-eleventy
  // The code is generated with the qrcode package:
  // https://www.npmjs.com/package/qrcode
  eleventyConfig.addTransform("qrcode", (content, outputPath) => {
    if (outputPath.endsWith(".qrcode.svg")) {
      return QRCode.toString(content.trim(), { type: "svg", margin: 1 });
    }
    return content;
  });

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
      ready: (err, bs) => {
        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          const content404 = fs.readFileSync("build/404.html");
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
    pathPrefix: configData.pathPrefix,
  };
};
