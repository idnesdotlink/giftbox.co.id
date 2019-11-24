<template>
  <header class="header-try px-6 h-16 flex items-center justify-between">
    <a
      href="/"
      class="home-link"
    ><img
        src="../../static/images/giftbox-logo.svg"
        class=""
      ></a>
    <nav>
      <ul class="flex www">
        <li>
          <a class="p-2 hover:bg-accent">Home</a>
        </li>
        <li>
          <a class="p-2 hover:bg-accent">Products</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.header-try {
  @apply absolute top-0 left-0 right-0 h-16 z-10;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  will-change: transform;
}
.active .header-try {
  @apply fixed h-10;
  /* height: 40px; */
  background-color: rgba(37, 114, 255, 0.5);
  /* animation: header-fixed 0.3s forwards; */
}
.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
  transition: all 0.3s;
}
.www li a::after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
}
</style>