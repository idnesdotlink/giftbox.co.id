<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normalp-0 m-0 overflow-x-auto overflow-y-auto flex flex-col h-screen min-h-screen min-w-full">
    <div class="bar"></div>
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
      <header
        class="w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6"
        id="navbar"
      >
        <!-- start -->
        <div class="nav-mob sm:hidden">
          <a
            href="#"
            class="btn-menu nav-toggle"
          >
            <img
              src=""
              class="h-4"
            >
          </a>
          <nav class="relative z-30">
            <form
              action="/"
              class="searchbox relative w-56 mt-3 ml-6 sm:hidden"
            >
              <span
                class="algolia-autocomplete"
                style="position: relative; display: inline-block; direction: ltr;"
              ><input
                  id="search-input-res"
                  autocomplete="off"
                  required="required"
                  type="search"
                  name="q"
                  placeholder="Search free templates"
                  class="searchbox__input w-full h-10 leading-form px-5 pr-10 rounded-full text-sm focus:outline-none text-white aa-input"
                  style="background: rgba(255, 255, 255, 0.1); position: relative; vertical-align: top;"
                  spellcheck="false"
                  role="combobox"
                  aria-autocomplete="both"
                  aria-expanded="false"
                  aria-owns="algolia-autocomplete-listbox-2"
                  dir="auto"
                >
                <pre
                  aria-hidden="true"
                  style="position: absolute; visibility: hidden; white-space: pre; font-family: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"
                ></pre><span
                  class="aa-dropdown-menu"
                  role="listbox"
                  id="algolia-autocomplete-listbox-2"
                  style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"
                >
                  <div class="aa-dataset-3"></div>
                </span></span>
              <button
                type="submit"
                class="absolute top-0 right-0 py-3 px-5 flex items-center focus:outline-none"
              >
                <img
                  src="/images/search2.svg"
                  class="h-4"
                >
              </button>
              <button
                type="reset"
                title="Clear the search query."
                class="searchbox__reset hide"
              ></button>
            </form>

            <div class="container relative">
              <ul class="flex justify-center">
                <li class="">
                  <a href="/recent">Recent</a>
                </li>
                <li class="">
                  <a href="/themes">Popular</a>
                </li>
                <li class="">
                  <a href="/education">Education</a>
                </li>
                <li class="">
                  <a href="/business">Business</a>
                </li>
                <li class="">
                  <a href="/marketing">Marketing</a>
                </li>
                <li class="">
                  <a href="/medical">Medical</a>
                </li>
                <li class="">
                  <a href="/general">General</a>
                </li>
              </ul>

            </div>
          </nav>
        </div>
        <!-- end -->
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
      </header>
      <!-- end header -->
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

<style>
.active-menu .nav-mob {
  opacity: 1;
  pointer-events: all;
}
.active-menu .nav-mob:before {
  opacity: 1;
  pointer-events: all;
  -webkit-transform: translate(50%, -50%) scale(8);
  transform: translate(50%, -50%) scale(8);
}
.active-menu .nav-mob .btn-menu {
  opacity: 1;
  pointer-events: all;
}
.active-menu .nav-mob li.active a {
  font-weight: 700;
}
.active-menu .nav-mob li a {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.active-menu .nav-mob li:first-of-type a {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}
.active-menu .nav-mob li:nth-of-type(2) a {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.active-menu .nav-mob li:nth-of-type(3) a {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}
.active-menu .nav-mob li:nth-of-type(4) a {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.active-menu .nav-mob li:nth-of-type(5) a {
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
}
.active-menu .nav-mob li:nth-of-type(6) a {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
.active-menu .nav-mob li:nth-of-type(7) a {
  -webkit-transition-delay: 0.35s;
  transition-delay: 0.35s;
}
.active-menu .nav-mob li:nth-of-type(8) a {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.active-menu .nav-mob li:nth-of-type(9) a {
  -webkit-transition-delay: 0.45s;
  transition-delay: 0.45s;
}
.active-menu .nav-mob li:nth-of-type(10) a {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}
.active-menu .nav-mob li:nth-of-type(11) a {
  -webkit-transition-delay: 0.55s;
  transition-delay: 0.55s;
}
.active-menu .nav-mob li:nth-of-type(12) a {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
.active-menu .button-back {
  opacity: 1;
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
    // Spinner: () => import('vue-loading-spinner').then(m => m.Jumper)
  },
  mounted () {
    
    this.$nextTick().then(() => {
      // this.$modal.show('hello-world');
    })
  }
}
</script>
