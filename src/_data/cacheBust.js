const md5File = require("md5-file");
const fs = require("fs");

const cacheBust = () => {
  // A "map" of files to cache bust.
  const files = {
    mainCss: "./src/_compiled-assets/main.css",
    mainJs: "./src/_compiled-assets/main.js",
  };

  // vendor.js is not always created.
  const vendorJsPath = "./src/_compiled-assets/vendor.js";
  if (fs.existsSync(vendorJsPath)) {
    files.vendorJs = vendorJsPath;
  }

  // In dev, add a md5 hash to the URL, and in production, add the date.
  return Object.entries(files).reduce((acc, [key, path]) => {
    const now = Date.now();
    const bust =
      process.env.ELEVENTY_ENV === "production"
        ? md5File.sync(path, (_err, hash) => hash)
        : now;

    acc[key] = bust;

    return acc;
  }, {});
};

module.exports = cacheBust;
