<template>
  <div class="l5">
    <div
      class="scroll"
      ref="scroll"
    >
      <slot name="pusing" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick().then(() => {
    })
    this.$refs.scroll.addEventListener('scroll', this.scroll);
  },
  destroyed () {
    // this.$refs.scroll.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll () {
    }
  }
}
</script>

<style lang="postcss" scoped>
.l5 > div.scroll {
  height: 100vh;
  width: 100%;
  overflow: inherit;
}
</style>
