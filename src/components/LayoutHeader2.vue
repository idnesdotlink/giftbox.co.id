<template>
  <header class="header-try px-6 h-16 flex items-center justify-between">
    <a
      href="/"
      class="home-link"
    ><img
        src="../../static/images/giftbox-logo.svg"
        class=""
      ></a>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.header-try {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  height: 64px;
  will-change: transform;
}
.active .header-try {
  height: 40px;
  background-color: rgba(37, 114, 255, 1);
  // animation: header-fixed 0.3s forwards;
}
.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
  transition: all 0.3s;
}
</style>