<template>
  <Layout>
    <template #header="{hallo}">
      <SiteHeader />
    </template>
    <Try #default>
      <div class="lo">
        <!-- <img
          v-parallax
          src="../../static/images/b3.jpg"
        /> -->
        <Slider1 :products="$page.allProduct.edges" />
        <div
          class="hello"
          v-scroll-check
          style="height: 100vh;"
        >[content]</div>
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
.fixed-header .lo {
  transform: translateY(40px);
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
  mounted () {
    console.log(this.hallo)
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
