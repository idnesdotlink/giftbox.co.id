<template>
  <div>
    <slot
      name="header"
      :hallo="'hallo'"
    />
    <slot name="default" />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
div.scroll {
  height: 100vh;
  width: 100%;
  overflow: inherit;
}
</style>
