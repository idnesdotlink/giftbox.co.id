// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(purgecss());
  postcssPlugins.push(cssnano());
}

const siteUrl = "https://idnesdotlink.github.io";
const pathPrefix = "giftbox.co.id";
const fullSiteUrl = siteUrl + "/" + pathPrefix;

module.exports = {
  siteName: "Giftbox Promosindo",
  siteUrl: siteUrl,
  pathPrefix: pathPrefix,
  siteDescription: "Giftbox Promosindo",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/blog/:title"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/products/**/*.md",
        typeName: "Product",
        route: "/product/:title",
        refs: {
          tags: {
            typeName: "Tag",
            route: "tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Gridsome Portfolio Starter Blog",
          feed_url: fullSiteUrl + "/rss.xml",
          site_url: fullSiteUrl
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: fullSiteUrl + node.path,
          author: "Giftbox Dev",
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    }
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
