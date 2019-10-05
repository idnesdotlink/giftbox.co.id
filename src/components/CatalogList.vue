<template>
  <div class="catalog-list">
    <hr class="line" />
    <h1
      class="title"
      v-html="catalog.title"
    />
    <g-link
      :to="catalog.path"
      class="read"
    >Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["catalog"],
};
</script>