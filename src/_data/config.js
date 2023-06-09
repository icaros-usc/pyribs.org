// Config for the entire site.
const twitter = "https://twitter.com/pyribs/";
const github = "https://github.com/icaros-usc/pyribs/";
// const rss = "/feed.xml";
const email = "team@pyribs.org";

// Prefix, e.g. https://example.com/PREFIX - replace "template" below. Set to
// empty string if there is no prefix.
const prefix = ""; // No slash at the end.

module.exports = {
  name: "pyribs",
  author: "ICAROS Lab pyribs Team",
  email,
  hostname: "https://pyribs.org", // No slash at the end.
  pathPrefix: process.env.ELEVENTY_ENV === "development" ? "/dev" : `${prefix}`,

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description:
    "A bare-bones Python library for quality diversity optimization.",

  // Path to icon image.
  icon: {
    url: "/imgs/icon.svg",
    width: "49",
    height: "44",
  },

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview.
  openGraph: "/imgs/open-graph-preview.png",

  // Path to Twitter preview image.
  twitterPreview: "/imgs/twitter-preview.png",

  // URL to visit to raise issues about the website.
  issues: "https://github.com/icaros-usc/pyribs.org/issues/new/choose",

  // Blog. Available to avoid broken links but not linked in main website.
  blog: {
    title: "pyribs Blog",

    // Mirrors description in blog.liquid.
    subtitle: "Updates and announcements from the pyribs library.",
  },

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
    //   name: "RSS Feed",
    //   url: rss,
    //   fa: "fa fa-rss",
    // },
  ],

  // Navigation links.
  navigation: [
    {
      name: "Paper",
      children: [
        {
          name: "Pyribs Paper",
          url: "/paper/",
        },
        {
          name: "Citing pyribs",
          url: "https://github.com/icaros-usc/pyribs/#citation",
        },
        {
          name: "Google Scholar",
          url:
            "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16246392515630874608",
        },
      ],
    },
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
      url: "https://docs.pyribs.org/en/stable/tutorials.html",
    },
    {
      name: "GitHub",
      url: github,
    },
  ],

  // Footer links.
  footer: [
    {
      name: "Citation",
      url: "https://github.com/icaros-usc/pyribs/#citation",
      fa: "fas fa-link",
      textColor: "text-green-400",
    },
    {
      name: "Google Scholar",
      url:
        "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16246392515630874608",
      fa: "ai ai-google-scholar-square",
      textColor: "text-[#4d90fe]",
    },
    {
      name: "Documentation",
      url: "https://docs.pyribs.org/",
      fa: "fas fa-book",
      textColor: "text-primary",
    },
    {
      name: "Tutorials",
      url: "https://docs.pyribs.org/en/stable/tutorials.html",
      fa: "fas fa-graduation-cap",
      textColor: "text-orange-400",
    },
    // {
    //   name: "Blog",
    //   url: "/blog/",
    //   fa: "fas fa-comment-dots",
    //   textColor: "text-blue-300",
    // },
    {
      name: "PyPI",
      url: "https://pypi.org/project/ribs/",
      fa: "fab fa-python",
      textColor: "text-[#0073b7]",
    },
    {
      name: "GitHub",
      url: github,
      fa: "fab fa-github",
      textColor: "text-white",
    },
    // {
    //   name: "RSS",
    //   url: rss,
    //   fa: "fas fa-rss",
    //   textColor: "text-orange-500",
    // },
    {
      name: "Twitter",
      desc: "@pyribs",
      url: twitter,
      fa: "fab fa-twitter",
      textColor: "text-[#2f9bf0]", // Twitter logo color.
    },
  ],
};
