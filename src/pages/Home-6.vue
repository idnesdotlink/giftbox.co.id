<template>
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
</template>

<script>
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
  components: {
    'fixed-element': require('../directives/fixed-header/vue-fixed-header').default
  },
  data() {
    return {
      fixedStatus: {
        headerIsFixed: false
      },
      propsData: { ...createData() },
      formData: { ...createData() }
    }
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
    }
  }
}
</script>

<style lang="scss">
.home-6 {
  .c {
    margin: 0 auto;
    padding: 16px;
  }
  nav {
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #fff;
    border-bottom: solid 1px #e5e5e5;
  }
  nav.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
  }

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
  .c.headerIsFixed {
    transform: translateY(56px) !important;
  }
  .fixed-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  #app {
    overflow: hidden;
  }
}
</style> 