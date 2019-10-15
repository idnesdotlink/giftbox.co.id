<template>
  <header class="bg-giftbox px-6 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 header-home active">
    <a
      href="/"
      class="h-8"
    ><img
        src="../../static/images/giftbox-logo.svg"
        class="h-12"
      ></a>
    <a
      @click="wow()"
      class="sm:hidden absolute right-0 top-0 py-5 px-6 flex nav-toggle"
    >
      <img
        src="../../static/images/menu.svg"
        class="h-5"
      >
    </a>
  </header>
</template>

<script>
export default {
  methods: {
    wow () {
      this.$emit('clicknav')
    }
  }
}
</script>
