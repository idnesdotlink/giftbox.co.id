<template>
  <Layout>
    <template #header="{hallo}">
      <div
        v-ov="psg"
        ref="head"
        class="top-header"
      >
        <p>no telepon: {{ hallo }}</p>
      </div>
      <div class="page-header">
        <a
          href="/"
          class="home-link"
        ><img
            src="../../static/images/giftbox-logo.svg"
            class=""
          ></a>
        <nav>
          <ul class="flex www">
            <li>
              <a class="p-2 hover:bg-accent">Home</a>
            </li>
            <li>
              <a class="p-2 hover:bg-accent">Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </template>
    <template #default>
      <div class="lo">
        <Slider1 :products="$page.allProduct.edges" />
        <div style="height: 500px;">[content]</div>
      </div>
    </template>
    <template #footer>
      <LayoutFooter />
    </template>
  </Layout>
</template>

<style lang="postcss">
.top-header {
  @apply mx-auto text-center;
  height: 30px;
  background-color: blue;
  line-height: 30px;
}
.page-header {
  @apply flex items-center justify-between bg-white w-full;
  border-bottom: 1px solid #ccc;
  height: 60px;
  transition: all 0.3s;
}
.fixed-header .page-header {
  position: fixed;
  top: 0;
  height: 40px;
  z-index: 1;
}
.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
  transition: all 0.1s;
}
.lo {
  margin-top: 0;
}
.fixed-header .lo {
  /* transform: translate(0, 50px);
  transition: transform; */
  margin-top: 50px;
}
.www li a::after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
}
</style>

<script>
import Layout from '../layouts/Layout5'
import Slider1 from '@/components/Slider-1'
import LayoutFooter from '@/components/LayoutFooter'
import {ObserveVisibility} from '@/directives/observe-visibility'
export default {
  components: {
    Layout,
    Slider1,
    LayoutFooter
  },
  directives: {
    ov: ObserveVisibility
  },
  data () {
    return {
      intersectionOptions: undefined,
      psg: false
    }
  },
  mounted () {
    this.intersectionOptions = {
      root: null,
      rootMargin: '-1px',
      threshold: 0
    }
    this.psg = {
      callback: this.visibilityChanged,
      intersection: this.intersectionOptions,
    }
  },
  destroyed () {
    this.active = false
    this.intersectionOptions = undefined
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      console.log()
      if (!isVisible) this.$root.$el.parentNode.classList.add('fixed-header')
      else this.$root.$el.parentNode.classList.remove('fixed-header')
    }
  }
}
</script>

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