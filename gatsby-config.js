module.exports = {
  siteMetadata: {
    siteUrl: "https://qyll.dev",
    title: "Qyll",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-nodejs",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images"
    },
  ],
};
