const path = require('path');

// SEO configuration
const siteTitle = 'MK IT Bundle Gatsby';
const siteUrl = 'https://github.com/mkitio/mkit-bundle-gatsby';
const siteThemeColor = '#009688';

const defaultDescription = 'Micro Gatsby project bundle';
const defaultKeywords = 'mkit, bundle, micro, Gatsby, web, project, boilerplate, template, starter';

// Accounts & API keys
const twitter = 'your-twitter-account';
const fbAppId = 'your-fb-app-id';
const gaId = 'your-ga-id';

// Used internally
const utilsTitleShort = 'BundleGatsby';
const utilsIcon = 'static/images/icon.png';
const utilsBackgroundColor = '#009688';

// Do not modify unless you know what you're doing
module.exports = {
  siteMetadata: {
    // SEO
    siteTitle,
    siteUrl,
    siteThemeColor,
    pageDescription: defaultDescription,
    pageKeywords: defaultKeywords,
    social: {
      twitter,
      fbAppId
    },
    // Utils
    utilsTitleShort,
    utilsIcon: path.resolve(__dirname, utilsIcon),
    utilsBackgroundColor
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: gaId,
        head: false // put GA in the <head> for optimal tracking
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: utilsTitleShort,
        start_url: '/',
        theme_color: siteThemeColor,
        background_color: utilsBackgroundColor,
        display: 'minimal-ui',
        icon: utilsIcon // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size'
  ]
};
