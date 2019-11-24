/* eslint-disable no-unused-vars */
import Rellax from "./rellax";
let rellax = null;
export default {
  bind: function(el, binding, vNode) {
    //
    console.log(el);
    rellax = new Rellax(vNode.elm);
  },
  unbind: function(el) {
    //
    rellax = null;
  }
};
