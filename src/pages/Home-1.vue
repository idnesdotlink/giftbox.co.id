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
    <Slider1 :products="$page.allProduct.edges" />
    <Article />
    <Soc />
  </Layout>
</template>

<script>
import Soc from '@/components/Soc'
import PostList from "@/components/PostList"
import Slide from "@/components/Slide"
import CustomerSlide from "@/components/CustomerSlide" 
import About from "@/components/About"
import Whatsapp from '@/components/Whatsapp'
import Slider1 from '@/components/Slider-1'
import Article from '@/components/Article'
// const inview = require('../directives/inview')
// import scrollspy from 'v-scrollspy'

export default {
  data: () => ({
    t: 'wow',
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
    Whatsapp,
    Slider1,
    Article,
    Soc
  },
  metaInfo() {
    console.log({when: this.$root.$options.metaInfo.htmlAttrs.class})
    return {
      title: 'test',
      htmlAttrs: {
        class: `page-index ${this.$root.$options.metaInfo.htmlAttrs.class}`
      },
      bodyAttrs: {
        class: `page-index ${this.$root.$options.metaInfo.bodyAttrs.class}`
      }
    }
  },
  created() {
    console.log({created: this})
  },
  mounted() {
    this.$nextTick().then(
      () => {
        console.log({mounted: this})
      }
    )
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
  filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.2));
  will-change: transform;
  animation-delay: 0.5s !important;
  opacity: 0;
}

.curves--1 {
  top: 25%;
  left: 50%;
  width: 1040px;
  z-index: 2;
  transform: translate(-65%, 100px) rotate(15deg);
  animation: curves1 1s forwards;
}

.curves--2 {
  top: -120px;
  right: -50px;
  width: 490px;
  z-index: 3;
  animation: curves2 1s forwards;
  transform: translate(100px) rotate(30deg);
}

.curves--3 {
  top: -450px;
  left: -90px;
  width: 900px;
  z-index: 1;
  animation: curves3 1s forwards;
  transform: translate(-100px) rotate(-30deg);
}

.curves--4 {
  top: -180px;
  left: 70%;
  width: 700px;
  z-index: 2;
  transform: translate(-65%, 100px) rotate(15deg);
  animation: curves4 1s forwards;
}

.curves--5 {
  bottom: -220px;
  left: -90px;
  width: 500px;
  z-index: 1;
  animation: curves3 1s forwards;
  transform: translate(-100px) rotate(-30deg);
}

.curves--6 {
  bottom: -210px;
  right: -190px;
  width: 490px;
  z-index: 3;
  animation: curves2 1s forwards;
  transform: translate(100px) rotate(30deg);
}

@keyframes curves1 {
  0% {
    transform: translate(-65%, 100px) rotate(15deg);
  }
  to {
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}

@keyframes curves2 {
  0% {
    transform: translate(100px) rotate(30deg);
  }
  to {
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes curves3 {
  0% {
    transform: translate(-100px) rotate(-30deg);
  }
  to {
    transform: translate(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes curves4 {
  0% {
    transform: translate(-65%, -100px) rotate(15deg);
  }
  to {
    transform: translate(-65%) rotate(0);
    opacity: 1;
  }
}
</style>