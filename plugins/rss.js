const RSS = require("rss");
const fs = require("fs");
const path = require("path");

module.exports = function(
  { beforeBuild, loadSource },
  { contentTypeName, maxItems, feedOptions, feedItemOptions, ...options }
) {
  const feed = new RSS(feedOptions);
  let collectionData;
  loadSource(actions => {
    collectionData = actions.getCollection(contentTypeName).collection.data;
    const dateField = options.dateField || "date";
    const collectionWithValidDates = collectionData.filter(
      node => !isNaN(new Date(node[dateField]).getTime())
    );
    if (collectionWithValidDates.length === collectionData.length) {
      collectionData.sort((nodeA, nodeB) => {
        if (options.latest) {
          return (
            new Date(nodeB[dateField]).getTime() -
            new Date(nodeA[dateField]).getTime()
          );
        } else {
          return (
            new Date(nodeA[dateField]).getTime() -
            new Date(nodeB[dateField]).getTime()
          );
        }
      });
    }

    if (maxItems) {
      collectionData = collectionData.filter((item, index) => index < maxItems);
    }
  });
  beforeBuild(() => {
    collectionData.forEach(item => {
      feed.item(feedItemOptions(item));
    });
    const output = {
      dir: "./static",
      name: "rss.xml",
      ...options.output
    };

    const outputPath = path.resolve(process.cwd(), output.dir);
    const outputPathExists = fs.existsSync(outputPath);
    const fileName = output.name.endsWith(".xml")
      ? output.name
      : `${output.name}.xml`;

    if (outputPathExists) {
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        feed.xml()
      );
    } else {
      fs.mkdirSync(outputPath);
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        feed.xml()
      );
    }
  });
};
