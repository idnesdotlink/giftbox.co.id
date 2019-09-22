<template>
  <Layout>
    <ClientOnly>
      <Slide :products="$page.allProduct.edges"></Slide>
    </ClientOnly>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <About />

  </Layout>
</template>

<script>
import PostList from "@/components/PostList"
import Slide from "@/components/Slide"
import About from "@/components/About"
export default {
  components: {
    PostList,
    Slide,
    About
  },
  metaInfo: {
    title: ''
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allProduct {
    edges {
        node {
          id
          title
          image
        }
    }
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

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
