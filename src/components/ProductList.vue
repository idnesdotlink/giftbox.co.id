<template>
  <div class="product-list">
    <hr class="line" />
    <p
      class="date"
      v-html="product.date"
    />
    <g-image :src="product.image" />
    <h1
      class="title"
      v-html="product.title"
    />
    <p
      class="description"
      v-html="product.description"
    />
    <b> {{product.timeToRead}} min read </b> &nbsp;
    <g-link
      :to="product.path"
      class="read"
    >Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>