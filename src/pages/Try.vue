<template>
  <Slidesgo
    class="w-full h-full relative overflow-y-auto"
    v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
  >
    <div class="try-hero">
      hero
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
      }
    }
  },
  methods: {
      onWaypoint ({ going, direction }) {
        // going: in, out
        // direction: top, right, bottom, left
        if (going === this.$waypointMap.GOING_IN) {
          console.log('waypoint going in!')
        }

        if (direction === this.$waypointMap.DIRECTION_TOP) {
          console.log('waypoint going top!')
        }
      }
    }
}
</script>
<style lang="scss">
.try-hero {
  padding-top: 20px;
  height: 250px;
}
</style>