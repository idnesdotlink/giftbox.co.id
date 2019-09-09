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
query Product($page: Int) {
  metaData {
    siteName
    siteDescription
  }
  allProduct(perPage: 1, page: $page) @paginate {
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
          description
          date (format: "D MMMM YYYY")
          path
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
