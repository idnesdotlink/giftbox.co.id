import Vue, { CreateElement, VNode } from "vue";

export default Vue.extend({
  props: {
    threshold: {
      required: false,
      type: Number,
      default: 0
    },
    headerClass: {
      required: false,
      type: String,
      default: "vue-fixed-header"
    },
    fixedClass: {
      required: false,
      type: String,
      default: "vue-fixed-header--isFixed"
    },
    hideScrollUp: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  data() {
    return { check: null, isFixed: false, lastScrollTop: 0 };
  },

  mounted() {
    console.log("mounted");
    this.main();
    this.registerEvent();
  },

  beforeDestroy() {
    this.removeEvent();
  },

  methods: {
    getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop;
    },
    main() {
      this.lastScrollTop = this.getScrollTop();
      console.log(this.lastScrollTop);
      this.check = () => {
        console.log("scroll check");
        const { threshold, hideScrollUp } = this;
        let currentScrollPos = this.getScrollTop();
        this.isFixed =
          currentScrollPos >= this.lastScrollTop
            ? currentScrollPos > threshold
            : !hideScrollUp;
        this.lastScrollTop = currentScrollPos;
        this.$emit("change", this.isFixed);
        this.$forceUpdate();
      };
    },
    registerEvent() {
      console.log("register event");
      window.addEventListener("scroll", this.check);
    },
    removeEvent() {
      window.removeEventListener("scroll", this.check);
    }
  },

  render(h) {
    const children = this.$slots.default;
    if (!children || ![...children][0]) {
      return h();
    }

    const _child = [...children][0];
    const child = h(_child.tag, _child.data, _child.children || _child.text);

    child.data = child.data || { class: "" };

    if (typeof child.data.class === "string") {
      child.data.class = child.data.class.split(" ");
    }

    if (Array.isArray(child.data.class)) {
      child.data.class = [...child.data.class].reduce(
        (a, b) => ({ ...a, [b]: true }),
        {}
      );
    }

    child.data.class = {
      ...child.data.class,
      [this.headerClass]: true,
      [this.fixedClass]: !!this.isFixed
    };

    child.data.class = Object.entries(child.data.class)
      .map(([k, v]) => (v ? k : null))
      .filter(v => v)
      .join(" ");

    return child;
  }
});
