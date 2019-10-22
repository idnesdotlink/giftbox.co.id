<template>
  <Layout
    class="try3 w-full h-screen relative"
    :class="classList"
  >
    <div class="try-hero3">
      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
        <Slider1 :products="$page.allProduct.edges" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allProduct {
    edges {
        node {
          id
          title
          image
        }
    }
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
allCustomer {
    totalCount
    edges {
      node {
        id
        title
        image
      }
    }
}
}
</page-query>

<script>
import Layout from '@/layouts/Layout-3'
import Slider1 from '@/components/Slider-1'
export default {
  components: {
    Layout,
    Slider1,
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
        // this.classList = []
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
        // this.classList = ['active']
      }
    }
  }
}
</script>
<style lang="scss">
.try-hero3 {
}
.active .try-hero3 {
  @apply pt-10;
}
.try-hero3 > div {
  height: 100%;
}
.try3 {
  z-index: 0;
}
</style>