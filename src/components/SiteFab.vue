<template>
  <fab
    autoHideDirection="down"
    fabItemAnimate="default"
    fabAliveAnimateBezier="ease"
    size="normal"
    fabAnimateBezier=".24,.97,.81,1.2"
    :mainBtnColor="'#3599DB'"
    class="index-fab"
  >
    <fab-item
      @clickItem="$router.push('/')"
      :idx="0"
      title="home"
      icon="https"
    />
    <fab-item
      v-for="(link, idxs) of links"
      :key="link"
      @clickItem="$router.push(link)"
      :idx="idxs+2"
      :title="link"
      icon="https"
    />
    <fab-item
      @clickItem="$router.back()"
      :idx="1"
      title="back"
      icon="https"
    />
  </fab>
</template>
<script>
import FAB from '@/components/fab/fab.vue'
import FABItem from '@/components/fab/fab-item.vue'
import FABContainer from '@/components/fab/fab-container.vue'
export default { 
  data () {
    return {
      links: [
        'products'
      ]
    }
  },
  components: {
    'fab': FAB,
    'fab-item': FABItem,
    'fab-container': FABContainer
  }
}
</script>
<style lang="postcss" scoped>
.index-fab {
  right: 10%;
  transition: all 0.5s cubic-bezier(0.18, 0.89, 0.58, 1.26);
}
</style>