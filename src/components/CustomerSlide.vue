<template>
  <div class="customer-slider">
    [Customer Slider]
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['customers'],
  mounted () {
    console.log(this.customers)
  }
}
</script>

<style lang="scss">
@charset 'UTF-8';
.customer-slider {
  .tns-outer {
    padding: 0 !important;
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

  .tns-nav > [aria-controls] {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0 5px;
    border-radius: 50%;
    background: #ddd;
    border: 0;
  }
  .tns-controls {
    @apply mx-2;
  }
  .tns-controls [aria-controls] {
    @apply h-6 py-0 px-2 text-white bg-giftbox mx-2 my-0 text-sm rounded border-0;
  }
  .tns-controls [aria-controls]:focus {
    @apply outline-none;
  }
}
</style>