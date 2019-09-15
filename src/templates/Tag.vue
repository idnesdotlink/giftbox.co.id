<template>
  <Layout>
    <h2>Tag: {{ $page.tag.title }}</h2>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Product {
            title
            timeToRead
            date (format: "MMMM D, YYYY")
            path
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title
    }
  }
}
</script>