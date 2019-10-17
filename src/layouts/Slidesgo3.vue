<template>
  <div class="overflow-y-auto overflow-x-hidden">
    <LayoutHeader3 />
    <LayoutNavMob3 />
    <div :style="slotStyles">
      <slot />
    </div>
  </div>
</template>

<script>
import LayoutHeader3 from '@/components/LayoutHeader3'
import LayoutNavMob3 from '@/components/LayoutNavMob3'
export default {
  components: {
    LayoutHeader3,
    LayoutNavMob3
  },
  data () {
    return {
      slotStyles: {
        height: '2000px'
      },
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
        console.log('waypoint going in!')
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    }
  }
}
</script>