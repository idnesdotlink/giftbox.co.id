<template>
  <Layout>
    <template #site-header="{hallo}">
      <SiteHeader :coba="hallo" />
    </template>
    <Try #default>
      <!-- <img
          v-parallax
          src="../../static/images/b3.jpg"
        /> -->
      <Slider1 :products="$page.allProduct.edges" />
      <div
        class="hello"
        v-scroll-check
        style="height: 100vh;"
      >
        <div class="hmmm">
          <img src="../../static/images/b3.jpg" />
        </div>
      </div>
    </Try>
    <template #footer>
      <LayoutFooter />
    </template>
    <template #fab>
      <SiteFab />
    </template>
  </Layout>
</template>

<style lang="postcss">
.hmmm {
  overflow: hidden;
  position: relative;
}
.hmmm::before {
  background: rgba(255, 255, 255, 0.2) none repeat scroll 0 0;
  content: " ";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
    translate3d(0px, -190%, 0px);
  transition: transform 0.6s ease 0s;
  width: 100%;
  z-index: 1;
}
.hmmm:hover::before {
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
    translate3d(0px, 190%, 0px);
}
</style>

<script>
import Layout from "../layouts/Layout5";
import Slider1 from "../components/Slider-1";
import LayoutFooter from "../components/LayoutFooter";
import { ObserveVisibility } from "../directives/observe-visibility";
import Paralax from '../components/Paralax';
import ParallaxDirective from '../directives/parallax/directive';
import SiteHeader from '../components/SiteHeader';
import SiteFab from "../components/SiteFab";
import Try from "../components/Try";
export default {
  components: {
    Layout,
    Slider1,
    LayoutFooter,
    Paralax,
    SiteHeader,
    SiteFab,
    Try
  },
  directives: {
    parallax: ParallaxDirective
  },
  methods: {
    clickItem (e) {
      console.log(e)
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
