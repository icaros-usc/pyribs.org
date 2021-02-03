# pyribs.org

(TODO) [![Netlify Status]()]()

Source code for the pyribs website at <https://pyribs.org>. This website is an
[Eleventy](https://11ty.dev) hosted on [Netlify](https://netlify.com).

## Instructions

### Installation

```bash
npm install
```

### Development Server

This will serve the website at <https://localhost:8000> and reload changes to
source files:

```bash
npm start
```

### Command Reference

The following scripts are in `package.json`. Run them with `npm run <COMMAND>`.

- `dev:assets`: Use Webpack to live reload asset files (JS and SCSS).
- `dev:site`: Run the Eleventy live server.
- `start`: Start the development server and Webpack (i.e. `dev:assets` with
  `dev:site`)
- `build:clean`: Clean the build folder.
- `build:assets`: Build the assets with Webpack.
- `build:site`: Build the site with Eleventy.
- `build`: Build the website to the `build` folder (i.e. all the `build` steps).
- `lint`: Run eslint on JavaScript files in the repo.
- `linkinator`: Runs linkinator on the site to check for broken links.
- `test`: Runs any tests (e.g. linkinator) on the site. Can also invoke with
  `npm test`.

## Technologies

This website uses a _ton_ of technologies. For information on including many of
these technologies, see
[this tutorial](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep).
The following is a list of key technologies used in this repo:

- Website
  - `eleventy` is a static site generator that is the core of this website
  - `webpack` allows us to bundle lots of handy features like custom (S)CSS and
    JS
  - `babel` for transpiling new JS for compatibility with old browsers
  - Tons of plugins for `webpack` that facilitate optimizations like minifying
    HTML, CSS, and JS
- Development Tools
  - `prettier` for auto-formatting
  - `eslint` for linting
  - `husky` and `lint-staged` for automatically running linters on staged files
- CI/CD
  - `Netlify` builds, tests, and deploys the site

Refer to `package.json` for a complete list of dependencies.

## Features

- Add `katex: true` in the front matter to turn on Katex styling (JS rendering
  is done at build time)

## Manifest

```txt
src
├── assets/            // Items that are compiled by Webpack
│   ├── css/           // SCSS/CSS - compiles into assets/bundle.css
│   │   └── includes/  // Styles for _includes (includes/X.scss corresponds to _includes/X.liquid)
│   └── js/            // JS - compiles into assets/bundle.js and assets/vendor.js
├── imgs/              // All site images
├── _data/             // Global site data - see https://www.11ty.dev/docs/data-global/
├── _layouts/          // Page templates, mostly using Liquid
├── _includes/         // Components that are included in the layouts
├── 404.md             // 404 page
├── index.md           // Home page
├── favicon.svg        // Source for the favicon -> plug this into realfavicongenerator.net
└── favicon.ico        // Main favicon
```

## References

- [Creating a production-ready Eleventy project with webpack, Babel and Sass](https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep)
  - Helpful in setting up project structure
