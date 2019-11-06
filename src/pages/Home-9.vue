<template>
  <layout>
  <template #coba>test</template>
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('../layouts/Layout6.vue')
  }
}
</script>
