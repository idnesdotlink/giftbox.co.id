<template>
  <router-view />
</template>

<static-query>
query App {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
html,
body {
  @apply min-h-screen z-0 h-screen m-0 p-0;
  user-select: none;
}
#app {
}
</style>