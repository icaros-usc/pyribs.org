// Config for the entire site.
module.exports = {
  name: "pyribs",
  author: "ICAROS Lab pyribs Team",
  baseUrl: "https://pyribs.org",

  // Inserted directly into the copyright, i.e. "(c) {{ copyright }}".
  copyright: "ICAROS Lab 2020-2021",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "A bare-bones quality-diversity optimization library.",

  // Path to icon image.
  icon: "/imgs/icon.svg",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview.
  openGraph: "/imgs/open-graph-preview.png",

  // Path to Twitter preview image.
  twitterPreview: "/imgs/twitter-preview.png",

  // URL to visit to raise issues about the website.
  issues: "https://github.com/icaros-usc/pyribs.org/issues/new/choose",

  // Navigation links.
  navigation: [
    // {
    //   name: "Blog",
    //   url: "/blog/",
    // },
    {
      name: "Documentation",
      url: "https://docs.pyribs.org/",
    },
    {
      name: "Tutorials",
      url: "https://docs.pyribs.org/en/latest/tutorials.html",
    },
    {
      name: "Publications",
      url: "/publications/",
    },
    {
      name: "GitHub",
      url: "https://github.com/icaros-usc/pyribs/",
    },
  ],

  // Footer links.
  footer: [
    // {
    //   name: "Blog",
    //   url: "/blog/",
    // },
    {
      name: "Documentation",
      url: "https://docs.pyribs.org/",
    },
    {
      name: "Tutorials",
      url: "https://docs.pyribs.org/en/latest/tutorials.html",
    },
    {
      name: "Publications",
      url: "/publications/",
    },
    {
      name: "GitHub",
      url: "https://github.com/icaros-usc/pyribs/",
    },
    {
      name: "PyPI",
      url: "https://pypi.org/project/ribs/",
    },
  ],
};
