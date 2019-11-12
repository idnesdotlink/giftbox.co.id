const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const postcsspresetenv = require("postcss-preset-env");
// const stylelint = require("stylelint");
// const postcssreporter = require("postcss-reporter");
const postcssimport = require("postcss-import");

// export {
//   tailwind,
//   purgecss,
//   cssnano,
//   postcsspresetenv,
//   stylelint,
//   postcssreporter,
//   postcssimport
// };

const PostCssPlugins = [
  postcssimport(),
  tailwind(),
  postcsspresetenv({ stage: 1 })
];

if (process.env.NODE_ENV === "production") {
  PostCssPlugins.push(purgecss());
  PostCssPlugins.push(cssnano());
}

module.exports = PostCssPlugins;
