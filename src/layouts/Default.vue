<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normalp-0 m-0 overflow-x-auto overflow-y-auto flex flex-col h-screen min-h-screen min-w-full">
    <div class="flex flex-col flex-1">
      <header>
        <div class="header flex container">
          <div class="flex-1">
            <g-image
              class=""
              alt="Giftbox Promosindo"
              src="~/giftbox-logo.png"
              width="415"
            />
          </div>
          <LayoutNavbar />
        </div>
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
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<script>
import { timeout } from 'bluebird'
import LayoutNavbar from '@/components/LayoutNavbar'
import LayoutFooter from '@/components/LayoutFooter'
export default {
  data () {
    return {}
  },
  components: {
    LayoutNavbar,
    LayoutFooter,
    Spinner: () => import('vue-loading-spinner').then(m => m.Jumper)
  },
  mounted () {
    
    this.$nextTick().then(() => {

    })
  }
}
</script>
