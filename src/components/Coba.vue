<template>
  <agile>
    <div
      v-for="product in products"
      :key="product.node.id"
    >{{ product.node.title }}
      <g-image
        height="200"
        fit="contain"
        :src="product.node.image"
      />
    </div>
  </agile>
</template>

<script>
export default {
  props: ['products']
}
</script>