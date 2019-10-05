<template>
  <Layout>
    <br>
    <div
      @click="goBack()"
      class="link"
    > &larr; Go Back</div>
    <div class="catalog-title">
      <h1>{{$page.catalog.title}}</h1>
    </div>
    <g-image :src="$page.catalog.image" />
  </Layout>
</template>

<script>
export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<page-query>
query Catalog ($path: String!) {
   catalog: catalog (path: $path) {
    id
    title
    image
  }
}
</page-query>

<style>
.catalog-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
}

.catalog-date {
  font-size: 16px;
  font-weight: 400;
}

.catalog-content {
  font-size: 20px;
}
</style>