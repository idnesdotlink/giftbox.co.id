<template>
  <div class="layout">
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
</template>

<static-query>
query {
  metaData {
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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
