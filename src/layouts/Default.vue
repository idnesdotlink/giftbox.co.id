<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal p-0 m-0 flex flex-col h-screen min-h-screen min-w-screen w-screen relative overflow-y-auto"
    :class="menuClasses"
  >
    <LayoutHeader @clicknav="wow()" />
    <div
      class="bar"
      style="height: 64px; min-height: 64px;"
    ></div>
    <LayoutNavMob @closenavmob="wow()" />

    <div class="flex flex-col flex-1">
      <!-- <header>
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
      </header> -->

      <!-- start header -->
      <!-- <header
        class="w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6"
        id="navbar"
      >
        <nav class="flex items-center justify-between">
          <div class="">
            <a href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="39"
              ><text
                  transform="translate(87 29)"
                  fill="#454f5b"
                  font-size="24"
                >
                  <tspan
                    x="0"
                    y="0"
                  >FairRate</tspan>
                </text>
                <path
                  d="M54 39H0L27 6l27 33zM23 22v11h8V22h-8z"
                  fill="#4ad5f6"
                />
                <path
                  d="M54 0L40 16h27L54 0"
                  fill="#95cdb1"
                />
                <path
                  d="M69 18L55 34h27L69 18"
                  fill="#ffc48b"
                /></svg>
            </a>
          </div>

          <div class="block sm:hidden">
            <button
              type="button"
              class="navbar-toggler"
            >
              <span class="navbar-toggler-bar"></span>
              <span class="navbar-toggler-bar"></span>
              <span class="navbar-toggler-bar"></span>
            </button>
          </div>

          <div class="hidden sm:flex">
            <ul class="flex flex-col sm:flex-row">
              <li><a
                  href="#"
                  class="sm:px-4 py-2 block"
                >Rates</a></li>
              <li><a
                  href="#"
                  class="sm:px-4 py-2 sm:hidden lg:block"
                >About Us</a></li>
              <li><a
                  href="#"
                  class="sm:px-4 py-2 sm:hidden md:block"
                >Resources</a></li>
              <li><a
                  href="#"
                  class="sm:px-4 py-2 sm:hidden md:block"
                >FAQs</a></li>
              <li><a
                  href="#"
                  class="sm:px-4 py-2 block text-blue-600 border border-gray-400 rounded-lg ml-4"
                >Login</a></li>
              <li><a
                  href="#"
                  class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4"
                >Get Started</a></li>
            </ul>
          </div>
        </nav>
      </header> -->
      <!-- end header -->

      <!-- -->

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
    <portal to="destination">
      <p>This slot content will be rendered wherever the portal-target with name 'destination' is located.</p>
    </portal>
    <ClientOnly>
      <modal name="hello-world">
        Welcome To Giftbox Promosindo
        <portal-target name="destination" />
      </modal>
    </ClientOnly>
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

.bar {
  @apply min-w-full bg-gradient-nine-one h-2;
}
.bar::after {
  content: "\200b";
}

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
import LayoutNavMob from '@/components/LayoutNavMob'
import LayoutHeader from '@/components/LayoutHeader'
export default {
  data () {
    return {
      menuClasses: ''
    }
  },
  metaInfo: {
  },
  components: {
    LayoutNavMob,
    LayoutNavbar,
    LayoutFooter,
    LayoutHeader,
    // Spinner: () => import('vue-loading-spinner').then(m => m.Jumper)
  },
  mounted () {
    
    this.$nextTick().then(() => {
      console.log(this.metaInfo)
      // this.$modal.show('hello-world');
    })
  },
  methods: {
    wow () {
      // console.log(this.$root)
      // console.log(this.$root.$options.metaInfo.htmlAttrs)
      this.menuClasses = this.menuClasses === 'active-menu' ? '' : 'active-menu'
    }
  }
}
</script>
