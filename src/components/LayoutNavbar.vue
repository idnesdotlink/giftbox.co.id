<template>
  <nav class="nav flex items-center justify-around flex-wrap p-0">
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

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
.navbar-btn {
  @apply font-bold text-giftbox p-5 bg-alert;
}
.navbar-btn:hover {
  @apply underline;
}
</style>