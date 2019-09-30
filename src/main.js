// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VTooltip from "v-tooltip";
import VueGallerySlideshow from "vue-gallery-slideshow";
import "animate.css";
import "magic.css/dist/magic.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  if (isClient) {
    Vue.use(VTooltip);
    Vue.component("vgs", VueGallerySlideshow);
  }
  head.htmlAttrs = { lang: "en" };
  head.bodyAttrs = {
    class:
      "bg-background text-gray font-sans min-h-screen min-w-screen flex flex-col",
    style: "width: 100vw; min-width: 100vw; overflow: hidden;"
  };
}
