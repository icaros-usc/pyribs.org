// Config for the entire site.
const twitter = "https://twitter.com/pyribs/";
const github = "https://github.com/icaros-usc/pyribs/";
// const rss = "/feed.xml";

module.exports = {
  name: "pyribs",
  author: "ICAROS Lab pyribs Team",
  baseUrl: "https://pyribs.org", // No slash at the end.

  // Inserted directly into the copyright, i.e. "(c) {{ copyright }}".
  copyright: "ICAROS Lab 2020-2021",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description:
    "A bare-bones Python library for quality diversity optimization.",

  // Path to icon image.
  icon: "/imgs/icon.svg",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview.
  openGraph: "/imgs/open-graph-preview.png",

  // Path to Twitter preview image.
  twitterPreview: "/imgs/twitter-preview.png",

  // URL to visit to raise issues about the website.
  issues: "https://github.com/icaros-usc/pyribs.org/issues/new/choose",

  // Social links. "fa" is the FontAwesome code for the icon.
  social: [
    {
      name: "GitHub (icaros-usc/pyribs)",
      url: github,
      fa: "fab fa-github",
    },
    {
      name: "Twitter (@pyribs)",
      url: twitter,
      fa: "fab fa-twitter",
    },
    // {
    //   name: "RSS",
    //   url: rss,
    //   fa: "fa fa-rss",
    // },
  ],

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
      name: "Publications",
      url: "/publications/",
    },
    {
      name: "GitHub",
      url: github,
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
      url: github,
    },
    {
      name: "PyPI",
      url: "https://pypi.org/project/ribs/",
    },
    {
      name: "Twitter",
      url: twitter,
    },
    // {
    //   name: "RSS",
    //   url: rss,
    // },
  ],
};
