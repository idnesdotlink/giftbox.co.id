<template>
  <div class="nav-mob sm:hidden">
    <a
      @click="close()"
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
        class="relative w-56 mt-3 ml-6 sm:hidden"
      >
        <span class="relative inline-block">
          <input
            id="search-input-res"
            autocomplete="off"
            required="required"
            type="search"
            placeholder="Search For Produtcs"
            class="w-full h-10 leading-form px-5 pr-10 rounded-full text-sm focus:outline-none text-white"
            style="background: rgba(255, 255, 255, 0.1); position: relative; vertical-align: top;"
            spellcheck="false"
            role="combobox"
            aria-autocomplete="both"
            aria-expanded="false"
          ></span>
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
          <li
            class=""
            v-for="i in link"
            :key="i.lnk"
          >
            <a :href="i.lnk">{{ i.text }}</a>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: [
        {
          text: 'Home',
          lnk: '/'
        },
        {
          text: 'Products',
          lnk: '/products'
        },
        {
          text: 'Contact',
          lnk: '/contact'
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('closenavmob')
    }
  }
}
</script>

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
  transform: translate(50%, -50%) scale(8);
}
.active-menu .nav-mob .btn-menu {
  opacity: 1;
  pointer-events: all;
}
.active-menu .nav-mob li a {
  opacity: 1;
  transform: translateY(0);
}
.active-menu .nav-mob li.active a {
  font-weight: 700;
}
.active-menu .nav-mob li:first-of-type a {
  transition-delay: 0.05s;
}
.active-menu .nav-mob li:nth-of-type(2) a {
  transition-delay: 0.1s;
}
.active-menu .nav-mob li:nth-of-type(3) a {
  transition-delay: 0.15s;
}
.active-menu .nav-mob li:nth-of-type(4) a {
  transition-delay: 0.2s;
}
.active-menu .nav-mob li:nth-of-type(5) a {
  transition-delay: 0.25s;
}
.active-menu .nav-mob li:nth-of-type(6) a {
  transition-delay: 0.3s;
}
.active-menu .nav-mob li:nth-of-type(7) a {
  transition-delay: 0.35s;
}
.active-menu .nav-mob li:nth-of-type(8) a {
  transition-delay: 0.4s;
}
.active-menu .nav-mob li:nth-of-type(9) a {
  transition-delay: 0.45s;
}
.active-menu .nav-mob li:nth-of-type(10) a {
  transition-delay: 0.5s;
}
.active-menu .nav-mob li:nth-of-type(11) a {
  transition-delay: 0.55s;
}
.active-menu .nav-mob li:nth-of-type(12) a {
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
    transform: translate(50%, -50%) scale(0);
    transform-origin: 50% 50%;
    border-radius: 50%;
    transition: all 0.3s ease-in;
  }
  .nav-mob .btn-menu {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1.5rem;
    display: flex;
    z-index: 40;
    opacity: 0;
    pointer-events: none;
  }
  .nav-mob ul {
    flex-direction: column;
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
    transform: translateY(-15px);
    transition: all 0.3s;
  }
  .active-menu .nav-mob {
    opacity: 1;
    pointer-events: all;
  }
  .active-menu .nav-mob:before {
    opacity: 1;
    pointer-events: all;
    transform: translate(50%, -50%) scale(8);
  }
  .active-menu .nav-mob .btn-menu {
    opacity: 1;
    pointer-events: all;
  }
  .active-menu .nav-mob li a {
    opacity: 1;
    transform: translateY(0);
  }
  .active-menu .nav-mob li.active a {
    font-weight: 700;
  }
  .active-menu .nav-mob li:first-of-type a {
    transition-delay: 0.05s;
  }
  .active-menu .nav-mob li:nth-of-type(2) a {
    transition-delay: 0.1s;
  }
  .active-menu .nav-mob li:nth-of-type(3) a {
    transition-delay: 0.15s;
  }
  .active-menu .nav-mob li:nth-of-type(4) a {
    transition-delay: 0.2s;
  }
  .active-menu .nav-mob li:nth-of-type(5) a {
    transition-delay: 0.25s;
  }
  .active-menu .nav-mob li:nth-of-type(6) a {
    transition-delay: 0.3s;
  }
  .active-menu .nav-mob li:nth-of-type(7) a {
    transition-delay: 0.35s;
  }
  .active-menu .nav-mob li:nth-of-type(8) a {
    transition-delay: 0.4s;
  }
  .active-menu .nav-mob li:nth-of-type(9) a {
    transition-delay: 0.45s;
  }
  .active-menu .nav-mob li:nth-of-type(10) a {
    transition-delay: 0.5s;
  }
  .active-menu .nav-mob li:nth-of-type(11) a {
    transition-delay: 0.55s;
  }
  .active-menu .nav-mob li:nth-of-type(12) a {
    transition-delay: 0.6s;
  }
  .button-back {
    transition: all 0.3s;
    transition-delay: 0.1s;
  }
  .active-menu .button-back {
    opacity: 1;
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
    transition: opacity 0.3s;
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