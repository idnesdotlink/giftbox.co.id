// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VTooltip from "v-tooltip";
import PortalVue from "portal-vue";
import "animate.css";
import "magic.css/dist/magic.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(PortalVue);
  if (isClient) {
    const VModal = require("vue-js-modal").default;
    Vue.use(VTooltip);
    Vue.use(VModal);
  }
  head.htmlAttrs = { lang: "en" };
  head.bodyAttrs = {
    class:
      "bg-background text-gray font-sans min-h-screen min-w-screen flex flex-col",
    style: "width: 100vw; min-width: 100vw; overflow: hidden;"
  };
}
