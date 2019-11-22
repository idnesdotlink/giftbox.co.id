<template>
  <div class="papp">
    <div
      class="nvb"
      :class="{ 'nvb--hidden': !showNavbar }"
    >
      <transition name="fade">
        <div
          class="message"
          key="down"
          v-if="showNavbar"
        >
          <div class="text">
            Scroll Down to Hide Navbar
          </div>
          <svg
            class="arrow"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"
            />
          </svg>
        </div>
        <div
          class="message"
          key="up"
          v-else
        >
          <div class="text">
            Scroll Up to Show Navbar
          </div>
          <svg
            class="arrow"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"
            />
          </svg>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.papp {
  width: 100vw;
  height: 500vh;
  background: hsl(200, 50%, 90%);
}
.nvb {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.nvb.nvb--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
<script>
export default {
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
methods: {
onScroll () {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
}
}
}
</script>

