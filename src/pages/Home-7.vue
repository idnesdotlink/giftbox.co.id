<template>
  <Layout>
    <div>
      <div class="header">
        <h2>Header</h2>
      </div>
      <div
        class="sticky-container"
        sticky-container
      >
        <div :style="{background: '#eee', margin: '20px'}">
          <p
            v-for="a in [1,2,3,4,5,6,7,8,9]"
            :key="a"
          >{{ a }} Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <div
            class="sticky"
            v-sticky="stickyEnabled"
            sticky-offset="{top: 10, bottom: 30}"
            sticky-side="both"
            on-stick="onStick"
            sticky-z-index="20"
          >
            <h2>
              <span>{{stickyEnabled ? 'Sticky' : 'Not sticky'}}</span>
              <button
                class="toggle-sticky"
                @click="stickyEnabled = !stickyEnabled"
              >toggle sticky</button>
            </h2>
          </div>
          <p
            v-for="a in [11,12,13,14,15,16,17,18,19]"
            :key="a"
          >{{ a }} Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
        </div>
      </div>
      <div class="footer">
        <h2>Footer</h2>
      </div>
    </div>
  </Layout>
</template>

<script>
import sticky from '@/directives/sticky/sticky'
import Layout from '@/layouts/Layout5'
export default {
  metaInfo: {
    htmlAttrs: {
      class: [
        'home-7'
      ]
    }
  },
  components: {
    Layout
  },
  directives: {
    sticky: sticky
  },
  data () {
    return {
      stickyEnabled: true,
    }
  },
  methods: {
    onStick(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="postcss">
.home-7 #app > div {
  height: 100vh;
  width: 100vw;
  overflow: auto;

  & h2 {
    margin: auto;
    font-size: 40px;
  }
  & .header {
    display: flex;
    height: 300px;
    background: #eee;
  }

  & .footer {
    display: flex;
    height: 300px;
    background: #eee;
  }

  & .sticky-container {
    /* height: 600px; */
    overflow: hidden;
    background: #ccc;
  }

  & .sticky-container p {
    font-size: 20px;
    margin: 20px;
  }

  & .sticky {
    background: #bbb;
    display: flex;
  }

  & .toggle-sticky {
    z-index: 20;
  }
}
</style>
