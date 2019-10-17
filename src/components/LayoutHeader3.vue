<template>
  <header class="header-try3">
    <div
      class="h-16"
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
    >
      <img
        src="../../static/images/giftbox-logo.svg"
        class="img"
      >
    </div>
    <div
      class="nav3 px-6 h-12 flex top-0 left-0 right-0 bg-white flex"
      :class="classList"
    >
      <div class="flex-1 flex items-center h-12">
        <a
          href="/try3"
          class="home-link"
        >home</a>
        <a href="/products">Products</a>
      </div>
      <div class="sm:hidden">menu</div>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.header-try3 {
  @apply h-24 z-10;
}
.header-try3 img {
  height: 100%;
  max-height: 100%;
  width: auto;
}
.header-try3 .nav3 {
  position: relative;
}
.header-try3 .active {
  position: fixed;
  transition: all 0.3s;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
}
</style>

<script>
export default {
  data () {
    return {
      classList: [],
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 0] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
  methods: {
    onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        this.classList = []
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.classList = ['active']
      }
    }
  }
}
</script>