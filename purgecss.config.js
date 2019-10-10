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
    "tns-ah",
    "tns-autowidth",
    "tns-carousel",
    "tns-complete",
    "tns-controls",
    "tns-fadeIn",
    "tns-fadeOut",
    "tns-gallery",
    "tns-horizontal",
    "tns-item",
    "tns-lazy-img",
    "tns-moving",
    "tns-nav",
    "tns-nav-active",
    "tns-no-calc",
    "tns-no-subpixel",
    "tns-normal",
    "tns-outer",
    "tns-ovh",
    "tns-slide-active",
    "tns-slider",
    "tns-subpixel",
    "tns-t-ct",
    "tns-t-subp2",
    "tns-transparent",
    "tns-visually-hidden",
    "tns-vpfix",
    "v--modal",
    "v--modal-overlay",
    "v--modal-box",
    "v--modal-background-click",
    "v--modal-top-right",
    "tooltip",
    "tooltip-inner",
    "tooltip-arrow"
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["vue", "js", "jsx", "md", "html", "pug"]
    }
  ]
};
