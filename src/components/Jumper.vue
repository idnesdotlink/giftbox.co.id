<template>
  <nav
    class="jumper"
    :class="classList"
    @mouseenter="mouseenter()"
    @mouseleave="mouseleave()"
  >
    <ul>
      <li
        v-for="link of links"
        :key="link.link"
      >
        <g-link :to="link.link">{{ link.title }}</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      classList: [],
      links: [
        {title: "1", link: '/home-1'},
        {title: "2", link: '/home-2'},
        {title: "3", link: '/home-3'},
        {title: "4", link: '/home-4'},
        {title: "5", link: '/home-5'},
        {title: "6", link: '/home-6'},
        {title: "products", link: '/products'},
        {title: "catalogs", link: '/catalogs'},
        {title: "contact", link: '/contact'},
        {title: "404", link: '/404'}
      ]
    }
  },
  methods: {
    mouseenter () {
      this.classList = ['expanded']
    },
    mouseleave () {
      this.classList = []
    }
  }
}
</script>

<style lang="postcss">
/* .jumper {
  @apply absolute right-0 bottom-0 w-10 h-10;
  & ul {
    @apply flex flex-row absolute hidden w-0 h-0 left-0;
    transition: left;
    & li {
      @apply min-h-full min-w-full;
      & a {
        text-decoration-line: underline;
      }
    }
    & li:hover {
      @apply text-giftbox;
    }
  }
}
.jumper.expanded {
  & ul {
    @apply flex flex-row w-full h-full;
    left: -150px;
  }
} */
</style>
