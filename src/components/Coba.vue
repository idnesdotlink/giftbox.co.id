<template>

  <agile>
    <div
      v-for="product in products"
      :key="product.node.id"
    >{{ product.node.title }}
      <img :src="product.node.image.src" />
    </div>
  </agile>

</template>

<script>
export default {
  props: ['products'],
  mounted () {
    this.products.forEach(node => {
      console.log(node)
    }); 
  }
}
</script>