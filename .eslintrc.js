module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "preact", "google", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@babel/eslint-parser",
  rules: {
    "require-jsdoc": 0,
    "sort-imports": 0,
    "no-invalid-this": 0,
    "react/prop-types": 0,
  },
  settings: {
    react: {
      // Pragma to use, "h" since this is Preact.
      // See https://github.com/standard/standard/issues/1231
      pragma: "h",
      // Regex for Component Factory to use, default to "createReactClass"
      createClass: "createReactClass",
      // React version. "detect" automatically picks the version you have installed.
      // Currently using preact, so this does generate a warning.
      version: "detect",
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g.
      // `forbidExtraProps`. If this isn't set, any propTypes wrapped in a
      // function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
    // Weird: https://github.com/preactjs/eslint-config-preact/issues/19#issuecomment-997924892
    jest: { version: 27 },
  },
};
