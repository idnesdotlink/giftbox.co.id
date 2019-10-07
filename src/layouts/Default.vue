<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal p-0 m-0 overflow-x-auto overflow-y-auto flex flex-col h-screen min-h-screen min-w-full"
    :class="menuClasses"
  >
    <div class="bar"></div>
    <!-- start -->
    <div class="nav-mob sm:hidden">
      <a
        @click="wow()"
        class="btn-menu nav-toggle"
      >
        <img
          src="../../static/images/close.svg"
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
              src="../../static/images/search2.svg"
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
      <header class="bg-giftbox px-6 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 header-home active">
        <a
          href="/"
          class="h-8"
        ><img
            src="../../static/images/slidego.svg?"
            class="h-8"
          ></a>
        <a
          @click="wow()"
          class="sm:hidden absolute right-0 top-0 py-5 px-6 flex nav-toggle"
        >
          <img
            src="../../static/images/menu.svg"
            class="h-5"
          >
        </a>
      </header>
      <!---->
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
@tailwind base;

@tailwind components;

@tailwind utilities;

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

@media (max-width: 768px) {
  .box-container .grid-item--4 {
    width: 50%;
  }
  .nav-mob {
    bottom: 0;
    left: 0;
    z-index: 60;
    opacity: 0;
  }
  .nav-mob,
  .nav-mob:before {
    position: fixed;
    top: 0;
    right: 0;
    pointer-events: none;
  }
  .nav-mob:before {
    background-color: #0d2947;
    z-index: 20;
    content: "";
    padding-top: 85px;
    height: 33vmax;
    width: 33vmax;
    -webkit-transform: translate(50%, -50%) scale(0);
    transform: translate(50%, -50%) scale(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    border-radius: 50%;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
  .nav-mob .btn-menu {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 40;
    opacity: 0;
    pointer-events: none;
  }
  .nav-mob ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0;
    min-height: 100vh;
  }
  .nav-mob ul li,
  .nav-mob ul li a {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .nav-mob ul li a {
    color: #fff;
    display: block;
    opacity: 0;
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
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
  .aa-dropdown-menu > div {
    padding-top: 0;
    margin-top: -10px;
  }
  .aa-suggestions {
    background: #2b3c49;
  }
  .aa-suggestions .aa-suggestion span {
    color: hsla(0, 0%, 100%, 0.6);
  }
  .aa-suggestions .aa-suggestion span em {
    color: #fff;
  }
  .button-back {
    transition: all 0.3s;
    transition-delay: 0.1s;
  }
}

@media (max-width: 576px) {
  header form {
    display: none;
  }
  .main-header {
    margin-top: 64px;
  }
  .grid-item--3,
  .grid-item--4,
  .grid-item--8 {
    width: 100% !important;
  }
  .hero {
    height: auto;
    padding-top: 80px;
  }
  .hero h1 br {
    display: none;
  }
  .article-img {
    height: auto;
  }
  footer .grid-item--2,
  footer .grid-item--3 {
    width: 33.33% !important;
  }
  .iframe-slide {
    height: 223px;
  }
  .hero input {
    height: 3.5rem !important;
    line-height: 56px;
  }
  .nav-mob form {
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .nav-mob ul {
    min-height: calc(100vh - 24px);
    padding: 40px;
  }
  .active-menu nav form {
    opacity: 1;
  }
  .box-image .counter {
    opacity: 1;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(8, 25, 43, 0)),
        to(rgba(8, 25, 43, 0.5))
      )
      top;
    background: linear-gradient(rgba(8, 25, 43, 0), rgba(8, 25, 43, 0.5)) top;
  }
  .accordion {
    margin-top: -75px;
    padding-top: 75px;
  }
  .content-text a {
    word-break: break-all;
  }
  .iframe-article .swiper-pagination {
    font-size: 0.75rem;
    padding: 6px 0;
    width: 3.5rem;
  }
  .iframe-article .swiper-zoom {
    height: 25px;
    width: 25px;
    right: 80px;
  }
  .iframe-article .swiper-zoom img {
    height: 11px;
  }
  .iframe-article .swiper-zoom.swiper-zoom-close {
    display: none;
  }
  .iframe-article .gallery-thumbs {
    height: 60px;
  }
  .iframe-article.fullscreen {
    padding: 0;
    margin-bottom: 0;
  }
  .iframe-article.fullscreen .swiper-button-next,
  .iframe-article.fullscreen .swiper-button-prev {
    display: none;
  }
  .iframe-article.fullscreen .swiper-pagination {
    top: 20px;
  }
  .iframe-article.fullscreen .swiper-zoom.swiper-zoom-close {
    margin-right: 1rem;
    margin-top: 1rem;
  }
  .iframe-article.fullscreen .swiper-zoom.swiper-zoom-close img {
    height: 1rem;
    width: 1rem;
  }
}
</style>

<script>
import { timeout } from 'bluebird'
import LayoutNavbar from '@/components/LayoutNavbar'
import LayoutFooter from '@/components/LayoutFooter'
export default {
  data () {
    return {
      menuClasses: ''
    }
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
