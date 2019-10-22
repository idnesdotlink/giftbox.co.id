<template>
  <header class="header-try3 border-b-2 border-gray">
    <div
      class="h-16 flex"
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
    >

      <img
        src="../../static/images/giftbox-logo.svg"
        class="img"
      >
      <div class="flex-1 flex items-center">
        {{ phone }}
      </div>
    </div>
    <div
      class="nav3 px-6 h-12 flex top-0 left-0 right-0 bg-white flex"
      :class="classList"
    >
      <nav class="flex-1 flex items-center h-12">
        <ul class="w-full flex">
          <li>
            <a
              href="/try3"
              class="hover:bg-giftbox p-2"
            >Home</a></li>
          <li>
            <a
              href="/products"
              class="hover:bg-giftbox p-2"
            >Products</a>
          </li>
        </ul>
      </nav>
      <div class="sm:hidden flex items-center h-12">
        <div @click="psg">Menu</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-try3 {
  @apply z-10;
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
import bb from 'bluebird'
import company from '@/company.json'
export default {
  data () {
    return {
      phone: company.phone,
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
        
        bb.delay(600).then(() => {
          // console.log('x')
          this.classList = ['active'];
        })
      }
    },
    psg() {
    this.$storage.set('test', { key: 'value' }, { ttl: 60 * 1000 })
    const data = this.$storage.get('test')
    console.log(data) // { key: 'value' }
    }
  }
}
</script>