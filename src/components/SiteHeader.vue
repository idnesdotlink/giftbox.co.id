<template>
  <div
    class="site-header"
    :class="classList"
  >
    <div
      class="page-header"
      v-ov="psg"
    >
      <div class="container mx-auto flex md:flex-row flex-col ct">
        <SiteLogo />
        <nav class="clnk">
          <div class="container mx-auto flex flex-row justify-start">
            <div class="lnk1">
              <p>Jl. BKR No.145, Kota Bandung, Jawa Barat.</p>
            </div>
            <div class="lnk1">
              <SvgInstagram />
              <p>@giftboxdivromo</p>
            </div>
            <div class="lnk1">
              <SvgWhatsapp />
              <p>+62 878 123 456</p>
            </div>
            <div class="lnk1">
              <SvgDownload />
              <p>Download Catalog</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <SiteNav />
  </div>
</template>

<script>
import SvgInstagram from "../components/SvgInstagram";
import SvgWhatsapp from "../components/SvgWhatsapp";
import SvgDownload from "../components/SvgDownload";
import { ObserveVisibility } from "../directives/observe-visibility";
import SiteLogo from "../components/SiteLogo";
import SiteNav from "../components/SiteNav";
export default {
  components: {
    SvgInstagram,
    SvgWhatsapp,
    SvgDownload,
    SiteLogo,
    SiteNav
  },
  data () {
    return {
      intersectionOptions: undefined,
      psg: false,
      classList: []
    }
  },
  directives: {
    ov: ObserveVisibility
  },
  mounted() {
    this.intersectionOptions = {
      root: null,
      rootMargin: "-1px",
      threshold: 0
    };
    this.psg = {
      callback: this.visibilityChanged,
      intersection: this.intersectionOptions
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (!isVisible) {
        this.bodyClassList().add("fixed-header");
        this.classList = ["psg-bgt"];
      }
      else {
        this.bodyClassList().remove("fixed-header");
        this.classList = [];
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.site-header {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;
}
.clnk {
}
.clnk svg {
  max-height: 30px;
}
.lnk1 {
  @apply text-giftbox px-6 py-1 lnk1 text-xs font-sans;
}
.lnk1:hover {
  @apply text-accent;
}
.clnk .lnk1 {
  @apply;
  border-right: 1px solid #ccc;
}
.clnk .lnk1:last-child {
  border-right: 0 none;
}
.top-header {
  @apply mx-auto text-center;
  height: 30px;
  background-color: blue;
  line-height: 30px;
}
.ct {
  @apply flex items-center justify-between w-full;
  height: auto;
}
.site-header > div:first-child {
  @apply w-full;
  background: rgba(#fff, 0.7);
}

.home-link,
.home-link img {
  height: 100%;
  max-height: 100%;
  width: auto;
}
.logo {
  @apply w-auto h-full;
  min-height: 50px;
}
</style>