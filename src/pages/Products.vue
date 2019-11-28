<template>
  <Layout>
    <template #header="{hallo}">
      <SiteHeader />
    </template>
    <template #default>
      <div class="lo">
        <!-- <img
          v-parallax
          src="../../static/images/b3.jpg"
        /> -->
        <div
          class="hello"
          v-scroll-check
          style="min-height: 100vh;"
        >
          <h1>Products</h1>
          <ProductList
            v-for="edge in $page.allProduct.edges"
            :key="edge.node.id"
            :product="edge.node"
          />
          <Pager :info="$page.allProduct.pageInfo" />
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
  }
}
</script>

<style lang="postcss">
.fixed-header .lo {
  transform: translateY(40px);
}
</style>
