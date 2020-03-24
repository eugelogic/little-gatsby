/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Little Gatsby`,
    description: `Blog like if nobody was reading.`,
    siteUrl: `https://little-gatsby.netlify.com/`,
    author: {
      name: `Eugene Molari`,
      bio: `Spreading some #JAMstack :-)`,
      github: `https://github.com/eugelogic`,
      twitter: `https://twitter.com/EugeneMolari`
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`]
          },
          {
            family: `Luckiest Guy`,
            variants: [`400`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md']
      }
    }
  ]
}
