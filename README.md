# :blue_book: mkit-bundle-gatsby

> Micro Gatsby project bundle

_Slightly opinionated_ [GatsbyJS v2](https://www.next.gatsbyjs.org/) starter template supporting various best practices.

[GatsbyJS](https://www.gatsbyjs.org) and its [Starters](https://www.gatsbyjs.org/docs/gatsby-starters/) offer outstanding features. However, there are some essential components we identify as a must-have for every project. Shared layout, full-blown SEO, static assets, favicon generation, (es)lint, pre-commit hooks... **Say No More!**

**Bug reports and PRs are more than welcome!**

## Motivation

This project strives to deliver clean folder structure and satisfying development experience. **Easy.**

**Single source of truth configuration.** As simple as editing a few constants in a single file and you're all set to start writing `your own code!`

There are many starter projects out there, but we felt they were all too tightly coupled to their domain of usage, e.g. blogs, landing pages, e-commerce, etc.

**This boilerplate will get you exactly to the point where you can start your own journey. The production-ready skeleton for modern web apps.**

## Features

- [x] :rocket: **Latest JS Support**
- [x] :gem: **ReactJS & PropTypes Validation**
- [x] :mag_right: **SEO Reusable Component**
- [x] :chart_with_upwards_trend: **[Google Analytics](https://analytics.google.com/) Integration**
- [x] :100: **[Google Lighthouse 100/100 Score](https://developers.google.com/web/tools/lighthouse/)**
- [x] :airplane: **Offline Support**
- [x] :wrench: **Single Source Of Truth Configuration**
- [x] :zap: **ESlint, Prettier, EditorConfig**
- [x] :open_file_folder: **Clean folder Structure**
- [x] :rocket: **Production Build**
- [x] :star: **Automated Favicon Generation**
- [x] :scroll: **Automated Manifest Support**
- [x] :globe_with_meridians: **Automated Sitemap Support**
- [x] :robot: **Automated Robots.txt Support**
- [x] :herb: **Automated Structured Data Support (JSON-LD)**
- [x] :elephant: **[`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) For Production Bundle Inspection**
- [x] :construction_worker: **`npm run` All The Things**
- [x] :vertical_traffic_light: **Pre-commit Hooks**

#### Gatsby-Specific Components

- [x] :cyclone: **Reusable Layout Component**
- [x] :tophat: **HOC-like `<StaticQuery />` Usage, i.e. `withStaticQuery()`**

## Getting Started

### Automagically...

This whole project can be installed automagically using [our smart tool](https://github.com/mkitio/mkit-bundler).

1. Visit [`mkit-bundler`](https://github.com/mkitio/mkit-bundler)

2. That's pretty much it... :boom: :boom: :boom:

_Don't worry, these instructions will be present there too!_

### or using [Gatsby's CLI](https://www.gatsbyjs.org/docs/)

WIP

### or Manually

These simple steps will get you a copy of the project, make it your own and let you start hacking right away!

:warning: _If you face any `npm` errors try the same steps with [Yarn](https://yarnpkg.com/)._

1. Clone the repository

```
git clone https://github.com/mkitio/mkit-bundle-gatsby.git <your-project-name>
```

2. Make it your own

```
cd <your-project-name> && rm -rf .git && git init

# Change the constants in `/gatsby-config.js` to your liking;

# Replace `/static/images/icon.png` and `/static/images/social.png` with your own. Mind the image size for best performance;
```

3. Install the dependencies

```
npm install
```

3. Test your installation with production build

```
npm run build && npm run serve
```

4. Start hacking!

```
# code and have fun
npm run develop
```

_When deploying you'd want to run `npm run build`. Then deploy the generated `/public` folder and its contents._

### Folder Structure

```
.
├── scripts                       # Runnable utility scripts
│   └── favicons.js                 # https://www.npmjs.com/package/favicons
├── src                           # Source files
│   ├── components                  # React (dumb) components
│   │   ├── layout                    # Layout component for wrapping your pages
│   │   └── seo                       # Reusable SEO component
│   ├── pages                       # Pages
│   │   ├── 404.js                    # 404 page
│   │   ├── index.js                  # Index page
│   │   └── learn-more.js             # Learn-more page (can be deleted)
│   └── utils                       # Helpers
│       └── jsonld-generator.js       # JSON-LD generator
├── static                        # Static files served from the root of your domain
│   └── images                      # Static images
│       ├── icon.png                  # Used to generate static assets automatically
│       └── social.png                # Used for SEO and Social media meta tags
├── README.md
├── gatsby-config.js              # Standard gatsby-config.js file extended with more variables
├── ...
└── package.json
```

## Available Scripts

In the project directory, you can run:

```
# Lint all `/src` files
npm run lint

# Local development
npm run develop

# Production build
npm run build

# Serve production build
npm run serve

# Build and run production preview
npm run build && npm run serve
```

## Versioning

This project uses [Semantic Versioning, a.k.a. Semver](https://semver.org/).

Each release is tagged by:

```
git tag -a v1.0.0 -m "Release v1.0.0"
npm publish --tag <tag>
```

## Authors

**Stoyan Merdzhanov** - Initial work - [MK IT](https://mkit.io)

See also the list of [contributors](https://github.com/mkitio/mkit-bundle-npm-package/contributors) who participated in this project.

## Acknowledgments

A hat-tip to Fabian Schultz ([@fschultz\_](https://twitter.com/fschultz_))! This project was heavily inspired by his amazing starter [`gatsby-universal`](https://github.com/fabe/gatsby-universal) and hard work!

## License

```
The MIT License (MIT)

Copyright (c) 2018-present MK IT Ltd. <hi@mkit.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
