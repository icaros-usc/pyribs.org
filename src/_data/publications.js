// Extracts publications from Bibtex files.
const Cite = require("citation-js");
const fs = require("fs-extra");

function readEntries(file) {
  const rawEntries = Cite.input(fs.readFileSync(file, "utf8"));
  return rawEntries.map((e) => ({
    title: e.title,
    url: e.URL,
    year: e.issued["date-parts"][0][0],
    authors: e.author.map((a) => `${a.given} ${a.family}`).join(", "),
    container: e["container-title"],
  }));
}

module.exports = [
  {
    title: "Publications on CMA-ME",
    entries: readEntries("src/_data/publications/cma-me.bib"),
  },
  {
    title: "Publications Using pyribs",
    message: `Have you used pyribs in a publication? If so,
              <a href="https://github.com/icaros-usc/pyribs.org/issues/new/choose">
                Raise an Issue on GitHub
              </a> to have it listed here.`,
    entries: readEntries("src/_data/publications/pyribs.bib"),
  },
];
