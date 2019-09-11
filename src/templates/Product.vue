<template>
  <Layout>
    <br>
    <g-link
      to="/"
      class="link"
    > &larr; Go Back</g-link>
    <div class="product-title">
      <h1>{{$page.product.title}}</h1>
      <p class="product-date"> {{ $page.product.date}} | {{$page.product.timeToRead}} min read</p>
    </div>
    <g-link
      :to="tag.path"
      v-for="tag in $page.product.tags"
      :key="tag.id"
      class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300"
    >
      {{ tag.title }}
    </g-link>
    <div class="product-content">
      <p v-html="$page.product.content" />
    </div>
  </Layout>
</template>

<page-query>
query Product ($path: String!) {
   product: product (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      title
      path
    }
  }
}
</page-query>

<style>
.product-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: "Stylish";
}

.product-date {
  font-size: 16px;
  font-weight: 400;
}

.product-content {
  font-size: 20px;
}
</style>