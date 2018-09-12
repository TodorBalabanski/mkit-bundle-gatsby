const path = require('path');

const TITLE = 'MK IT Bundle Gatsby';
const SHORT_TITLE = 'BundleGatsby';
const DESCRIPTION = 'Micro Gatsby project bundle';
const URL = 'https://github.com/mkitio/mkit-bundle-gatsby';
const THEME_COLOR = '#009688';
const BACKGROUND_COLOR = '#009688';
const LOGO = 'src/images/icon.png';
const TWITTER_ACCOUNT = 'your-twitter-account';
const FB_APP_ID = 'your-fb-app-id';

// Do not modify!
// Every value that should be modified is exported above as constant;
module.exports = {
  siteMetadata: {
    siteTitle: TITLE,
    siteTitleShort: SHORT_TITLE,
    siteDescription: DESCRIPTION,
    siteUrl: URL,
    themeColor: THEME_COLOR,
    backgroundColor: BACKGROUND_COLOR,
    logo: path.resolve(__dirname, LOGO),
    social: {
      twitter: TWITTER_ACCOUNT,
      fbAppId: FB_APP_ID
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: TITLE,
        short_name: SHORT_TITLE,
        start_url: '/',
        theme_color: THEME_COLOR,
        background_color: BACKGROUND_COLOR,
        display: 'minimal-ui',
        icon: LOGO // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
};
