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

<style lang="scss">
html,
body {
  user-select: none;
}
html,
body,
#app {
  @apply overflow-hidden min-h-screen z-0;
}
</style>