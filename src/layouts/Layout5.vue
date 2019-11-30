<template>
  <div class="layout-w">
    <slot
      name="site-header"
      :hallo="'hallo'"
    />
    <div class="mm">
      <slot name="default" />
    </div>
    <slot name="footer" />
    <slot name="fab" />
  </div>
</template>

<style lang="postcss" scoped>
.layout-w {
  display: flex;
  flex-direction: column;
}
.mm {
  flex: 1;
}
</style>