<template>
  <div>
    <Jumper />
    <fab
      autoHideDirection="down"
      fabItemAnimate="default"
      fabAliveAnimateBezier="ease"
      :style="{ transform: democode[0].isShow ? 'translateY(-30px)' : ''}"
      size="normal"
      fabAnimateBezier=".24,.97,.81,1.2"
      :mainBtnColor="'#3599DB'"
      class="index-fab"
    >
      <fab-item
        @clickItem="clickItem"
        :idx="0"
        title="https"
        icon="https"
      />
      <fab-item
        @clickItem="clickItem"
        :idx="2"
        title="https"
        icon="https"
      />
    </fab>
  </div>
</template>

<script>
import Jumper from '@/components/Jumper'
import FAB from '@/components/fab/fab.vue'
import FABItem from '@/components/fab/fab-item.vue'
import FABContainer from '@/components/fab/fab-container.vue'
export default {
  components: {
    Jumper,
    'fab': FAB,
    'fab-item': FABItem,
    'fab-container': FABContainer
  },
  data () {
    return {
      democode: [
        {
          isShow: false
        }
      ]
    }
  },
  methods: {
    clickItem (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
.index-fab {
  right: 10%;
  transition: all 0.5s cubic-bezier(0.18, 0.89, 0.58, 1.26);
}
</style>