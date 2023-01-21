// Config for the entire site.
const twitter = "https://twitter.com/pyribs/";
const github = "https://github.com/icaros-usc/pyribs/";
const rss = "/feed.xml";
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

  // Blog.
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
    {
      name: "RSS Feed",
      url: rss,
      fa: "fa fa-rss",
    },
  ],

  // Navigation links.
  navigation: [
    {
      name: "Blog",
      url: "/blog/",
    },
    {
      name: "Citation",
      children: [
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
    {
      name: "Documentation",
      url: "https://docs.pyribs.org/",
    },
    {
      name: "GitHub",
      url: github,
    },
    // },
  ],

  // Footer links.
  footer: [
    {
      name: "Blog",
      url: "/blog/",
      fa: "fas fa-link",
      textColor: "text-gray-400",
    },
    {
      name: "Citation",
      url: "/citation/",
    },
    {
      name: "Documentation",
      url: "https://docs.pyribs.org/",
    },
    {
      name: "Tutorials",
      url: "https://docs.pyribs.org/en/stable/tutorials.html",
    },
    {
      name: "PyPI",
      url: "https://pypi.org/project/ribs/",
    },
    {
      name: "GitHub",
      url: github,
    },
    {
      name: "RSS",
      url: rss,
    },
    {
      name: "Email",
      url: `mailto: ${email}`,
    },
    {
      name: "Twitter",
      url: twitter,
    },
  ],
};
