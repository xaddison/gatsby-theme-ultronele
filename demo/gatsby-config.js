/**
 * Configure your Gatsby site with this file.
 * siteMetadata here override config in theme/gatsby-config.js
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme E-learning",
    author: `modified`,
    description: `e-learning - easy...`,
    siteUrl: `https://nodert.com`,
    signiture: `SourceRT`,
    logoImg:`/logo_ultronele.png`,
    social: {
      twitter: `justspeaknowcom`,
    },
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
    {
      resolve: "gatsby-theme-ultronele",
      options: {
        // contentPath: `/usr/local/lsws/nodert/dev3000/gatsby-theme-ultronele/theme`
      }
    }
  ],
}
module.exports = {
  proxy: {
    prefix: "/api",
    url: "https://nodert.com/api/",
  },
}
