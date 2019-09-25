/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4f53bbbb05044ba3421fdde187e58413"
  },
  {
    "url": "404/index.html",
    "revision": "4f53bbbb05044ba3421fdde187e58413"
  },
  {
    "url": "assets/css/0.styles.97ba833d.css",
    "revision": "1672abdf41b225cb4d097e3b66ec0510"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "ea6d7e0250152110bb3f8df9c95bb3b7"
  },
  {
    "url": "assets/data/blog/markdown-styling/index.json",
    "revision": "41bd72b45e26c4a08df5c5060ada5f70"
  },
  {
    "url": "assets/data/blog/writing-in-markdown/index.json",
    "revision": "885158a06ed2f871222fd05cf01e9bd8"
  },
  {
    "url": "assets/data/catalogs/index.json",
    "revision": "ea6d7e0250152110bb3f8df9c95bb3b7"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "ea6d7e0250152110bb3f8df9c95bb3b7"
  },
  {
    "url": "assets/data/customer/index.json",
    "revision": "ea6d7e0250152110bb3f8df9c95bb3b7"
  },
  {
    "url": "assets/data/index.json",
    "revision": "48b1c5e5f0049398a37e3b8415f48016"
  },
  {
    "url": "assets/data/product/baby-kids-gift/index.json",
    "revision": "a4f0f088ec715baab0e7607ec1dfdc00"
  },
  {
    "url": "assets/data/product/bags-spunbond/index.json",
    "revision": "a4bc6bfb0fb53c8abac30853cf82c180"
  },
  {
    "url": "assets/data/product/mug-standard/index.json",
    "revision": "0233efa5ca1376ff97c326b98484cd8a"
  },
  {
    "url": "assets/data/product/pen/index.json",
    "revision": "91fe63898db99b79452ac62c6991faa6"
  },
  {
    "url": "assets/data/product/tumbler-daytona/index.json",
    "revision": "646a636872365dc3a39d2b86c586fa73"
  },
  {
    "url": "assets/data/product/umbrella-foldable/index.json",
    "revision": "9c819dcfbfce18c9d8faa95dfcad3467"
  },
  {
    "url": "assets/data/product/umbrella-standard/index.json",
    "revision": "aa1fc95cadea5ee1c868bccdb05a9a87"
  },
  {
    "url": "assets/data/product/vacuum-flask/index.json",
    "revision": "a74774e04bea2cfad4c4ca291f7588d4"
  },
  {
    "url": "assets/data/product/veger-powerbank/index.json",
    "revision": "6a01276867a190be0598774c83404e86"
  },
  {
    "url": "assets/data/products/2/index.json",
    "revision": "9f3c473d45e1333090438a98873562d7"
  },
  {
    "url": "assets/data/products/3/index.json",
    "revision": "7abf4eaa771fe3d74b45e66b3fab6f1a"
  },
  {
    "url": "assets/data/products/4/index.json",
    "revision": "c10c0d43707225dc9e02fef4a37150e8"
  },
  {
    "url": "assets/data/products/5/index.json",
    "revision": "b76ded9fbe99ce46ae4ae699590fe41d"
  },
  {
    "url": "assets/data/products/6/index.json",
    "revision": "820b1872e983d969adedc650d901118e"
  },
  {
    "url": "assets/data/products/7/index.json",
    "revision": "3de5fc174c8ddc4618928498f275f281"
  },
  {
    "url": "assets/data/products/8/index.json",
    "revision": "0710fd53696501efbc9cfc0c57a9ac83"
  },
  {
    "url": "assets/data/products/9/index.json",
    "revision": "9566ec82b9d37efd88f28257295a1daa"
  },
  {
    "url": "assets/data/products/index.json",
    "revision": "0d6ccc9229c0e9dc66f72da60598f392"
  },
  {
    "url": "assets/data/tag/baby-kids-gift/index.json",
    "revision": "f46783fd87d3358c8378bdc67edac974"
  },
  {
    "url": "assets/data/tag/bags/index.json",
    "revision": "e816d74353125a0191c52182500206ff"
  },
  {
    "url": "assets/data/tag/goodie-bags/index.json",
    "revision": "fc620eae164cb0ab5601bac388429ce6"
  },
  {
    "url": "assets/data/tag/pen/index.json",
    "revision": "dfa660297a2c21de3d2582751bbcc695"
  },
  {
    "url": "assets/data/tag/power-bank/index.json",
    "revision": "17fd85f492a0f40a266f3d94238fdb5a"
  },
  {
    "url": "assets/data/tag/tumbler/index.json",
    "revision": "d90f5eeb8f18213b8d009d6503000842"
  },
  {
    "url": "assets/data/tag/umbrella/index.json",
    "revision": "4e132d6ff6eb43cf8d253d001d8347e4"
  },
  {
    "url": "assets/data/tag/vacuum-flask/index.json",
    "revision": "19dcd9d3b724e3e4f0cd03e76a699b70"
  },
  {
    "url": "assets/js/11.13233969.js",
    "revision": "90d29d6ec026ed96369eaaac7d9da43e"
  },
  {
    "url": "assets/js/12.ed137325.js",
    "revision": "95c966ac33c3a3a836ee3dbf4775954a"
  },
  {
    "url": "assets/js/app.3909dc2c.js",
    "revision": "79e3d70f59d3442dcd578d6a11a67c45"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.1b42363e.js",
    "revision": "6fcfa5692c04692db92072f8cd070af8"
  },
  {
    "url": "assets/js/page--src--pages--catalogs-vue.c413e4c3.js",
    "revision": "305bebaeb8b2aea8211c3e9eb6c25b53"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.16d411d6.js",
    "revision": "4256d5f5b41969c1decb680645a8c95d"
  },
  {
    "url": "assets/js/page--src--pages--customer-vue.97f260e4.js",
    "revision": "c66a452cab9470ee96c33990090f8c7d"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.2fe522b8.js",
    "revision": "96011db105aa30cdacb5db8857a4da46"
  },
  {
    "url": "assets/js/page--src--pages--products-vue.011aee35.js",
    "revision": "f43ec15802ffc61d012577eb77cbea3e"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.f8efb63e.js",
    "revision": "e282cd2d415851156a6c6c76a25bde79"
  },
  {
    "url": "assets/js/page--src--templates--product-vue.ed6d8d28.js",
    "revision": "32994a936fb8a773564b4277ef3705bb"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.5231ce85.js",
    "revision": "f7776768d16b058237e94522e195d206"
  },
  {
    "url": "assets/static/_MG_0220.1b91758.5107fae.jpg",
    "revision": "348a4dea0ed440a4685fd71fe5d73531"
  },
  {
    "url": "assets/static/_MG_0220.d12e930.5107fae.jpg",
    "revision": "1d96a796c9e1ad8a6d29a911ddd21a4c"
  },
  {
    "url": "assets/static/color-2.1b91758.982e15f.jpg",
    "revision": "b993ee8fb5b5d1e3421b7d53a06e3eaf"
  },
  {
    "url": "assets/static/color-2.3df3210.982e15f.jpg",
    "revision": "b582cada965fef46d19883f5f57db7b5"
  },
  {
    "url": "assets/static/favicon.1539b60.8cfbf28.png",
    "revision": "4b7767f97bf1facbe95a0cd4a525004c"
  },
  {
    "url": "assets/static/favicon.62d22cb.8cfbf28.png",
    "revision": "0a70799ad56ca23d58bc8655be04ea32"
  },
  {
    "url": "assets/static/favicon.7b22250.8cfbf28.png",
    "revision": "e3c5604feb031c78cf18f31a3c710944"
  },
  {
    "url": "assets/static/favicon.ac8d93a.8cfbf28.png",
    "revision": "aa12220dfa88ec9deed284028297a2a2"
  },
  {
    "url": "assets/static/favicon.b9532cc.8cfbf28.png",
    "revision": "7809b5fd094f7a290df7acf9c25eee6f"
  },
  {
    "url": "assets/static/favicon.ce0531f.8cfbf28.png",
    "revision": "a75fbdcb9d2872d82bb6fd583452c0ef"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.8cfbf28.png",
    "revision": "f9da2391561927d59a2ea0c164167460"
  },
  {
    "url": "assets/static/favicon.f22e9f3.8cfbf28.png",
    "revision": "8dd773e2f73753d82ea5e5cd519b0101"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "8cfbf28a1132994cf3201d8de822d265"
  },
  {
    "url": "assets/static/giftbox-logo.3dc4e3e.aa35173.png",
    "revision": "233e1c0284af9c98ac0058a89acac6a1"
  },
  {
    "url": "assets/static/pen.1b91758.1a1e920.jpg",
    "revision": "d47fd354bfc166772ef79de7df5bfea2"
  },
  {
    "url": "assets/static/pen.bd64798.1a1e920.jpg",
    "revision": "f39cb1024a7701f4d9824643ccdbc0ec"
  },
  {
    "url": "assets/static/powerbank-veger.1b91758.314b833.jpg",
    "revision": "e7fab1562527bdd0e2a4c4fb40279e61"
  },
  {
    "url": "assets/static/powerbank-veger.3df3210.314b833.jpg",
    "revision": "f553aed27f99d0c97569ccfd3cb99091"
  },
  {
    "url": "assets/static/tumbler-daytona.1b91758.ff4c6c6.png",
    "revision": "e610f356fb687ff94dee71ff3fcc6321"
  },
  {
    "url": "assets/static/tumbler-daytona.d12e930.ff4c6c6.png",
    "revision": "901c9d97fb2891e2e093724bd7dc5d52"
  },
  {
    "url": "assets/static/umbrella-foldable.1b91758.cd013ce.jpg",
    "revision": "6e7db66300d0dab6f760ef6dbfe63bfb"
  },
  {
    "url": "assets/static/umbrella-foldable.a932647.cd013ce.jpg",
    "revision": "2a8990b68efaa647d265f4b5eefdb451"
  },
  {
    "url": "assets/static/umbrella-standard.1b91758.923200f.jpg",
    "revision": "3b60841ff1db1e6041c2f284846a19aa"
  },
  {
    "url": "assets/static/umbrella-standard.d12e930.923200f.jpg",
    "revision": "c2bbecd1347b5b70aa089e47f84a73d8"
  },
  {
    "url": "assets/static/vacuum-flask.1b91758.4b7a099.png",
    "revision": "5bbc915faba2f959b5899833bb58c7a0"
  },
  {
    "url": "assets/static/vacuum-flask.d12e930.4b7a099.png",
    "revision": "4f32f104071a1f9439b2be0d5b520c5f"
  },
  {
    "url": "assets/static/white.1b91758.7815772.png",
    "revision": "60790389e5e879aef21f190863956965"
  },
  {
    "url": "assets/static/white.d6356bc.7815772.png",
    "revision": "6b86d8b3009a5f9a036b53f99c3e8c18"
  },
  {
    "url": "blog/markdown-styling/index.html",
    "revision": "7186571a4de7cdac472d21926cf50248"
  },
  {
    "url": "blog/writing-in-markdown/index.html",
    "revision": "e1a589c6f80bb411fb950d7a638f22d8"
  },
  {
    "url": "catalogs/index.html",
    "revision": "ac111db948cfa5858826c825a416d79c"
  },
  {
    "url": "contact/index.html",
    "revision": "4c51d2ed06d003c8cff29ed7921e573d"
  },
  {
    "url": "customer/index.html",
    "revision": "53cf74f2c8da24751660d30bf1137315"
  },
  {
    "url": "images/giftbox-logo.png",
    "revision": "aa351737de2b9687b276509919501dd4"
  },
  {
    "url": "images/giftbox-logo.svg",
    "revision": "064f071c80bb61d95920de544aa5fcc8"
  },
  {
    "url": "images/surapati.printing.logo.svg",
    "revision": "044804ef161d800bd1a3add1e8fa0866"
  },
  {
    "url": "index.html",
    "revision": "535577f0918a07034cc5a32ea546f864"
  },
  {
    "url": "manifest.json",
    "revision": "5e3f64e4f343ffde313633bf81622451"
  },
  {
    "url": "product/baby-kids-gift/index.html",
    "revision": "916777c6f8ceacc59dd794494fbe76c7"
  },
  {
    "url": "product/bags-spunbond/index.html",
    "revision": "e7c7505efb5486e00302de1ff4320c4a"
  },
  {
    "url": "product/mug-standard/index.html",
    "revision": "1528825e1485b75847a1512f74eb8ae7"
  },
  {
    "url": "product/pen/index.html",
    "revision": "d6e5fa039ea7e4142d5e4d4b2d9411ed"
  },
  {
    "url": "product/tumbler-daytona/index.html",
    "revision": "15c339c2528c42c37d7bc1f9f9cab0d6"
  },
  {
    "url": "product/umbrella-foldable/index.html",
    "revision": "0c88bc0f38efae7e5bfdf00bd514ba3f"
  },
  {
    "url": "product/umbrella-standard/index.html",
    "revision": "d4649089e42d8555ec5d5e780b51d4c5"
  },
  {
    "url": "product/vacuum-flask/index.html",
    "revision": "821ce52859bd7c6aa0fa9e80d8a47106"
  },
  {
    "url": "product/veger-powerbank/index.html",
    "revision": "b478831c313a35a02927daeadd74dcfd"
  },
  {
    "url": "products/2/index.html",
    "revision": "73db11bcc157b08c12580297a90bd9ee"
  },
  {
    "url": "products/3/index.html",
    "revision": "8741c3fc957a277fc027c378f9d11eef"
  },
  {
    "url": "products/4/index.html",
    "revision": "2c430c3c50a18941f6da8fe542d01356"
  },
  {
    "url": "products/5/index.html",
    "revision": "107ef4d6d83700c93ac197c9a701c13b"
  },
  {
    "url": "products/6/index.html",
    "revision": "39a25a14109f25838bf5fdbb14fffd65"
  },
  {
    "url": "products/7/index.html",
    "revision": "db44978e5895b90bd1f030eb01a14c0a"
  },
  {
    "url": "products/8/index.html",
    "revision": "01d97f3139cc72de794ab641801b3a4a"
  },
  {
    "url": "products/9/index.html",
    "revision": "b71657fbffa91a9b698391669d0ab3a6"
  },
  {
    "url": "products/index.html",
    "revision": "44372c31ecb666c1ae149813b84389f6"
  },
  {
    "url": "tag/baby-kids-gift/index.html",
    "revision": "92b2f1cab643738150c9a4693006db30"
  },
  {
    "url": "tag/bags/index.html",
    "revision": "7e96b63fd4f8d51066eadb7a2b75d2d3"
  },
  {
    "url": "tag/goodie-bags/index.html",
    "revision": "4f578d327a63a7192fcf5a3d709d36b5"
  },
  {
    "url": "tag/pen/index.html",
    "revision": "6b22efaa06643f316c05676a74c6c5eb"
  },
  {
    "url": "tag/power-bank/index.html",
    "revision": "5fa2ee4b1b5170cf4cb81528efae7793"
  },
  {
    "url": "tag/tumbler/index.html",
    "revision": "d5a225ca2794c87b4f3fc86b80a08cf9"
  },
  {
    "url": "tag/umbrella/index.html",
    "revision": "ebd9274377c3a12c7eb249952f390377"
  },
  {
    "url": "tag/vacuum-flask/index.html",
    "revision": "3cb20ab556247a69cdbd02953c55abdb"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "tag/tumbler",
    "revision": "b564af6925e6b977cd3fb18ce8255ab5"
  },
  {
    "url": "tag/umbrella",
    "revision": "5db307a379a785c64674729eeb9bbdbe"
  },
  {
    "url": "tag/pen",
    "revision": "c7b63cdf06839d276eba7afc5d719a03"
  },
  {
    "url": "tag/vacuum-flask",
    "revision": "7d5be84ae2f3187bb3d2f90793c657bc"
  },
  {
    "url": "tag/power-bank",
    "revision": "588c80dc910161dd769f228ddaa0eceb"
  },
  {
    "url": "tag/baby-kids-gift",
    "revision": "c99aca1900bf4fbd086ed23b4e162536"
  },
  {
    "url": "tag/bags",
    "revision": "a7ab6d4e0d00738cfbc524fdbadc92a9"
  },
  {
    "url": "tag/goodie-bags",
    "revision": "d48cfcfb36ddbe991c676f749d1a1d88"
  },
  {
    "url": "products",
    "revision": "6c61dbc6ba3b9e3efbf419d0183b0608"
  },
  {
    "url": "products/2",
    "revision": "64110de5a4d9b29ceee8a57d9b7a526a"
  },
  {
    "url": "products/3",
    "revision": "f05d2f2e1ae01f31f9e91fdfdb824cdf"
  },
  {
    "url": "products/4",
    "revision": "bedb55e0ef9f630cf54f1ca061805e2a"
  },
  {
    "url": "products/5",
    "revision": "7e920419b488ae340276951764926669"
  },
  {
    "url": "products/6",
    "revision": "8a982e6e34e4e551c819bab06941abbf"
  },
  {
    "url": "products/7",
    "revision": "b2ef1aff8e80f13a992e5d78f546aceb"
  },
  {
    "url": "products/8",
    "revision": "701fd43acc2925afda4b297a42a55f57"
  },
  {
    "url": "products/9",
    "revision": "748feba63d68d95a4b81c6ab792c5489"
  },
  {
    "url": "product/baby-kids-gift",
    "revision": "7141a184f98a7bbae2ff1eb7ddb52845"
  },
  {
    "url": "product/bags-spunbond",
    "revision": "c4bccd3ec5ca3a56f25ee3c50e8c4740"
  },
  {
    "url": "product/mug-standard",
    "revision": "57ab65d211c990ac5b41dfdd38ca9db8"
  },
  {
    "url": "product/pen",
    "revision": "882a9e1b76eac2ced1342eaa3096388a"
  },
  {
    "url": "product/veger-powerbank",
    "revision": "9e10ce852bca336e80361f33b07fa360"
  },
  {
    "url": "product/tumbler-daytona",
    "revision": "75a20bcd08e125ea32a23cb575bf9016"
  },
  {
    "url": "product/umbrella-foldable",
    "revision": "a8fe98b367ee05bbf25728e9769031b7"
  },
  {
    "url": "product/umbrella-standard",
    "revision": "452ca92675897165521efd705b72a0cf"
  },
  {
    "url": "product/vacuum-flask",
    "revision": "465c0f4ab89d423962e60bcaedcf5f97"
  },
  {
    "url": "blog/writing-in-markdown",
    "revision": "b6dc118d137298c1181eb0698a6d4a33"
  },
  {
    "url": "blog/markdown-styling",
    "revision": "6e4791a6f0aa8db00c3871c1b47ca129"
  },
  {
    "url": "catalogs",
    "revision": "73013b6c8c4952c6de827175b9d96dd6"
  },
  {
    "url": "contact",
    "revision": "8048a6aaa865ac645f16b02a79e059dc"
  },
  {
    "url": "customer",
    "revision": "223719174b53d388c0948a03c1607df1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
