class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\\/]+/g);
  }
}

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md"
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
    "product-slider",
    "v--modal",
    "v--modal-overlay",
    "v--modal-box",
    "v--modal-background-click",
    "v--modal-top-right",
    "tooltip",
    "tooltip-inner",
    "tooltip-arrow",
    "agile",
    "slide",
    "agile__slides",
    "agile__slide",
    "agile__slides--cloned",
    "agile__slides--regular",
    "agile__list",
    "agile__track",
    "agile__actions",
    "agile__dots",
    "agile__dot",
    "agile__dot--current",
    "agile__nav-button",
    "agile__nav-button--next",
    "agile__nav-button--prev",
    "vue-fixed-header",
    "vue-fixed-header--isFixed",
    "fixed-footer",
    "isFixed",
    "headerIsFixed",
    "material-icons",
    "vue-fab-material-icons",
    "fab-item",
    "fab-item-title",
    "fab-shadow",
    "iconfont",
    "vue-fab-iconfont-icons",
    "icons",
    "fab-container",
    "fab-item-container",
    "fab-size-big",
    "fab-size-normal",
    "fab-size-small"
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["vue", "js", "jsx", "md", "html", "pug"]
    }
  ]
};
