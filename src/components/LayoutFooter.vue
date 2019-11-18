<template>
  <footer class="lyt-footer">
    <div class="w">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-1 text-center">
        <div>content</div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-1 text-center">
      <p class="text-center abc">copyright giftbox promosindo 2019</p>
    </div>
  </footer>
</template>

<style lang="postcss">
.lyt-footer {
  flex-shrink: 0;
  & .w {
    background: #ccc;
  }
  & .abc {
    color: #949494;
  }
}
</style>

<script>
import WhatsappIcon from "./WhatsappIcon";
export default {
  components: {
    WhatsappIcon
  }
};
</script>
