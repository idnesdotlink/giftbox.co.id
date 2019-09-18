<template>
  <nav class="nav">
    <g-link
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/"
    >Home</g-link>
    <g-link
      class="nav__link navbar-btn"
      to="/about"
    >About</g-link>
    <g-link
      class="nav__link navbar-btn"
      to="/products"
    >Products</g-link>
    <g-link
      class="nav__link navbar-btn"
      to="/contact"
    >Contact</g-link>
    <g-link
      target="_blank"
      class="nav__link navbar-btn"
      to="/downloads/2019.pdf"
    >Catalogue</g-link>
  </nav>
</template>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
.navbar-btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
.navbar-btn:hover {
  @apply bg-blue-700;
}
</style>