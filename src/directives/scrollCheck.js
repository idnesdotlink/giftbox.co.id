/* eslint-disable prettier-vue/prettier */
/* eslint-disable no-unused-vars */
import throttle from "lodash.throttle";
let y = undefined;
const w = function() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

const x = function(el) {
  const rect = el.getBoundingClientRect();
  // console.log(rect);
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return rect.top + scrollTop;
};

const wow = function() {
  console.log("throttled");
};

const test = throttle(wow, 1000);

const scrollCheck = {
  bind: function(el, binding, vNode) {
    y = vNode.elm;
    window.addEventListener("scroll", test, { passive: true });
  },
  unbind: function(el, binding) {
    y = undefined;
    window.removeEventListener("scroll", test, { passive: true });
  },

  inserted: function(el) {},

  componentUpdated: function(el) {}
};

export { scrollCheck };
