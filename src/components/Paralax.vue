<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Rellax from 'rellax';
import Parallax from 'parallax-js';

  export default {
    data () {
      return {
        rellax: null
      }
    },
    mounted () {
      console.log()
      this.rellax = new Parallax(this.$el, {
        wrapper: this.$el.parentElement
      });
    },
    destroyed () {
      this.rellax.destroy();
      this.relax = null;
    }
  }
</script>
