<script>
export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<page-query>
query Product ($path: String!) {
   product: product (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      title
      path
    }
    image
    sliders
  }
}
</page-query>

<style>
.product-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
}

.product-date {
  font-size: 16px;
  font-weight: 400;
}

.product-content {
  font-size: 20px;
}
</style>



<template>
  <Layout>
    <template #header="{hallo}">
      <SiteHeader />
    </template>
    <template #default>
      <div class="lo">
    <br>
    <div
      @click="goBack()"
      class="link"
    > &larr; Go Back</div>
    <div class="product-title">
      <h1>{{$page.product.title}}</h1>
    </div>
    <g-link
      :to="tag.path"
      v-for="tag in $page.product.tags"
      :key="tag.id"
      class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300"
    >
      {{ tag.title }}
    </g-link>
    <p
      v-for="slider in $page.product.sliders"
      :key="slider"
    > {{ slider }} </p>
    <g-image :src="$page.product.image" />
    <div class="product-content">
      <p v-html="$page.product.content" />
    </div>
      </div>
    </template>
    <template #footer>
      <LayoutFooter />
    </template>
    <template #fab>
      <SiteFab />
    </template>
  </Layout>

</template>

<page-query>
query Products($page: Int) {
  metadata {
    siteName
    siteDescription
  }
  allProduct(perPage: 3, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          excerpt
          date (format: "D MMMM YYYY")
          path
          image
        }
      }
    }
}
</page-query>

<script>
import Layout from "../layouts/Layout5";
import SiteHeader from '../components/SiteHeader';
import SiteFab from "../components/SiteFab";
import LayoutFooter from "../components/LayoutFooter";
import { Pager } from 'gridsome'
import ProductList from "@/components/ProductList"
export default {
  components: {
    Layout,
    ProductList,
    Pager,
    SiteHeader,
    SiteFab,
    LayoutFooter
  },
  metaInfo: {
    title: 'Products'
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="postcss">
.fixed-header .lo {
  transform: translateY(40px);
}
</style>
