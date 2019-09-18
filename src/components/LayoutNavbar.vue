<template>
  <nav class="nav">
    <g-link
      class="navbar-btn"
      to="/"
    >Home</g-link>
    <g-link
      class="navbar-btn"
      to="/products"
    >Products</g-link>
    <g-link
      class="navbar-btn"
      to="/contact"
    >Contact</g-link>
    <g-link
      class="navbar-btn"
      to="/catalogs"
    >Catalogs</g-link>
  </nav>
</template>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
.navbar-btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  margin-left: 10px;
}
.navbar-btn:hover {
  @apply bg-blue-700;
}
</style>