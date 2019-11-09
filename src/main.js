import "intersection-observer";
import DefaultLayout from "~/layouts/Default.vue";
import VTooltip from "v-tooltip";
import PortalVue from "portal-vue";
import "@fortawesome/fontawesome-free/css/all.css";
// import "animate.css";
// import "magic.css/dist/magic.css";
import VueAgile from "vue-agile";
import VueLazyload from "vue-lazyload";
import "material-design-icons/iconfont/material-icons.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(PortalVue);
  Vue.use(VueAgile);
  Vue.use(VueLazyload);
  if (isClient) {
    import("vue2-storage").then(m => {});
    import("@/directives/wp").then(m => Vue.use(m.default));
    // import("@/directives/observe-visibility").then(m =>
    //   Vue.use(m.ObserveVisibility)
    // );
    const Vue2Storage = require("vue2-storage").default;
    Vue.use(Vue2Storage);
    const SocialSharing = require("vue-social-sharing");
    Vue.use(SocialSharing);
    const VModal = require("vue-js-modal").default;
    // const VueWaypoint = require("vue-waypoint").default;
    Vue.use(VTooltip);
    Vue.use(VModal);
    // Vue.use(VueWaypoint);
  }
  head.htmlAttrs = {
    lang: "en",
    class: ""
  };
  const { meta } = head;
  const idx = meta.findIndex(function({ key }) {
    return key === "viewport";
  });
  meta.splice(idx, 1, {
    ...meta[idx],
    content:
      "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
  });

  head.bodyAttrs = {
    class: ""
  };
}
