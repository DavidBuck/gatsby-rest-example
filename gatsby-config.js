/* eslint-disable global-require */
module.exports = {
  siteMetadata: {
    title: `Gatsby Rest Source Example`,
    description: `Gatsby example using data from a REST API.`,
    author: `@david_buck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-json-server`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-rest-source-example`,
        short_name: `example`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
