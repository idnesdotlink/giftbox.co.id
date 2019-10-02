<template>
  <div class="product-list">
    <g-image :src="product.image" />
    <h1
      class="title"
      v-html="product.title"
    />
    <p
      class="description"
      v-html="product.description"
    />
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