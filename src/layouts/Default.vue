<template>
  <div class="layout">
    <div
      style="width: 100px; height: 100px;"
      :style="stl2"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="lds-ripple"
      >
        <circle
          cx="50"
          cy="50"
          r="38.1705"
          fill="none"
          stroke="#93dbe9"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="21.1809"
          fill="none"
          stroke="#689cc5"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
    <div
      :style="stl1"
      class="main-content"
    >
      <header class="header">
        <g-image
          alt="Example image"
          src="~/giftbox-logo.png"
          width="415"
        />
        <nav class="nav">
          <g-link
            class="nav__link"
            to="/"
          >Home</g-link>
          <g-link
            class="nav__link"
            to="/about"
          >About</g-link>
          <g-link
            class="nav__link"
            to="/products"
          >Products</g-link>
          <g-link
            class="nav__link"
            to="/contact"
          >Contact</g-link>
          <g-link
            target="_blank"
            class="nav__link"
            to="/downloads/2019.pdf"
          >Catalogue</g-link>
        </nav>
      </header>
      <transition
        name="fade"
        appear
      >
        <div>
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

<script>
import { timeout } from 'bluebird'
export default {
  data () {
    return {
      stl1: {
        display: 'none'
      },
      stl2: {
        display: "block"
      }
    }
  },
  components: {
    Spinner: () => import('vue-loading-spinner').then(m => m.Jumper)
  },
  mounted () {
    this.$nextTick().then(() => {
      console.log('next tick');
      // timeout(10).then(
        // () => {
        this.stl1.display = 'block';
        this.stl2.display = 'none';
        // }
      // )

    })
  }
}
</script>
