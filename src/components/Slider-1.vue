<template>
  <agile
    v-cloak
    :autoplay="true"
    ref="slide"
    class="coba-slide-class"
    :slides-to-show="1"
  >
    <div
      v-for="product in products"
      :key="product.node.id"
    >
      <p class="slide-text">{{ product.node.title }}</p>
      <!-- <img
        v-lazy="product.node.image.src"
        class="h-auto w-25"
      /> -->
      <g-image
        :src="product.node.image.src"
        class="slide-image"
        height="200"
        width="200"
      />
    </div>
    <template #prevButton>prev</template>
    <template #nextButton>next</template>
  </agile>
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

<style lang="postcss">
.agile {
  & .agile__list {
    & .agile__track {
      & .agile__slides {
        & .agile__slide {
          & .slide-text {
            position: absolute;
          }
          & .slide-image {
            width: 300px;
          }
        }
      }
    }
  }
  & .agile__actions {
    & .agile__nav-button {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      height: 100%;
      position: absolute;
      top: 0;
      transition-duration: 0.3s;
      width: 80px;
    }
    & .agile__nav-button:hover {
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
    & .agile__nav-button--prev {
      left: 0;
    }
    & .agile__nav-button--next {
      right: 0;
    }
    & .agile__dots {
      bottom: 10px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      & .agile__dot {
        margin: 0 10px;
        & button {
          background-color: blue;
          border: 1px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          height: 10px;
          font-size: 0;
          line-height: 0;
          margin: 0;
          padding: 0;
          transition-duration: 0.3s;
          width: 10px;
        }
      }
      & .agile__dot--current {
        & button {
          @apply border-accent;
        }
      }
    }
  }
}
</style>
