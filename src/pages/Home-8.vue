<template>
  <Layout>
    <template #header="{hallo}">
      <div class="wow">
        <div
          class="page-header"
          v-ov="psg"
        >
          <div class="container mx-auto flex flex-row ct">
            <a
              href="/"
              class="home-link"
            ><img
                src="../../static/images/giftbox-logo.svg"
                class=""
              ></a>
            <nav class="clnk">
              <div class="container mx-auto flex flex-row justify-start">
                <p class="lnk1"><i class="fab fa-instagram"></i> @giftboxpromo</p>
                <p class="lnk1"><i class="fab fa-whatsapp font-medium"></i> +62 878 123 456</p>
                <p class="lnk1">Download Catalog</p>
              </div>
            </nav>
          </div>
        </div>
        <div class="page-nav">
          <div class="container mx-auto">
            <nav>
              <ul class="www">
                <li>
                  <a class="p-2">Home</a>
                </li>
                <li>
                  <a class="p-2">Products</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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
.wow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
}
.clnk {
}
.lnk1 {
  @apply text-giftbox px-6 py-1 lnk1 text-sm font-sans;
}
.lnk1:hover {
  @apply text-accent;
}
.clnk .lnk1 {
  @apply;
  border-right: 1px solid #ccc;
}
.clnk .lnk1:last-child {
  border-right: 0 none;
}
.top-header {
  @apply mx-auto text-center;
  height: 30px;
  background-color: blue;
  line-height: 30px;
}
.ct {
  @apply flex items-center justify-between bg-white w-full;
  height: 60px;
}
.page-nav {
  @apply w-full text-giftbox bg-white;
  margin-bottom: 30px;
}
.page-header {
  @apply w-full bg-white;
  margin-top: 5px;
}
.page-header::before {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5px;
  content: " ";
  background: blue;
}
.fixed-header .page-nav {
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
}
.lo {
  margin-top: 0;
}
.fixed-header .lo {
  margin-top: 50px;
}
.www {
  @apply flex;
}
.www a:hover {
  @apply bg-accent text-white;
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