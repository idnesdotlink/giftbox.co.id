<template>
  <div class="product-slider">
    <ClientOnly>
      <TinySlider
        :mouse-drag="true"
        :loop="false"
        items="4"
        gutter="20"
        :rewind="true"
        :nav="true"
        :controls="false"
      >
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
      </TinySlider>
    </ClientOnly>
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

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

.product-slider .tns-outer {
  padding: 0 !important;
  position: relative;
}
.product-slider .tns-outer [hidden] {
  display: none !important;
}
.product-slider .tns-outer [aria-controls],
.product-slider .tns-outer [data-action] {
  cursor: pointer;
}
.product-slider .tns-slider {
  transition: all 0s;
}
.product-slider .tns-slider > .tns-item {
  box-sizing: border-box;
}

.product-slider .tns-no-calc {
  position: relative;
  left: 0;
}
.product-slider .tns-gallery {
  position: relative;
  left: 0;
  min-height: 1px;
}
.product-slider .tns-gallery > .tns-item {
  position: absolute;
  left: -100%;
  transition: transform 0s, opacity 0s;
}
.product-slider .tns-horizontal.tns-subpixel {
  white-space: nowrap;
}
.product-slider .tns-horizontal.tns-subpixel > .tns-item {
  display: inline-block;
  vertical-align: top;
  white-space: normal;
}
.product-slider .tns-horizontal.tns-no-subpixel:after {
  content: "";
  display: table;
  clear: both;
}
.product-slider .tns-horizontal.tns-no-subpixel > .tns-item {
  float: left;
}
.product-slider .tns-horizontal.tns-carousel.tns-no-subpixel > .tns-item {
  margin-right: -100%;
}
.product-slider .tns-gallery > .tns-slide-active {
  position: relative;
  left: auto !important;
}
.product-slider .tns-gallery > .tns-moving {
  transition: all 0.25s;
}
.product-slider .tns-autowidth {
  display: inline-block;
}
.product-slider .tns-lazy-img {
  transition: opacity 0.6s;
  opacity: 0.6;
}
.product-slider .tns-lazy-img.tns-complete {
  opacity: 1;
}
.product-slider .tns-ah {
  transition: height 0s;
}
.product-slider .tns-ovh {
  overflow: hidden;
}
.product-slider .tns-visually-hidden {
  position: absolute;
  left: -10000em;
}
.product-slider .tns-transparent {
  opacity: 0;
  visibility: hidden;
}
.product-slider .tns-fadeIn {
  opacity: 1;
  filter: alpha(opacity=100);
  z-index: 0;
}
.product-slider .tns-normal,
.product-slider .tns-fadeOut {
  opacity: 0;
  filter: alpha(opacity=0);
  z-index: -1;
}
.product-slider .tns-vpfix {
  white-space: nowrap;
}
.product-slider .tns-vpfix > div,
.product-slider .tns-vpfix > li {
  display: inline-block;
}
.product-slider .tns-t-subp2 {
  margin: 0 auto;
  width: 310px;
  position: relative;
  height: 10px;
  overflow: hidden;
}
.product-slider .tns-t-ct {
  width: 2333.3333333%;
  width: calc(100% * 70 / 3);
  position: absolute;
  right: 0;
}
.product-slider .tns-t-ct:after {
  content: "";
  display: table;
  clear: both;
}
.product-slider .tns-t-ct > div {
  width: 1.4285714%;
  width: calc(100% / 70);
  height: 10px;
  float: left;
}
.product-slider .tns-nav {
  position: absolute;
  z-index: 10;
  bottom: 10px;
  left: 50%;
}

.product-slider .tns-nav > [aria-controls] {
  @apply h-5 p-0 w-5 rounded-full bg-transparent border-giftbox border-2 border-solid my-0 mx-1;
}
.product-slider .tns-nav .tns-nav-active {
  @apply border-accent;
}
.product-slider .tns-controls [aria-controls] {
  /* @apply z-10 position-absolute */
  font-size: 15px;
  margin: 0 5px;
  padding: 0 1em;
  height: 2.5em;
  color: #000;
  background: #66ccff;
  border-radius: 3px;
  border: 0;
  position: absolute;
  z-index: 10;
  top: 50%;
}
.product-slider .tns-nav > [aria-controls]:focus {
  outline: none;
}
.product-slider .tns-controls [data-controls="prev"] {
  left: 10px;
}
.product-slider .tns-controls [data-controls="next"] {
  right: 10px;
}
</style>