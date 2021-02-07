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
];
