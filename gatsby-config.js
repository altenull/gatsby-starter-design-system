/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Design System Starter',
    description:
      'Build your design system website with a simple code highlighter that provided by this gatsby starter.',
    hosts: {
      demoSite: 'https://gatsby-starter-design-system.netlify.app',
    },
    ids: {
      buyMeACoffee: 'altenull',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-remark-prismjs',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'codes',
        path: `${__dirname}/src/assets/codes`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
  ],
};
