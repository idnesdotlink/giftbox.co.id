const bodyClassList = Object.create({});
bodyClassList.install = function(Vue) {
  Vue.mixin({
    methods: {
      bodyClassList() {
        return this.$root.$el.parentNode.classList;
      }
    }
  });
};
export default bodyClassList;
