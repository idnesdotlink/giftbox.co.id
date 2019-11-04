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
        style="height: 30px; background-color: blue; line-height: 30px;"
      >small</div>
      <div class="fxd">[bighead]</div>
      <div class="lo">who</div>
    </div>
  </Layout>
</template>

<style lang="postcss">
.fxd {
  height: 50px;
  background-color: rgba(17, 166, 211, 1);
  width: 100%;
  line-height: 50px;
}
.psg-bgt .fxd {
  position: fixed;
  top: 0;
  background-color: rgb(17, 166, 211, 0.5);
  color: blue;
}
.psg-bgt .lo {
  transform: translate(0, 50px);
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
    ov: ObserveVisibility// import('@/directives/observe-visibility').then(m => m.default)
  },
  data () {
    return {
      intersectionOptions: undefined,
      psg: false
    }
  },
  mounted () {
    console.log(this.$refs.wow.dataset)
    this.intersectionOptions = {
      root: null,
      rootMargin: '-.1px',
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
      if (!isVisible) this.$root.$el.parentNode.classList.add('psg-bgt')
      else this.$root.$el.parentNode.classList.remove('psg-bgt')
    }
  }
}
</script>