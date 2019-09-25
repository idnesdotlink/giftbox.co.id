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
    "revision": "c32319044b9c1b7319b6a191c15b5e8e"
  },
  {
    "url": "404/index.html",
    "revision": "c32319044b9c1b7319b6a191c15b5e8e"
  },
  {
    "url": "assets/css/0.styles.97ba833d.css",
    "revision": "1672abdf41b225cb4d097e3b66ec0510"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2db88e2688191c9b6ec7ca680acc8c39"
  },
  {
    "url": "assets/data/blog/markdown-styling/index.json",
    "revision": "b86793c88bd1d000f1fbf819169410b1"
  },
  {
    "url": "assets/data/blog/writing-in-markdown/index.json",
    "revision": "2a084c953274a43c583b2934bcb2094b"
  },
  {
    "url": "assets/data/catalogs/index.json",
    "revision": "2db88e2688191c9b6ec7ca680acc8c39"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "2db88e2688191c9b6ec7ca680acc8c39"
  },
  {
    "url": "assets/data/customer/index.json",
    "revision": "2db88e2688191c9b6ec7ca680acc8c39"
  },
  {
    "url": "assets/data/index.json",
    "revision": "80458249d683e27594281cfb03a4e400"
  },
  {
    "url": "assets/data/product/baby-kids-gift/index.json",
    "revision": "4c10b31d4ee0c60d7c5eb4761c7cf3a1"
  },
  {
    "url": "assets/data/product/bags-spunbond/index.json",
    "revision": "f3b6f3475bb098f9fa3be78e00115f0d"
  },
  {
    "url": "assets/data/product/mug-standard/index.json",
    "revision": "6469d35511f2cacfbc547ab75a4671f9"
  },
  {
    "url": "assets/data/product/pen/index.json",
    "revision": "b1081376badd388c93c89db71813dd90"
  },
  {
    "url": "assets/data/product/tumbler-daytona/index.json",
    "revision": "54101213c664cef1cb0ae1c63ad40112"
  },
  {
    "url": "assets/data/product/umbrella-foldable/index.json",
    "revision": "ec4fd0fe5af2d12dea3dc321afa5255c"
  },
  {
    "url": "assets/data/product/umbrella-standard/index.json",
    "revision": "e90200dcfc2fe30ef47a86fb019838b9"
  },
  {
    "url": "assets/data/product/vacuum-flask/index.json",
    "revision": "943e7c074045698d9023b0d3200dd378"
  },
  {
    "url": "assets/data/product/veger-powerbank/index.json",
    "revision": "78a47931a689b54be67facc054d102f4"
  },
  {
    "url": "assets/data/products/2/index.json",
    "revision": "ac048fe5ec7b25d0ba88c3d5fef19bea"
  },
  {
    "url": "assets/data/products/3/index.json",
    "revision": "5b9702d33b427838802a59f1efaf5c60"
  },
  {
    "url": "assets/data/products/4/index.json",
    "revision": "911863c3dcd537f5c21ddbc79d6d33c4"
  },
  {
    "url": "assets/data/products/5/index.json",
    "revision": "3f2b1fff855fdeac28755b0fad33e4e0"
  },
  {
    "url": "assets/data/products/6/index.json",
    "revision": "19bca678d5022d89837f0c5d03acd410"
  },
  {
    "url": "assets/data/products/7/index.json",
    "revision": "6b233b4a70e3b339ed5a09d7884068e9"
  },
  {
    "url": "assets/data/products/8/index.json",
    "revision": "e8d82b1643310d5e43ba1c0ae95be7e6"
  },
  {
    "url": "assets/data/products/9/index.json",
    "revision": "fe38f9ca7aecf02507c924c959777f7e"
  },
  {
    "url": "assets/data/products/index.json",
    "revision": "9a9b2b3a8b82c88ae1a44756c9fc32bc"
  },
  {
    "url": "assets/data/tag/baby-kids-gift/index.json",
    "revision": "46b511a4775b27f389fd2c9f9caa0e7c"
  },
  {
    "url": "assets/data/tag/bags/index.json",
    "revision": "6e5fd53b7467d47667fb92a0105e245d"
  },
  {
    "url": "assets/data/tag/goodie-bags/index.json",
    "revision": "02eeb5d464af2e43060839edb467ea79"
  },
  {
    "url": "assets/data/tag/pen/index.json",
    "revision": "6eee6d6bd5f113e7d4745fd4456b1f1d"
  },
  {
    "url": "assets/data/tag/power-bank/index.json",
    "revision": "111cab6c03de5cdd6c5c0a541c069151"
  },
  {
    "url": "assets/data/tag/tumbler/index.json",
    "revision": "5697082a3763bf76801bd9f3fa93502c"
  },
  {
    "url": "assets/data/tag/umbrella/index.json",
    "revision": "c9df3402493effc4e6e781907ccb231c"
  },
  {
    "url": "assets/data/tag/vacuum-flask/index.json",
    "revision": "a7eb0fa84e8ccb77c7075d43f8cfe40e"
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
    "url": "assets/js/app.a6088d24.js",
    "revision": "e213ad9f5b85121c6c9996268d4a8e9b"
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
    "url": "assets/js/page--src--pages--index-vue.d672aaf9.js",
    "revision": "96011db105aa30cdacb5db8857a4da46"
  },
  {
    "url": "assets/js/page--src--pages--products-vue.2f3579d2.js",
    "revision": "f43ec15802ffc61d012577eb77cbea3e"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.f98413a9.js",
    "revision": "e282cd2d415851156a6c6c76a25bde79"
  },
  {
    "url": "assets/js/page--src--templates--product-vue.a7bb29e6.js",
    "revision": "32994a936fb8a773564b4277ef3705bb"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.3a1d1428.js",
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
    "revision": "2744920bcd742ceb97c013010c3d9015"
  },
  {
    "url": "blog/writing-in-markdown/index.html",
    "revision": "410f799e25536aa9ee5ef3681a0daf15"
  },
  {
    "url": "catalogs/index.html",
    "revision": "55daf5069912d202c65205741e626394"
  },
  {
    "url": "contact/index.html",
    "revision": "8aa307639cfe313f229e569a083db33f"
  },
  {
    "url": "customer/index.html",
    "revision": "14916a1cc56ffdb4b9cf16e2961f6bbb"
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
    "revision": "94994d89e27df0e0781633c7b9ec334c"
  },
  {
    "url": "manifest.json",
    "revision": "82ec89ee0e8e052575466c1ec674c7d0"
  },
  {
    "url": "product/baby-kids-gift/index.html",
    "revision": "0e681c399ebd326be42aab627418d857"
  },
  {
    "url": "product/bags-spunbond/index.html",
    "revision": "b66bac983d8af3dd22d0529f35ea356a"
  },
  {
    "url": "product/mug-standard/index.html",
    "revision": "1725879a8bc6b699e7e5c7ccb2f1e30d"
  },
  {
    "url": "product/pen/index.html",
    "revision": "44cd7aaf43a6bf019acf76a55979bc6f"
  },
  {
    "url": "product/tumbler-daytona/index.html",
    "revision": "2503145a9c7b14eecd1cfaa10d4f03b2"
  },
  {
    "url": "product/umbrella-foldable/index.html",
    "revision": "da2c74699e8a82ba2295615dcaa8819d"
  },
  {
    "url": "product/umbrella-standard/index.html",
    "revision": "8aa20780cc94ee91721ceb125e77b8c1"
  },
  {
    "url": "product/vacuum-flask/index.html",
    "revision": "41f0ac2b6e59d68f7ce5e15c17e9f322"
  },
  {
    "url": "product/veger-powerbank/index.html",
    "revision": "fdb702b76e0e4caa8c30ee4c8732c151"
  },
  {
    "url": "products/2/index.html",
    "revision": "fd278a60253964800e1e0a97aaccd8bd"
  },
  {
    "url": "products/3/index.html",
    "revision": "c2232001f8e7fb4947c739e68eb49a2a"
  },
  {
    "url": "products/4/index.html",
    "revision": "0b7c18e3b9d37c9ba965c1b505f3f552"
  },
  {
    "url": "products/5/index.html",
    "revision": "0ab3dad5acfc2207cf345faa71b67169"
  },
  {
    "url": "products/6/index.html",
    "revision": "1e38c0e335f2e426b9639ef9de3953fe"
  },
  {
    "url": "products/7/index.html",
    "revision": "d5c7f731b7ea40ed0c6011da111277ae"
  },
  {
    "url": "products/8/index.html",
    "revision": "ae84c0ef89fd3af9df58ff81414d8edd"
  },
  {
    "url": "products/9/index.html",
    "revision": "0ad590327dadedb2828ab1f033dbf8cb"
  },
  {
    "url": "products/index.html",
    "revision": "b09497d4a5e72910c6abb5e2c95608e7"
  },
  {
    "url": "tag/baby-kids-gift/index.html",
    "revision": "dc5158476e582ba1d92276e76119bcf9"
  },
  {
    "url": "tag/bags/index.html",
    "revision": "03a1ccc5815d5ecc2120e34c8489f364"
  },
  {
    "url": "tag/goodie-bags/index.html",
    "revision": "15e3a3854dd7d5533d113b42f6f4cdc0"
  },
  {
    "url": "tag/pen/index.html",
    "revision": "6518b6c71a192090529a8eedc3e88888"
  },
  {
    "url": "tag/power-bank/index.html",
    "revision": "5d9f980be0072f6943d097bb9d79dacb"
  },
  {
    "url": "tag/tumbler/index.html",
    "revision": "7e5e557507f090caa7d81729e91baf8d"
  },
  {
    "url": "tag/umbrella/index.html",
    "revision": "3fbdd1c590a9d78aefd8f0b92cbf46dd"
  },
  {
    "url": "tag/vacuum-flask/index.html",
    "revision": "7e83ed7a11ba63fc2c2be67a7276b801"
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
    "url": "product/vacuum-flask",
    "revision": "465c0f4ab89d423962e60bcaedcf5f97"
  },
  {
    "url": "product/umbrella-standard",
    "revision": "452ca92675897165521efd705b72a0cf"
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
