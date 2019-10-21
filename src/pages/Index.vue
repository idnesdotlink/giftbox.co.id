<template>
  <div>
    <h1>Index</h1>
    <nav>
      <ul class="flex flex-col">
        <li
          v-for="link of links"
          :key="link"
        >
          <g-link
            class="hover:text-giftbox"
            :to="link"
          >{{ link }}</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        '/home-1',
        '/home-2',
        '/home-3',
        '/products',
        '/404'
      ]
    }
  }
}
</script>