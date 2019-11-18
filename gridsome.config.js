// import pcss from "./config/postcss";
const pcss = require("./config/postcss");
const WebpackBar = require("webpackbar");
const dev = false;
const siteUrl = dev ? "http://127.0.0.1:8002;" : "http://giftbox.idnes.xyz";
const pathPrefix = ""; // "giftbox.co.id";
const fullSiteUrl = siteUrl + (pathPrefix ? "/" + pathPrefix : "");

const { srcPath, rootPath } = require("./config/shared");

module.exports = {
  siteName: "Giftbox Promosindo",
  siteUrl: siteUrl,
  pathPrefix: pathPrefix,
  siteDescription: "Giftbox Promosindo",
  templates: {
    Post: "/blog/:title",
    Product: "/product/:title",
    Tag: "/tag/:id",
    Customer: "/customer/:id",
    Catalog: "/catalog/:id"
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/products/*/index.md",
        typeName: "Product",
        refs: {
          tags: {
            typeName: "Tag"
          }
        }
      }
    },
    {
      use: require("./plugins/rss.js"),
      options: {
        contentTypeName: "Product",
        feedOptions: {
          title: "Giftbox",
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
    },
    {
      use: "gridsome-plugin-modal"
    }
    // {
    //   use: "@gridsome/plugin-critical",
    //   options: {
    //     paths: ["/"],
    //     width: 1300,
    //     height: 900
    //   }
    // }
    // {
    //   use: "gridsome-plugin-pwa",
    //   options: {
    //     title: "Gridsome",
    //     startUrl: "/giftbox.co.id/",
    //     display: "standalone",
    //     statusBarStyle: "default",
    //     manifestPath: "manifest.json",
    //     serviceWorkerPath: "service-worker.js",
    //     shortName: "Gridsome",
    //     themeColor: "#666600",
    //     backgroundColor: "#ffffff",
    //     icon: "src/favicon.png" // must be supp lied!
    //   }
    // }
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
    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    // svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    console.log({ rootPath, srcPath });
    config.plugin("webpackbar").use(new WebpackBar());
    const Lint = config.module.rule("lint");
    // eslint-disable-next-line no-console
    Lint.test(/\.js$/)
      .pre()
      .include.add(require("path").resolve("./src"))
      .end()
      .use("eslint")
      .loader("eslint-loader");

    const PostCss = config.module.rule("postcss");
    PostCss.oneOf("normal")
      .use("postcss-loader")
      .tap(options => {
        options.plugins = pcss;
        return options;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        implementation: require("sass"),
        sassOptions: {
          fiber: require("fibers")
        }
      }
    }
  }
};
