<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Rellax from 'rellax';

  export default {
    data () {
      return {
        rellax: null
      }
    },
    mounted () {
      this.rellax = new Rellax(this.$el);
    },
    destroyed () {
      this.rellax.destroy();
      this.relax = null;
    }
  }
</script>
