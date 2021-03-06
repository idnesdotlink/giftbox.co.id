<template>
  <div
    ref="fab"
    class="fab-main-container"
  >
    <transition :name="'fab-' + fabAutoHideAnimateModel">
      <fab-container
        @click.native="openMenu"
        v-if="hidden"
        class="fab"
        data-outside="true"
        :class="'fab-size-' + size"
        :style="fabClass"
      >
        <transition :name="computedTransitionName">
          <i
            v-if="iconType === 'MaterialDesign'"
            data-outside="true"
            :key="activeIcon === icon ? icon : active"
            :class="{ 'fab-active' : active }"
            class="vue-fab-material-icons material-icons"
          >{{activeIcon === icon ? icon : active ? activeIcon : icon}}</i>
        </transition>
        <i
          v-if="iconType === 'iconfont'"
          @click.stop="openMenu"
          class="icons iconfont vue-fab-material-icons vue-fab-iconfont-icons"
          style="font-size: 15px"
          :class="[active ? 'fab-active' : '', icon ]"
          data-outside="true"
        >
        </i>
      </fab-container>
    </transition>
    <div
      v-click-outside="clickoutside"
      class="fab-item-container"
      :class="'fab-size-' + size"
    >
      <slot></slot>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import FABContainer from './fab-container'
import { handleClass, listenClick } from '@/utils/fab'

