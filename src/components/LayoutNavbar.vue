<template>
  <nav class="flex items-center justify-around flex-wrap p-0">
    <g-link
      class="navbar-btn"
      to="/"
    >Home</g-link>
    <g-link
      class="navbar-btn"
      to="/products/"
    >Products</g-link>
    <g-link
      class="navbar-btn"
      to="/contact/"
    >Contact</g-link>
    <g-link
      class="navbar-btn"
      to="/catalogs/"
    >Catalogs</g-link>
  </nav>
</template>

<style lang="postcss">
.navbar-btn {
  @apply px-5 py-2 bg-alert text-white;
}
.navbar-btn:hover {
  @apply bg-accent;
}
</style>