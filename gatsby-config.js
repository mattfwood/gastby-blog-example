module.exports = {
  siteMetadata: {
    // here you can edit meta data used throughout the site
    siteTitle: `Sanity Check`,
    siteTitleAlt: `Sanity Check`,
    siteHeadline: `Sanity Check`,
    siteUrl: `https://blog.matthewfwood.com`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@mattfwood`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options: {
        formatString: 'MMM D, YYYY',
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/mattfwood`,
          },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
      },
    },
    // feed && {
    //   resolve: `gatsby-plugin-feed`,
    //   // options: newsletterFeed(feedTitle),
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
};
