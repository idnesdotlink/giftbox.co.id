<template>
  <Layout>
    <h1>Products</h1>
    <ProductList
      v-for="edge in $page.allProduct.edges"
      :key="edge.node.id"
      :product="edge.node"
    />
  </Layout>
</template>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allProduct {
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
}
</page-query>

<script>
import ProductList from "@/components/ProductList"
export default {
  components: {
    ProductList
  },
  metaInfo: {
    title: 'Products'
  }
}
</script>
