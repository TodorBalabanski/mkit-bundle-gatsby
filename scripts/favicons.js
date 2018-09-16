const favicons = require('favicons');
const path = require('path');
const fs = require('fs');

const {
  siteMetadata: {
    utilsTitleShort,
    utilsIcon,
    utilsBackgroundColor,
    siteThemeColor
  }
} = require('../gatsby-config');

const dir = path.resolve(__dirname, '../public/icons/');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const source = utilsIcon;

const configuration = {
  path: '/icons/',
  appName: utilsTitleShort,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: utilsBackgroundColor,
  theme_color: siteThemeColor,
  display: 'standalone',
  orientation: 'any',
  start_url: '/',
  version: '1.0',
  logging: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: true,
    yandex: false
  }
};

const callback = (err, res) => {
  if (err) {
    console.log(err.message);
    return;
  }

  res.images.forEach(image => {
    fs.writeFile(
      path.resolve(__dirname, '../public/icons/', image.name),
      image.contents,
      imgErr => {
        if (imgErr) {
          console.log(imgErr);
        }
      }
    );
  });

  res.files.forEach(file => {
    fs.writeFile(
      path.resolve(__dirname, '../public/', file.name),
      file.contents,
      fileErr => {
        if (fileErr) {
          console.log(fileErr);
        }
      }
    );
  });
};

favicons(source, configuration, callback);
