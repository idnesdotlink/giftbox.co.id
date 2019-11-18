const { resolve, join } = require("path");

const rootPath = resolve("..");

const srcPath = join(rootPath, "src");

module.exports = {
  rootPath,
  srcPath
};
