<template>
  <div class="site-header">
    <div
      class="page-header"
      v-ov="psg"
    >
      <div class="container mx-auto flex md:flex-row flex-col ct">
        <div class="logo">
          <a
            href="/"
            class="home-link"
          ><img
              src="../../static/images/giftbox-logo3.svg"
              class=""
            /></a>
        </div>
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
    <div class="page-nav">
      <div class="container mx-auto">
        <nav>
          <ul class="www">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SvgInstagram from '../components/SvgInstagram';
import SvgWhatsapp from '../components/SvgWhatsapp';
import SvgDownload from '../components/SvgDownload';
import { ObserveVisibility } from "../directives/observe-visibility";
export default {
  components: {
    SvgInstagram,
    SvgWhatsapp,
    SvgDownload
  },
  data () {
    return {
      intersectionOptions: undefined,
      psg: false
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
      console.log();
      if (!isVisible) this.bodyClassList().add("fixed-header");
      else this.bodyClassList().remove("fixed-header");
    }
  }
}
</script>

<style lang="postcss" scope="this api replaced by slot-scope in 2.5.0+">
.lnk1 > p {
  color: red;
}
</style>