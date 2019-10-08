<template>
  <footer class="bg-giftbox text-white lyt-footer psg">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-6">
      <ul class="flex items-center">
        <li class="mr-8">
          <WhatsappIcon />
        </li>
        <li class="mr-8">
          <a
            href="mailto:rendy.giftbox@yahoo.com"
            v-tooltip.top-center="'email'"
            class="text-white hover:text-gray-400"
          >
            <img src="../../static/images/email.svg" />
          </a>
        </li>

        <li class="mr-8">
          <a
            href="https://github.com/idnesdotlink/giftbox.co.id"
            target="_blank"
            v-tooltip.top-center="'github'"
            class="text-white hover:text-gray-400"
          >
            <img src="../../static/images/github.svg" />
          </a>
        </li>

        <li class="mr-8">
          <a
            href="https://www.instagram.com/giftboxpromo/?hl=en"
            target="_blank"
            v-tooltip.top-center="'instagram'"
            class="text-white hover:text-gray-400"
          >
            <img src="../../static/images/instagram.svg" />
          </a>
        </li>

        <li class="mr-8">
          <a
            href="https://www.instagram.com/giftboxpromo/?hl=en"
            target="_blank"
            v-tooltip.top-center="'instagram'"
            class="text-white hover:text-gray-400"
          >
            <img
              class="h-6 w-6"
              src="../../static/images/giftbox-box.png"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/giftboxpromo/?hl=en"
            target="_blank"
            v-tooltip.top-center="'instagram'"
            class="text-white hover:text-gray-400"
          >
            <img
              class="h-6 w-6"
              src="../../static/images/surapati-box.png"
            />
          </a>
        </li>

      </ul>
    </div>
  </footer>
</template>

<style>
.psg {
  @apply bg-gradient-nine-one;
}
.lyt-footer {
  flex-shrink: 0;
}
</style>

<script>
import WhatsappIcon from './WhatsappIcon';
export default {
  components: {
    WhatsappIcon
  }
}
</script>

<style lang="scss">
@import "../styles/tooltip.scss";
</style>