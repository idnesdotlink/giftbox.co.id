<template>
  <Layout>
    <h1>Catalogs</h1>
    <CatalogList
      v-for="edge in $page.allCatalog.edges"
      :key="edge.node.id"
      :catalog="edge.node"
    />
    <Pager :info="$page.allCatalog.pageInfo" />
  </Layout>
</template>

<page-query>
query Catalogs($page: Int) {
  metadata {
    siteName
    siteDescription
  }
  allCatalog(perPage: 3, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          image
          path
        }
      }
    }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import CatalogList from "@/components/CatalogList"
export default {
  components: {
    CatalogList,
    Pager
  },
  metaInfo: {
    title: 'Catalogs'
  }
}
</script>
