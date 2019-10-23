<template>
  <Layout>
    <header class="">
      <div>Title</div>
      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">nav</div>
    </header>
    <div class="main-content">
      <div style="height: 600px;">
        content
      </div>
    </div>
    <footer>Footer</footer>
  </Layout>
</template>

<script>
import Layout from '@/layouts/Layout-4'
export default {
  data () {
    return {
      intersectionOptions: {

      }
    }
  },
  components: {
    Layout
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === 'out' && direction === 'top') {
        console.log('out to top')
      }
      if (going === 'in' && direction === 'bottom') {
        console.log('in to bottom')
      }
    }
  }
}
</script>

<style lang="scss">
.main-content {
  @apply flex-1;
}
</style>