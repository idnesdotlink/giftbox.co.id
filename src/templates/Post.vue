<template>
  <Layout>
    <template #header="{hallo}">
      <SiteHeader />
    </template>
    <template #default>
      <div class="lo">
        <g-link
          to="/"
          class="link"
        > &larr; Go Back</g-link>
        <div class="post-title">
          <h1>{{$page.post.title}}</h1>
          <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
        </div>
        <div class="post-content">
          <p v-html="$page.post.content" />
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
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
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
.post-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
}

.post-date {
  font-size: 16px;
  font-weight: 400;
}

.post-content {
  font-size: 20px;
}
</style>
