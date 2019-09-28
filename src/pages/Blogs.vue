<template>
  <Layout>
    <h1>Post</h1>
    <PostList
      v-for="edge in $page.allPost.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
    <Pager :info="$page.allPost.pageInfo" />
  </Layout>
</template>

<page-query>
query Products($page: Int) {
  metadata {
    siteName
    siteDescription
  }
  allPost(perPage: 1, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date
          timeToRead
          path
          description
        }
      }
    }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import PostList from "@/components/PostList"
export default {
  components: {
    PostList,
    Pager
  },
  metaInfo: {
    title: 'Blogs'
  }
}
</script>
