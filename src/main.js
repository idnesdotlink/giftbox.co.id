// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "intersection-observer";
import DefaultLayout from "~/layouts/Default.vue";
import VTooltip from "v-tooltip";
import PortalVue from "portal-vue";
import "animate.css";
import "magic.css/dist/magic.css";
import VueAgile from "vue-agile";
import VueLazyload from "vue-lazyload";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(PortalVue);
  Vue.use(VueAgile);
  Vue.use(VueLazyload);
  if (isClient) {
    const VModal = require("vue-js-modal").default;
    const VueWaypoint = require("vue-waypoint").default;
    Vue.use(VTooltip);
    Vue.use(VModal);
    Vue.use(VueWaypoint);
  }
  head.htmlAttrs = { lang: "en" };
  const { meta } = head;
  const idx = meta.findIndex(function({ key }) {
    return key === "viewport";
  });
  meta.splice(idx, 1, {
    ...meta[idx],
    content:
      "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
  });
}
