<template>
  <Layout>
    <div
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      class="hero justify-center flex items-end sm:items-center pb-12 sm:pb-0"
    >
      <img
        src="../../static/images/curve1.svg"
        class="curves curves--1"
      >
      <img
        src="../../static/images/curve2.svg"
        class="curves curves--2"
      >
      <img
        src="../../static/images/curve3.svg"
        class="curves curves--3"
      >
      <div class="container sm:max-w-md md:max-w-4xl text-center relative z-10">
        <h1 class="text-3xl sm:text-title text-white font-normal leading-tight">Free <strong>Google Slides</strong> and <strong>PowerPoint templates</strong> <br>to boost your presentations</h1>
      </div>
    </div>
    <ClientOnly>
      <Slide :products="$page.allProduct.edges"></Slide>
    </ClientOnly>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <About />
    <ClientOnly>
      <CustomerSlide :customers="$page.allCustomer.edges"></CustomerSlide>
    </ClientOnly>
    <main class="py-4">
      <div class="px-4">
        <div class="block md:flex justify-between md:-mx-2">
          <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
              <img
                class="h-56 w-full object-cover object-center"
                src="../../static/images/giftbox-box.png"
                alt=""
              >
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="#"
                  class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  Woman standing under blue sky
                </a>
                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                </div>
                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#something</a>
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#sky</a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
              <img
                class="h-56 w-full object-cover object-center"
                src="../../static/images/giftbox-box.png"
                alt=""
              >
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="#"
                  class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  Woman walking on pathway
                </a>
                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
                </div>
                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#pathway</a>
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#woman</a>
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#walkalone</a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
              <img
                class="h-56 w-full object-cover object-center"
                src="../../static/images/giftbox-box.png"
                alt=""
              >
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="#"
                  class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  Walking through a forest in the afternoon
                </a>
                <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
                </div>
                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#forest</a>
                  <a
                    class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >#walk</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList"
import Slide from "@/components/Slide"
import CustomerSlide from "@/components/CustomerSlide" 
import About from "@/components/About"
import Whatsapp from '@/components/Whatsapp'
// const inview = require('../directives/inview')
// import scrollspy from 'v-scrollspy'

export default {
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  directives: {
    // inview
  },
  components: {
    PostList,
    Slide,
    CustomerSlide,
    About,
    Whatsapp
  },
  metaInfo: {
    title: ''
  },
  mounted() {
    // console.log(this.$page.allCustomer)
  },
  methods: {
    onScrollTo (el) {
      console.log(el)
    },
    onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!')
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    }
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allProduct {
    edges {
        node {
          id
          title
          image
        }
    }
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
allCustomer {
    totalCount
    edges {
      node {
        id
        title
        image
      }
    }
}
}
</page-query>

<style>
.hero {
  height: 300px;
  position: relative;
  overflow: hidden;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4949e7),
    to(#3636cc)
  );
  background-image: linear-gradient(#4949e7, #3636cc);
  z-index: 0;
}
.home-links a {
  margin-right: 1rem;
}
</style>

<style>
.curves {
  position: absolute;
  pointer-events: none;
  -webkit-filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.2));
  will-change: transform;
  -webkit-animation-delay: 0.5s !important;
  animation-delay: 0.5s !important;
  opacity: 0;
}

.curves--1 {
  top: 25%;
  left: 50%;
  width: 1040px;
  z-index: 2;
  -webkit-transform: translate(-65%, 100px) rotate(15deg);
  transform: translate(-65%, 100px) rotate(15deg);
  -webkit-animation: curves1 1s forwards;
  animation: curves1 1s forwards;
}

.curves--2 {
  top: -120px;
  right: -50px;
  width: 490px;
  z-index: 3;
  -webkit-animation: curves2 1s forwards;
  animation: curves2 1s forwards;
  -webkit-transform: translate(100px) rotate(30deg);
  transform: translate(100px) rotate(30deg);
}

.curves--3 {
  top: -450px;
  left: -90px;
  width: 900px;
  z-index: 1;
  -webkit-animation: curves3 1s forwards;
  animation: curves3 1s forwards;
  -webkit-transform: translate(-100px) rotate(-30deg);
  transform: translate(-100px) rotate(-30deg);
}

.curves--4 {
  top: -180px;
  left: 70%;
  width: 700px;
  z-index: 2;
  -webkit-transform: translate(-65%, 100px) rotate(15deg);
  transform: translate(-65%, 100px) rotate(15deg);
  -webkit-animation: curves4 1s forwards;
  animation: curves4 1s forwards;
}

.curves--5 {
  bottom: -220px;
  left: -90px;
  width: 500px;
  z-index: 1;
  -webkit-animation: curves3 1s forwards;
  animation: curves3 1s forwards;
  -webkit-transform: translate(-100px) rotate(-30deg);
  transform: translate(-100px) rotate(-30deg);
}

.curves--6 {
  bottom: -210px;
  right: -190px;
  width: 490px;
  z-index: 3;
  -webkit-animation: curves2 1s forwards;
  animation: curves2 1s forwards;
  -webkit-transform: translate(100px) rotate(30deg);
  transform: translate(100px) rotate(30deg);
}

@-webkit-keyframes curves1 {
  0% {
    -webkit-transform: translate(-65%, 100px) rotate(15deg);
    transform: translate(-65%, 100px) rotate(15deg);
  }
  to {
    -webkit-transform: translate(-65%) rotate(0);
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}

@keyframes curves1 {
  0% {
    -webkit-transform: translate(-65%, 100px) rotate(15deg);
    transform: translate(-65%, 100px) rotate(15deg);
  }
  to {
    -webkit-transform: translate(-65%) rotate(0);
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}

@-webkit-keyframes curves2 {
  0% {
    -webkit-transform: translate(100px) rotate(30deg);
    transform: translate(100px) rotate(30deg);
  }
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes curves2 {
  0% {
    -webkit-transform: translate(100px) rotate(30deg);
    transform: translate(100px) rotate(30deg);
  }
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@-webkit-keyframes curves3 {
  0% {
    -webkit-transform: translate(-100px) rotate(-30deg);
    transform: translate(-100px) rotate(-30deg);
  }
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes curves3 {
  0% {
    -webkit-transform: translate(-100px) rotate(-30deg);
    transform: translate(-100px) rotate(-30deg);
  }
  to {
    -webkit-transform: translate(0) rotate(0deg);
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@-webkit-keyframes curves4 {
  0% {
    -webkit-transform: translate(-65%, -100px) rotate(15deg);
    transform: translate(-65%, -100px) rotate(15deg);
  }
  to {
    -webkit-transform: translate(-65%) rotate(0);
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}

@keyframes curves4 {
  0% {
    -webkit-transform: translate(-65%, -100px) rotate(15deg);
    transform: translate(-65%, -100px) rotate(15deg);
  }
  to {
    -webkit-transform: translate(-65%) rotate(0);
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}
</style>