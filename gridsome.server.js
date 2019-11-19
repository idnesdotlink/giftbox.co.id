const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");

/** @type import('@tyankatsu0105/types-gridsome').Server */
module.exports = function(api) {
  api.chainWebpack(config => {
    config.mode("development");
  });

  api.loadSource(async ({ addCollection }) => {
    const tagsPath = path.join(__dirname, "content/tags/tags.yaml");
    const tagsRaw = await fs.readFile(tagsPath, "utf8");
    const tagsJson = yaml.safeLoad(tagsRaw);
    const tags = addCollection("Tag");
    tagsJson.forEach(({ id, title, ...fields }) => {
      tags.addNode({
        id,
        title,
        internal: {
          origin: tagsPath
        },
        ...fields
      });
    });

    const customersPath = path.join(
      __dirname,
      "content/customers/customers.yaml"
    );
    const customersRaw = await fs.readFile(customersPath, "utf8");
    const customersJson = yaml.safeLoad(customersRaw);
    const customers = addCollection("Customer");
    customersJson.forEach(({ id, title, image, ...fields }) => {
      customers.addNode({
        id,
        title,
        image,
        internal: {
          origin: customersPath
        },
        ...fields
      });
    });

    const catalogsPath = path.join(__dirname, "content/catalogs/catalogs.yaml");
    const catalogsRaw = await fs.readFile(catalogsPath, "utf8");
    const catalogsJson = yaml.safeLoad(catalogsRaw);
    const catalogs = addCollection("Catalog");
    catalogsJson.forEach(({ id, title, image, ...fields }) => {
      catalogs.addNode({
        id,
        title,
        image,
        internal: {
          origin: catalogsPath
        },
        ...fields
      });
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });

  // api.configureWebpack(conf => {
  //   const { rules } = conf.module;
  //   const pcss = rules.find((v, i) => {
  //     const test = `${v.test}`;
  //     return test === "/\\.p(ost)?css$/";
  //   });
  //   console.log(pcss.oneOf[1].use);
  //   return conf;
  // });
};
