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

const test = function() {
  // throttle(() => {
  // console.log(x(y));
  // }, 10);
};

const scrollCheck = {
  bind: function(el, binding, vNode) {
    console.log("bind");
    y = vNode.elm;
    // console.log(vNode.elm);
    // el.setAttribute("style", "background-color: red;");
    window.addEventListener("scroll", test);
  },
  unbind: function(el, binding) {
    console.log("unbind");
    y = undefined;
    window.removeEventListener("scroll", test);
  },

  inserted: function(el) {},

  componentUpdated: function(el) {}
};

export { scrollCheck };
