<template>
  <Layout>
    <template #header="{hallo}">
      <div class="wow">
        <div
          class="page-header"
          v-ov="psg"
        >
          <div class="container mx-auto flex md:flex-row flex-col ct">
            <div class="logo">
              <a
                href="/"
                class="home-link"
              ><img
                  src="../../static/images/giftbox-logo3.svg"
                  class=""
                /></a>
            </div>
            <nav class="clnk">
              <div class="container mx-auto flex flex-row justify-start">
                <p class="lnk1">
                  Jl. BKR No.145, Kota Bandung, Jawa Barat.
                </p>
                <p class="lnk1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  @giftboxpromo
                </p>
                <p class="lnk1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  +62 878 123 456
                </p>
                <p class="lnk1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                  </svg>
                  Download Catalog
                </p>
              </div>
            </nav>
          </div>
        </div>
        <div class="page-nav">
          <div class="container mx-auto">
            <nav>
              <ul class="www">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </template>
    <template #default>
      <div class="lo">
        <Paralax>
          <img src="../../static/images/b3.jpg" />
        </Paralax>
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
  z-index: 10;
  position: relative;
}
.clnk {
}
.clnk svg {
  max-height: 30px;
}
.lnk1 {
  @apply text-giftbox px-6 py-1 lnk1 text-xs font-sans;
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
  @apply flex items-center justify-between w-full;
  height: auto;
}
.page-nav {
  @apply w-full;
  position: relative;
  background: rgba(#fff, 0.7);
}
.page-nav::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #cccccc;
}
.page-nav ul {
  @apply flex;
}
.page-nav a {
  @apply block p-2 relative;
}
.page-nav a::after {
}
.page-nav a:hover {
}
.page-nav a:hover::after {
  @apply bg-gradient-nine-one;
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  z-index: 2;
}
.page-header {
  @apply w-full;
  background: rgba(#fff, 0.7);
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
  z-index: 0;
}
.fixed-header .lo {
}
.logo {
  @apply w-auto h-full;
  min-height: 50px;
}
</style>

<script>
import Layout from "../layouts/Layout5";
import Slider1 from "@/components/Slider-1";
import LayoutFooter from "@/components/LayoutFooter";
import { ObserveVisibility } from "@/directives/observe-visibility";
import Paralax from '../components/Paralax';
export default {
  components: {
    Layout,
    Slider1,
    LayoutFooter,
    Paralax
  },
  directives: {
    ov: ObserveVisibility
  },
  data() {
    return {
      intersectionOptions: undefined,
      psg: false
    };
  },
  mounted() {
    this.intersectionOptions = {
      root: null,
      rootMargin: "-1px",
      threshold: 0
    };
    this.psg = {
      callback: this.visibilityChanged,
      intersection: this.intersectionOptions
    };
  },
  destroyed() {
    this.active = false;
    this.intersectionOptions = undefined;
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      console.log();
      if (!isVisible) this.$root.$el.parentNode.classList.add("fixed-header");
      else this.$root.$el.parentNode.classList.remove("fixed-header");
    }
  }
};
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
