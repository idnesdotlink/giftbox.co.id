<template>
  <div>
    <ClientOnly>
      <Spinner></Spinner>
      <TinySlider
        :mouse-drag="true"
        :loop="true"
        items="2"
        gutter="20"
        :rewind="true"
        :nav="true"
      >
        <div
          v-for="product in products"
          :key="product.node.id"
        >{{ product.node.title }}
          <g-image
            height="300"
            fit="contain"
            :src="product.node.image"
          />
        </div>
      </TinySlider>
    </ClientOnly>
  </div>
</template>

<script>
import "tiny-slider/dist/tiny-slider.css";
export default {
  components: {
    TinySlider: () => import('vue-tiny-slider'),
    Spinner: () => import('vue-loading-spinner').then(m => m.Jumper)
  },
  props: ['products'],
  mounted () {
    console.log(this.products)
  }
}
</script>

<style>
@charset 'UTF-8';
.tns-nav > [aria-controls] {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0 5px;
  border-radius: 50%;
  background: #ddd;
  border: 0;
}
.tns-controls [aria-controls] {
  font-size: 15px;
  margin: 0 5px;
  padding: 0 1em;
  height: 2.5em;
  color: #000;
  background: #66ccff;
  border-radius: 3px;
  border: 0;
}
</style>