export default {
  name: 'vue-fab',
  components: {
    'fab-container': FABContainer
  },
  directives: {
    'click-outside': () => {
      return {
        bind: (el, binding, vnode) => {
      el.__clickOutside__ = listenClick
      handleSafariBodyClickNotWorkEvent(listenClick, testSafariBrower(), {
        el, binding
      })
    }
      }

    }
  },
  props: {
    icon: {
      type: String,
      default: 'add'
    },
    mainBtnColor: {
      type: String,
      default: '#E64C3B'
    },
    activeIcon: {
      type: String,
      default: 'add'
    },
    iconType: {
      type: String,
      default: 'MaterialDesign'
    },
    shadow: {
      type: Boolean,
      default: true
    },
    autoHideThreshold: {
      type: Number,
      default: 50
    },
    fabAutoHideAnimateModel: {
      type: String,
      default: 'default'
    },
    fabItemAnimate: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    clickAutoClose: {
      type: Boolean,
      default: true
    },
    fabAnimateBezier: {
      type: String,
      default: 'linear'
    },
    fabAliveAnimateBezier: {
      type: String,
      default: '.16,1.01,.61,1.2'
    },
    zIndex: {
      type: Number,
      default: 5
    },
    scrollAutoHide: {
      type: Boolean,
      default: true
    },
    globalOptions: {
      type: Object,
      default: () => {
        return {
          spacing: 40,
          delay: 0.1
        }
      }
    },
    autoHideDirection: {
      type: String,
      default: 'up'
    }
  },
  data () {
    return {
      handleClass: handleClass,
      active: false,
      scrollTop: 0,
      hidden: true,
      scrollDirection: null,
      changeDirectionScrollTop: 0,
      touchEventInfo: {
        startY: 0,
        offsetY: 0
      }
    }
  },
  watch: {
    hidden: function (val) {
      if (!val && this.active) {
        this.active = false
      }
    }
  },
  computed: {
    computedTransitionName: function () {
      if (this.activeIcon === this.icon) {
        return 'fab-icon'
      } else {
        return this.active ? 'fab-active-icon' : 'fab-icon'
      }
    },
    overflowThreshold: function () {
      return (Math.abs(this.touchEventInfo.offsetY) > this.autoHideThreshold)
    },
    fabClass: function () {
      return {
        transitionTimingFunction: /,/.test(this.fabAnimateBezier) ? `cubic-bezier(${this.fabAnimateBezier})` : this.fabAnimateBezier,
        zIndex: this.zIndex,
        background: this.mainBtnColor,
        boxShadow: this.shadow ? '0px 2px 8px #666' : ''
      }
    },
    notChangeHideStatus: function () {
      if (this.autoHideDirection === 'up') {
        return (this.scrollDirectionUpAndHidden || this.scrollDirectionDownAndShow)
      } else {
        return (this.scrollDirectionUpAndShow || this.scrollDirectionDownAndHidden)
      }
    },
    scrollDirectionUpAndHidden: function () {
      return this.scrollDirection === 'up' && this.hidden === true
    },
    scrollDirectionDownAndShow: function () {
      return this.scrollDirection === 'down' && this.hidden === false
    },
    scrollDirectionUpAndShow: function () {
      return this.scrollDirection === 'up' && this.hidden === false
    },
    scrollDirectionDownAndHidden: function () {
      return this.scrollDirection === 'down' && this.hidden === true
    }
  },
  methods: {
    clickoutside: function (e) {
      this.active = false
    },
    testPCMobile: function () {
      if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true
      } else {
        return false
      }
    },
    onOffFab: function (onOff) {
      this.hidden = onOff
    },
    openMenu: function () {
      this.$children.length > 1 ? this.active = !this.active : this.$emit('clickMainBtn')
    },
    recordScrollTopByChangeDirection: function (_scrollTop) {
      let direction = this.checkDirection(_scrollTop)
      this.scrollTop = _scrollTop
      if (this.scrollDirection !== direction) {
        this.changeDirectionScrollTop = _scrollTop
        this.scrollDirection = direction
      }
    },
    scrollerEventListener: function () {
      let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.recordScrollTopByChangeDirection(_scrollTop)
      let offset = Math.abs(_scrollTop - this.changeDirectionScrollTop)
      if (this.computedOffsetOver(offset)) return false
      if (this.notChangeHideStatus) return false
      this.hidden = this.computedShowHideByOffset()
      return true
    },
    computedOffsetOver: function (offset) {
      return (offset < this.autoHideThreshold)
    },
    computedShowHideByOffset () {
      return this.scrollDirection === this.autoHideDirection
    },
    checkDirection: function (_scrollTop) {
      return _scrollTop > this.scrollTop ? 'up' : 'down'
    },
    removeScrollAutoHideListener: function () {
      document.removeEventListener('scroll', this.scrollerEventListener)
    },
    listenTouchEvent: function () {
      document.addEventListener('touchstart', this.listenTouchStart)
      document.addEventListener('touchmove', this.listenTouchMove)
    },
    removeTouchEvent: function () {
      document.removeEventListener('touchstart', this.listenTouchStart)
      document.removeEventListener('touchmove', this.listenTouchMove)
    },
    listenTouchStart: function (e) {
      this.touchEventInfo.startY = e.touches[0].clientY
    },
    listenTouchMove: function (e) {
      this.touchEventInfo.offsetY = e.touches[0].clientY - this.touchEventInfo.startY
      if (!this.overflowThreshold) return
      if (this.touchEventInfo.offsetY > 0) {
        this.hidden = this.autoHideDirection !== 'up'
      } else {
        this.hidden = this.autoHideDirection === 'up'
      }
      this.touchEventInfo.offsetY = 0
    },
    unloadEvent: function () {
      if (this.scrollAutoHide) {
        if (this.testPCMobile()) {
          this.removeTouchEvent()
        } else {
          this.removeScrollAutoHideListener()
        }
      }
    },
    initTouchEvent: function () {
      if (this.scrollAutoHide) {
        if (this.testPCMobile()) {
          this.listenTouchEvent()
        } else {
          document.addEventListener('scroll', this.scrollerEventListener)
        }
      }
    }
  },
  mounted () {
    this.initTouchEvent()
  },
  activated () {
    this.initTouchEvent()
  },
  destroyed () {
    this.unloadEvent()
  },
  deactivated () {
    this.unloadEvent()
  }
}
</script>

<style lang="less" scoped>
@import "./less/index.less";
.fab-main-container {
  position: fixed;
  right: 15%;
  z-index: 9999;
  bottom: 15%;
  overflow: initial;
  box-sizing: border-box;
}

.fab {
  box-sizing: border-box;
  .flex-center();
  .absolute();
  border-radius: 50%;
  color: white;
  cursor: pointer;
  padding: 8px;
  .transition();
  i {
    font-size: 1.5em;
  }
}

.fab-active {
  transform: rotate(45deg);
}

.fab-item-container {
  box-sizing: border-box;
  .absolute();
}
</style>
