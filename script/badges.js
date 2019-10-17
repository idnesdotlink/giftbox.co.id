const { BadgeFactory } = require("gh-badges");
const fs = require("fs");

const bf = new BadgeFactory();

const format = {
  text: ["build", "passed"],
  color: "green",
  template: "flat-square"
};

const svg = bf.create(format);
fs.writeFileSync("static/images/test.svg", svg);
