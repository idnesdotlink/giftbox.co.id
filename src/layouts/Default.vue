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
    <slot />
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
  overflow: hidden;
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
