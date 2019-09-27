<template>
  <Layout>
    <h1>Products</h1>
    <ProductList
      v-for="edge in $page.allProduct.edges"
      :key="edge.node.id"
      :product="edge.node"
    />
    <Pager :info="$page.allProduct.pageInfo" />
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
import { Pager } from 'gridsome'
import ProductList from "@/components/ProductList"
export default {
  components: {
    ProductList,
    Pager
  },
  metaInfo: {
    title: 'Products'
  }
}
</script>
