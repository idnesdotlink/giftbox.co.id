<template>
  <div :class="'layout-4'">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'layout-4',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.layout-4 {
  @apply w-screen h-screen flex flex-col;
}
</style>