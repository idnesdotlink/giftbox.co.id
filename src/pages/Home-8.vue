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
                  <SvgInstagram />
                  @giftboxpromo
                </p>
                <p class="lnk1">
                  <SvgWhatsapp />
                  +62 878 123 456
                </p>
                <p class="lnk1">
                  <SvgDownload />
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
        <!-- <Paralax>
          <img src="../../static/images/b3.jpg" />
        </Paralax> -->
        <img
          v-parallax
          src="../../static/images/b3.jpg"
        />
        <Slider1 :products="$page.allProduct.edges" />
        <div
          class="hello"
          v-scroll-check
          style="height: 500px;"
        >[content]</div>
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
  @apply bg-gradient-nine-one;
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  height: 3px;
  z-index: 2;
  transition: width 0.3s;
}
.page-nav a:hover::after {
  width: 100%;
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
  transform: translateY(40px);
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
import { ObserveVisibility } from "../directives/observe-visibility";
import Paralax from '../components/Paralax';
import SvgInstagram from '../components/SvgInstagram';
import SvgWhatsapp from '../components/SvgWhatsapp';
import SvgDownload from '../components/SvgDownload';
import ParallaxDirective from '../directives/parallax/directive'
export default {
  components: {
    Layout,
    Slider1,
    LayoutFooter,
    Paralax,
    SvgInstagram,
    SvgWhatsapp,
    SvgDownload
  },
  directives: {
    ov: ObserveVisibility,
    parallax: ParallaxDirective
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
