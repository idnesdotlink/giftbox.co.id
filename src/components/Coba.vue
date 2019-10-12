<template>
  <agile
    class="test"
    :slides-to-show="3"
  >
    <div
      v-for="product in products"
      :key="product.node.id"
    >{{ product.node.title }}
      <img
        :src="product.node.image.src"
        class="h-auto w-25"
      />
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

<style lang="scss">
.test.agile {
  .agile__actions {
    .agile__dots {
      .agile__dot {
        @apply mx-1;
        button {
          @apply border-giftbox border-2 border-solid w-4 h-4 rounded-full;
        }
      }
      .agile__dot--current {
        button {
          @apply border-giftbox border-2 border-accent rounded-full;
        }
      }
    }
  }
}
</style>