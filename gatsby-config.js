const path = require('path');

// Project configuration
const TITLE = 'MK IT Bundle Gatsby';
const SHORT_TITLE = 'BundleGatsby';
const DESCRIPTION = 'Micro Gatsby project bundle';
const URL = 'https://github.com/mkitio/mkit-bundle-gatsby';
const THEME_COLOR = '#009688';
const BACKGROUND_COLOR = '#009688';
const ICON = 'static/images/icon.png'; // used for manifest and favicon
const TWITTER_ACCOUNT = 'your-twitter-account';
const FB_APP_ID = 'your-fb-app-id';
const GA_ID = 'your-ga-id';

// Do not modify unless you know what you're doing
module.exports = {
  siteMetadata: {
    siteTitle: TITLE,
    siteTitleShort: SHORT_TITLE,
    siteDescription: DESCRIPTION,
    siteUrl: URL,
    siteIcon: path.resolve(__dirname, ICON),
    themeColor: THEME_COLOR,
    backgroundColor: BACKGROUND_COLOR,
    social: {
      twitter: TWITTER_ACCOUNT,
      fbAppId: FB_APP_ID
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GA_ID,
        head: false // put GA in the <head> for optimal tracking
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: TITLE,
        short_name: SHORT_TITLE,
        start_url: '/',
        theme_color: THEME_COLOR,
        background_color: BACKGROUND_COLOR,
        display: 'minimal-ui',
        icon: ICON // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size'
  ]
};
