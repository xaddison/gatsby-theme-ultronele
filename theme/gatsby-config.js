/**
 * A slightly different config from fore-theme Gatsby
 * 
 * configuaration for theme version
 * @2019/07/15
 */

const path = require('path')

module.exports = options => {

  return {
    
    siteMetadata: {
      title: `Ultron-ELE`,
      description: `The world's fastest LMS based on Gatsby.`,
      author: `@lwz7512`,
      signiture: `Robin w li`,
      logoImg:`/logo_ultronele.png`,
      menus: [
        {name: 'HOME', url: '/'},
        {name: 'PRODUCT', url: '/product'},
        {name: 'SERVICE', url: '/service'},
        {name: 'USER GUIDE', url: '/userguide'},
        {name: 'ROADMAP', url: '/roadmap'},
        {name: 'TEAM', url: '/team'},
      ]
    },
    plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content`,
          name: options.contentPath || `content`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-ultronele-default`,
          short_name: `ultronele`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `${__dirname}/src/images/favicon-230.png`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          "excerpt_separator": `<!-- end -->`,
          plugins: [
            `gatsby-remark-emoji`,  // <-- this line adds emoji
            `gatsby-remark-autolink-headers`,
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1280,
              },
            },
            {
              resolve: 'gatsby-remark-copy-linked-files',
              options: {
                destinationDir: 'static',
              }
            }
          ]
        }
      },
    ].filter(Boolean),
    
  }

}
