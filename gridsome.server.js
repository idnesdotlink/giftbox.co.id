// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addContentType, getContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    // const product = getContentType("Product");
    // product.addSchemaField("image", ({ graphql }) => ({
    //   type: graphql.GraphQLString,
    //   args: {
    //     upperCase: { type: graphql.GraphQLBoolean, defaultValue: false }
    //   },
    //   resolve(node, args) {
    //     const value = node.fields.myField;
    //     return args.upperCase ? value.toUpperCase() : value;
    //   }
    // }));
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
