<template>
  <Layout>
    <h1>Products</h1>
    <ProductList
      v-for="edge in $page.allPost.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query>
query {
  metaData {
    siteName
    siteDescription
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
