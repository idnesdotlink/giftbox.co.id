<template>
  <div class="overflow-y-auto overflow-x-hidden flex flex-col min-h-screen">
    <LayoutHeader3 />
    <div class="flex-1">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
import LayoutHeader3 from '@/components/LayoutHeader3'
import LayoutNavMob3 from '@/components/LayoutNavMob3'
export default {
  name: 'Layout-3',
  components: {
    LayoutFooter,
    LayoutHeader3,
    LayoutNavMob3
  },
  data () {
    return {
      slotStyles: {
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