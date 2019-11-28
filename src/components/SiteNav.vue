<template>
  <div class="site-nav">
    <div class="container mx-auto">
      <nav>
        <ul>
          <li
            v-for="link in links"
            :key="link.text"
          >
            <g-link :to="link.to">{{ link.text }}</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Product",
          to: "/products"
        },
        {
          text: "Blogs",
          to: "/blogs"
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.site-nav {
  @apply w-full;
  position: relative;
  background: rgba(#fff, 0.7);
}
.site-nav::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #cccccc;
}
.site-nav ul {
  @apply flex;
}
.site-nav a {
  @apply block p-2 relative;
}
.site-nav a::after {
  @apply bg-gradient-nine-one;
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  height: 3px;
  z-index: 2;
  transition: width 0.3s;
}
.site-nav a:hover::after {
  width: 100%;
}
.fixed-header .site-nav {
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>