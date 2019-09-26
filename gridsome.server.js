const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");

module.exports = function(api) {
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
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
