<template>
  <Layout
    ref="test"
    :class="'brow'"
  >
    <div
      ref="wow"
      data-wow="hallo"
      style="height: 1000px; width: 100%;"
    >
      <div
        v-ov="psg"
        ref="head"
        class="top-header"
      >no telepon</div>
      <div class="bg-giftbox page-header w-full">
        <a
          href="/"
          class="home-link"
        ><img
            src="../../static/images/giftbox-logo.svg"
            class=""
          ></a>
        <nav>
          <ul class="flex www">
            <li>
              <a class="p-2 hover:bg-accent">Home</a>
            </li>
            <li>
              <a class="p-2 hover:bg-accent">Products</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="lo">
        <div style="height: 200px;">[hero]</div>
        <div>[content]</div>
      </div>
    </div>
    <!--  <template #pusing>
      test
   </template> -->
  </Layout>
</template>

<style lang="postcss">
.top-header {
  @apply mx-auto text-center;
  height: 30px;
  background-color: blue;
  line-height: 30px;
}
.page-header {
  @apply flex items-center justify-between;
  height: 60px;
  transition: all 0.3s;
}
.fixed-header .page-header {
  position: fixed;
  top: 0;
  background-color: rgb(17, 166, 211, 0.5);
  color: blue;
  height: 40px;
}
.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
  transition: all 0.3s;
}
.lo {
  margin-top: 0;
}
.fixed-header .lo {
  /* transform: translate(0, 50px);
  transition: transform; */
  margin-top: 50px;
}
.www li a::after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
}
</style>

<script>
import Layout from '../layouts/Layout5'
import {ObserveVisibility} from '@/directives/observe-visibility'
export default {
  components: {
    Layout
  },
  directives: {
    ov: ObserveVisibility
  },
  data () {
    return {
      intersectionOptions: undefined,
      psg: false
    }
  },
  mounted () {
    this.intersectionOptions = {
      root: null,
      rootMargin: '-1px',
      threshold: 0
    }
    this.psg = {
      callback: this.visibilityChanged,
      intersection: this.intersectionOptions,
    }
  },
  destroyed () {
    this.active = false
    this.intersectionOptions = undefined
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      if (!isVisible) this.$root.$el.parentNode.classList.add('fixed-header')
      else this.$root.$el.parentNode.classList.remove('fixed-header')
    }
  }
}
</script>