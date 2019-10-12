<template>
  <div>
    <div>test</div>
    <agile
      v-cloak
      ref="slide"
      :slides-to-show="3"
    >
      <div
        v-for="product in products"
        :key="product.node.id"
      >title: {{ product.node.title }}
        <!-- <img
        v-lazy="product.node.image.src"
        class="h-auto w-25"
      /> -->
        <g-image
          :src="product.node.image.src"
          class="h-auto w-25"
        />
      </div>
    </agile>
  </div>
</template>

<script>
export default {
  props: ['products'],
  mounted () {
    this.$nextTick().then(
      () => {
        console.log('next tick')
      }
    )
    console.log(this.$refs.slide)
  }
}
</script>

<style lang="scss">
.agile {
  .agile__actions {
    .agile__dots {
      .agile__dot {
        @apply mx-1;
        button {
          @apply border-giftbox border-2 border-solid w-5 h-5 rounded-full;
        }
      }
      .agile__dot--current {
        button {
          @apply border-accent;
        }
      }
    }
  }
}
</style>
