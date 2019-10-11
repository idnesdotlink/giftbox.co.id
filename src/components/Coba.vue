<template>
  <div>
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
  </div>
</template>

<script>
export default {
  components: {
    TinySlider: () => import('vue-tiny-slider')
  },
  props: ['products'],
  mounted () {
    console.log(this.products)
  }
}
</script>