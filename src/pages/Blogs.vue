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
          <PostList
            v-for="edge in $page.allPost.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
          <Pager :info="$page.allPost.pageInfo" />
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
import Layout from "../layouts/Layout5";
import SiteHeader from '../components/SiteHeader';
import SiteFab from "../components/SiteFab";
import LayoutFooter from "../components/LayoutFooter";
import { Pager } from 'gridsome'
import PostList from "@/components/PostList"
export default {
  components: {
    Layout,
    PostList,
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

