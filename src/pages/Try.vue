<template>
  <Slidesgo
    class="try w-full h-full relative"
    :class="classList"
  >
    <div class="try-hero">
      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">Hero</div>
    </div>
  </Slidesgo>
</template>

<script>
import Slidesgo from '@/layouts/Slidesgo'
export default {
  components: {
    Slidesgo
  },
  data () {
    return {
      slotStyles: {
        height: '2000px'
      },
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      },
      classList: []
    }
  },
  methods: {
      onWaypoint ({ going, direction }) {
        // going: in, out
        // direction: top, right, bottom, left
        if (going === this.$waypointMap.GOING_IN && this.classList.length > 0) {
          console.log('waypoint going in!')
          this.classList = []
        }

        if (direction === this.$waypointMap.DIRECTION_TOP) {
          console.log('waypoint going top!')
          this.classList = ['active']
        }
      }
    }
}
</script>
<style lang="scss">
.try-hero {
  padding-top: 64px;
  height: 250px;
  transition: all 0.3s;
  background-color: blue;
}
.active .try-hero {
  padding-top: 40px;
}
.try-hero > div {
  height: 100%;
}
.try {
  z-index: 0;
}
</style>