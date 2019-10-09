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

<style lang="scss">
@tailwind base;

@tailwind components;

@tailwind utilities;

.product-slider {
  .tns-outer {
    padding: 0 !important;
    position: relative;
  }
  .tns-outer [hidden] {
    display: none !important;
  }
  .tns-outer [aria-controls],
  .tns-outer [data-action] {
    cursor: pointer;
  }
  .tns-slider {
    transition: all 0s;
  }
  .tns-slider > .tns-item {
    box-sizing: border-box;
  }

  .tns-no-calc {
    position: relative;
    left: 0;
  }
  .tns-gallery {
    position: relative;
    left: 0;
    min-height: 1px;
  }
  .tns-gallery > .tns-item {
    position: absolute;
    left: -100%;
    transition: transform 0s, opacity 0s;
  }
  .tns-horizontal.tns-subpixel {
    white-space: nowrap;
  }
  .tns-horizontal.tns-subpixel > .tns-item {
    display: inline-block;
    vertical-align: top;
    white-space: normal;
  }
  .tns-horizontal.tns-no-subpixel:after {
    content: "";
    display: table;
    clear: both;
  }
  .tns-horizontal.tns-no-subpixel > .tns-item {
    float: left;
  }
  .tns-horizontal.tns-carousel.tns-no-subpixel > .tns-item {
    margin-right: -100%;
  }
  .tns-gallery > .tns-slide-active {
    position: relative;
    left: auto !important;
  }
  .tns-gallery > .tns-moving {
    transition: all 0.25s;
  }
  .tns-autowidth {
    display: inline-block;
  }
  .tns-lazy-img {
    transition: opacity 0.6s;
    opacity: 0.6;
  }
  .tns-lazy-img.tns-complete {
    opacity: 1;
  }
  .tns-ah {
    transition: height 0s;
  }
  .tns-ovh {
    overflow: hidden;
  }
  .tns-visually-hidden {
    position: absolute;
    left: -10000em;
  }
  .tns-transparent {
    opacity: 0;
    visibility: hidden;
  }
  .tns-fadeIn {
    opacity: 1;
    filter: alpha(opacity=100);
    z-index: 0;
  }
  .tns-normal,
  .tns-fadeOut {
    opacity: 0;
    filter: alpha(opacity=0);
    z-index: -1;
  }
  .tns-vpfix {
    white-space: nowrap;
  }
  .tns-vpfix > div,
  .tns-vpfix > li {
    display: inline-block;
  }
  .tns-t-subp2 {
    margin: 0 auto;
    width: 310px;
    position: relative;
    height: 10px;
    overflow: hidden;
  }
  .tns-t-ct {
    width: 2333.3333333%;
    width: calc(100% * 70 / 3);
    position: absolute;
    right: 0;
  }
  .tns-t-ct:after {
    content: "";
    display: table;
    clear: both;
  }
  .tns-t-ct > div {
    width: 1.4285714%;
    width: calc(100% / 70);
    height: 10px;
    float: left;
  }
  .tns-nav {
    @apply absolute z-10 bottom-0;
    left: 50%;
    // z-index: 10;
    // bottom: 10px;
    // left: 50%;
  }

  .tns-nav > [aria-controls] {
    @apply h-5 p-0 w-5 rounded-full bg-transparent border-giftbox border-2 border-solid my-0 mx-1;
  }
  .tns-nav .tns-nav-active {
    @apply border-accent;
  }
  .tns-controls [aria-controls] {
    @apply z-10 absolute mx-0 my-2 px-0 py-1 h-1 border-0 rounded;
    // font-size: 15px;
    // margin: 0 5px;
    // padding: 0 1em;
    // height: 2.5em;
    // color: #000;
    // background: #66ccff;
    // border-radius: 3px;
    // border: 0;
    // position: absolute;
    // z-index: 10;
    top: 50%;
  }
  .tns-nav > [aria-controls]:focus {
    outline: none;
  }
  .tns-controls [data-controls="prev"] {
    left: 10px;
  }
  .tns-controls [data-controls="next"] {
    right: 10px;
  }
}
</style>