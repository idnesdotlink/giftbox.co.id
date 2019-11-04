<template>
  <Layout>
    <div>
      <fixed-element
        @change="updateFixedStatus"
        :threshold="propsData.threshold"
        :headerClass="propsData.headerClass"
        :fixedClass="propsData.fixedClass"
        :hideScrollUp="propsData.hideScrollUp"
      >
        <nav>
          <div>[nav]</div>
        </nav>
      </fixed-element>
      <div
        v-observe="observer"
        class="c"
        :class="{
      headerIsFixed: fixedStatus.headerIsFixed
    }"
        :style="{
        height: '1000px'
      }"
      >
        <div>
          <h3 class="heading">
            vue-fixed-header debugging
          </h3>
          <div>el</div>
        </div>
      </div>
      <fixed-element
        :threshold="0"
        headerClass="fixed-footer"
        fixedClass="isFixed"
      >
        <footer>
          <div>isFixed: {{ fixedStatus.headerIsFixed }}</div>
        </footer>
      </fixed-element>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/layouts/Layout5'
import vObserve from "../directives/v-observe";
const createData = () => ({
  threshold: 74,
  headerClass: 'vue-fixed-header',
  fixedClass: 'vue-fixed-header--isFixed',
  hideScrollUp: false
})
export default {
  metaInfo: {
    bodyAttrs: {
      class: [
        'home-6'
      ]
    }
  },
  directives: {
    observe: vObserve
  },
  components: {
    Layout,
    'fixed-element': require('../directives/fixed-header/vue-fixed-header').default
  },
  data() {
    return {
      observer: undefined,
      fixedStatus: {
        headerIsFixed: false
      },
      propsData: { ...createData() },
      formData: { ...createData() }
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(this.handleIntersection);
    // console.log(this)
  },
  methods: {
    updateFixedStatus(next) {
      this.fixedStatus.headerIsFixed = next
    },
    handleClickUpdate() {
      this.propsData = { ...this.formData }
    },
    handleClickCancel() {
      this.formData = { ...this.propsData }
    },
    handleIntersection(entries, observer) {
      console.log('handle intersection')
      console.log(observer)
      console.log(entries)
    }
  }
}
</script>

<style lang="postcss">
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-74px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.home-6 {
  & #app {
    & > div {
      width: 100%;
      height: 100%;
      overflow: auto;
      & .c {
        margin: 0 auto;
        padding: 16px;
      }
      & nav {
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
        background: #fff;
        border-bottom: solid 1px #e5e5e5;
      }
      & nav.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        opacity: 0;
        animation: fadeIn 0.3s ease-out forwards;
      }
      & .c.headerIsFixed {
        transform: translateY(56px) !important;
      }
      & .fixed-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
}
</style>