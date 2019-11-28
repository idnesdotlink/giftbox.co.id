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
    "revision": "7ecc464beaa7d419a41bb5d64387b7b6"
  },
  {
    "url": "404/index.html",
    "revision": "7ecc464beaa7d419a41bb5d64387b7b6"
  },
  {
    "url": "assets/css/styles.styles.9b4a7fe8.css",
    "revision": "17f468de65387df2af835fdadba29dad"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/blog/blog-one-title/index.json",
    "revision": "b7d4bc77047ecf1e42dc1bab91160360"
  },
  {
    "url": "assets/data/blog/blog-two-title/index.json",
    "revision": "3906a39a51284441ce410e4b1482034f"
  },
  {
    "url": "assets/data/blog/corporate-gifts-the-key-to-customer-retention/index.json",
    "revision": "0370a9b551de6a07aaa16b92190b3411"
  },
  {
    "url": "assets/data/blog/diff/index.json",
    "revision": "bf9f0a72ed845831d18772b0311b310c"
  },
  {
    "url": "assets/data/blog/how/index.json",
    "revision": "495288690158de32953c75999680cfa9"
  },
  {
    "url": "assets/data/blog/title/index.json",
    "revision": "2ba21f95fa28ce7f2feb8c3e92450f8a"
  },
  {
    "url": "assets/data/blog/why/index.json",
    "revision": "5b52aa467b4f3f33abb1766346b02461"
  },
  {
    "url": "assets/data/blogs/2/index.json",
    "revision": "32daba2ffe592477cb7b24d19f60bb74"
  },
  {
    "url": "assets/data/blogs/3/index.json",
    "revision": "058b8b029204d66fd3fef7d7e934ed37"
  },
  {
    "url": "assets/data/blogs/4/index.json",
    "revision": "f08443c983b915b4cd8ee70f87667efb"
  },
  {
    "url": "assets/data/blogs/5/index.json",
    "revision": "c145cd3e5a7908c0379aa0f56498b063"
  },
  {
    "url": "assets/data/blogs/6/index.json",
    "revision": "485940f339840e19d1e00f957e28d559"
  },
  {
    "url": "assets/data/blogs/7/index.json",
    "revision": "11274c74e1a206f0ce5cc0f5ec497074"
  },
  {
    "url": "assets/data/blogs/index.json",
    "revision": "5fedc88a89a1b8bcb435eda12993ec94"
  },
  {
    "url": "assets/data/catalog/2019/index.json",
    "revision": "5a29c1f051066d9f842cfa1cdcda75ce"
  },
  {
    "url": "assets/data/catalogs/index.json",
    "revision": "afc43dc18c8d0940e79f3da12244ab53"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/customer/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-1/index.json",
    "revision": "ac545095c2fb13997b4638d5b811977e"
  },
  {
    "url": "assets/data/home-10/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-11/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-2/index.json",
    "revision": "2ee2461f98a651d1f54ce00f4e2dbb36"
  },
  {
    "url": "assets/data/home-3/index.json",
    "revision": "c9fe05beb8a60459332104fdab6dfe16"
  },
  {
    "url": "assets/data/home-4/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-5/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-6/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-7/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/home-8/index.json",
    "revision": "eb401b032753c109fb88a29fec153038"
  },
  {
    "url": "assets/data/home-9/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/index.json",
    "revision": "4b825000f797151f1f6e2d2f194957f9"
  },
  {
    "url": "assets/data/old-index/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/data/product/baby-kids-gift/index.json",
    "revision": "7b7e8dbb99c82bc91097ff6418fd81d7"
  },
  {
    "url": "assets/data/product/bags-spunbond/index.json",
    "revision": "315e3a2799f18d74bcb6a9cb4d614afc"
  },
  {
    "url": "assets/data/product/gift-set/index.json",
    "revision": "781f03ff8890c786d58f0615e0accf19"
  },
  {
    "url": "assets/data/product/mug-standard/index.json",
    "revision": "391d96663e6a3b727f7d28e058c8ad4f"
  },
  {
    "url": "assets/data/product/pen/index.json",
    "revision": "918bd8aa9cb997a3316c4084df5b8815"
  },
  {
    "url": "assets/data/product/tumbler-daytona/index.json",
    "revision": "7f59d39284cb2d60d2ed8e2f296ea30a"
  },
  {
    "url": "assets/data/product/umbrella-foldable/index.json",
    "revision": "74ec440e07bbeb14cf194c8d3fc8f28b"
  },
  {
    "url": "assets/data/product/umbrella-standard/index.json",
    "revision": "22c8fd8ebf90076575f86bb9dd4d8eb3"
  },
  {
    "url": "assets/data/product/vacuum-flask/index.json",
    "revision": "9a35d0b125d48088bf9c3a911e4c092c"
  },
  {
    "url": "assets/data/product/veger-powerbank/index.json",
    "revision": "cf5ec2a674f03504a40f6b6310aa7266"
  },
  {
    "url": "assets/data/products/2/index.json",
    "revision": "f56e569c69ac74d0e05fa70ddb13072e"
  },
  {
    "url": "assets/data/products/3/index.json",
    "revision": "979d8a389a24d58f12ef02eab8e67c26"
  },
  {
    "url": "assets/data/products/4/index.json",
    "revision": "633d4a60156ec7de9d8913ad421c753c"
  },
  {
    "url": "assets/data/products/index.json",
    "revision": "0220e8951cc7878fe4d2c02034914572"
  },
  {
    "url": "assets/data/tag/apparel/index.json",
    "revision": "4560610cdad1635952aa6504f6d21749"
  },
  {
    "url": "assets/data/tag/baby-kids-gift/index.json",
    "revision": "cb492c4c423bd484868aee6583ef871b"
  },
  {
    "url": "assets/data/tag/bags/index.json",
    "revision": "859e358dc7cf0e35d609fd313da81a04"
  },
  {
    "url": "assets/data/tag/flashdrive/index.json",
    "revision": "c59ea70d874481fd1d367e684d340da9"
  },
  {
    "url": "assets/data/tag/gift-set/index.json",
    "revision": "3dcb23ec16845a7fbda101ffdd6781e1"
  },
  {
    "url": "assets/data/tag/goodie-bags/index.json",
    "revision": "4ce5e7055e7805a0278184a5f0ae3d9b"
  },
  {
    "url": "assets/data/tag/pen/index.json",
    "revision": "eb2f9ec84381cf53e6e1b2b008180ef2"
  },
  {
    "url": "assets/data/tag/pouch-and-bag/index.json",
    "revision": "5de4bb2fe37986f5e8701da9033c5152"
  },
  {
    "url": "assets/data/tag/power-bank/index.json",
    "revision": "32e6145c6a3d98a58de7f1d12c339f61"
  },
  {
    "url": "assets/data/tag/stationeries/index.json",
    "revision": "0c9ee0a977f22b2ac3f3a12fb036875e"
  },
  {
    "url": "assets/data/tag/tumbler/index.json",
    "revision": "5a7f872d962806f0e0384973a1c2261d"
  },
  {
    "url": "assets/data/tag/umbrella/index.json",
    "revision": "e882135183c3a0f5a82b40170a3fa25c"
  },
  {
    "url": "assets/data/tag/vacuum-flask/index.json",
    "revision": "aef6bff547acf1f6dee3f9028303cb5a"
  },
  {
    "url": "assets/data/what/index.json",
    "revision": "3f2b712cb09ebd87a543464d98787ace"
  },
  {
    "url": "assets/img/close.9aaaaaff.svg",
    "revision": "9aaaaaffbe1c7597b0d998e4ad71ca87"
  },
  {
    "url": "assets/img/curve1.f5669d20.svg",
    "revision": "f5669d20687b98175d5110c0cbdee513"
  },
  {
    "url": "assets/img/curve2.455c2b27.svg",
    "revision": "455c2b2751fefbfb63ee1c4876b891a6"
  },
  {
    "url": "assets/img/curve3.3d96bb17.svg",
    "revision": "3d96bb177346d35da7f4251c0df0662b"
  },
  {
    "url": "assets/img/fa-brands-400.a9c4bb73.svg",
    "revision": "a9c4bb7348f42626454c988dbde1d0a0"
  },
  {
    "url": "assets/img/fa-regular-400.7b9568e6.svg",
    "revision": "7b9568e6389b1f8ae0902cd39665fc1e"
  },
  {
    "url": "assets/img/fa-solid-900.c2801fb4.svg",
    "revision": "c2801fb415f03c7b170934769d7b5397"
  },
  {
    "url": "assets/img/giftbox-box.8cfbf28a.png",
    "revision": "8cfbf28a1132994cf3201d8de822d265"
  },
  {
    "url": "assets/img/giftbox-logo.064f071c.svg",
    "revision": "064f071c80bb61d95920de544aa5fcc8"
  },
  {
    "url": "assets/img/menu.35cd8a61.svg",
    "revision": "35cd8a61c8f4ba1fa4fb0785f8d09193"
  },
  {
    "url": "assets/img/search2.3d0e7255.svg",
    "revision": "3d0e7255956eeb96750f1296f9b91ad3"
  },
  {
    "url": "assets/js/0.dd605062.js",
    "revision": "0fd1c9bdf1f6ea858729b3bc71c6d9b3"
  },
  {
    "url": "assets/js/1.5eceb0b7.js",
    "revision": "616ab5baef9de4a10d6c87dd30740bf4"
  },
  {
    "url": "assets/js/app.06a435ff.js",
    "revision": "1f7af1a0cfe58d76368923706f60933c"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.9a161e20.js",
    "revision": "ccb433ec04d32c313db7908af2ab84f1"
  },
  {
    "url": "assets/js/page--src--pages--blogs-vue.8f1ce39f.js",
    "revision": "b482a868f7f0ef4ba6fb3da6edeeff7f"
  },
  {
    "url": "assets/js/page--src--pages--blogs-vue~page--src--pages--home-8-vue~page--src--pages--index-vue~page--src--page~6424eb09.56fa4e5d.js",
    "revision": "c488df0c70010eb521e294e0b1412d6d"
  },
  {
    "url": "assets/js/page--src--pages--blogs-vue~page--src--pages--home-8-vue~page--src--pages--index-vue~page--src--page~c226bbd3.9f4fd43e.js",
    "revision": "f05409d06738acd425f01a64bf7abfa8"
  },
  {
    "url": "assets/js/page--src--pages--blogs-vue~page--src--pages--home-8-vue~page--src--pages--index-vue~page--src--page~e8cff32f.4ec60e76.js",
    "revision": "d0bcfd2320df52edda8a7a894db4696c"
  },
  {
    "url": "assets/js/page--src--pages--catalogs-vue.2e84dbed.js",
    "revision": "4126231bba876a0a07abf19f4bc189d0"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.864ef314.js",
    "revision": "96085372f78be58c2175918753744ba6"
  },
  {
    "url": "assets/js/page--src--pages--customer-vue.c5e742fa.js",
    "revision": "1b52959fbb8a1b16b9995c875cfb8da5"
  },
  {
    "url": "assets/js/page--src--pages--home-1-vue.ba37876b.js",
    "revision": "ac0975e392596876c9935dcd3d2151ec"
  },
  {
    "url": "assets/js/page--src--pages--home-10-vue.f783d4ae.js",
    "revision": "25a070d39d038bd68bd204255c7358f5"
  },
  {
    "url": "assets/js/page--src--pages--home-11-vue.7586c627.js",
    "revision": "54d79a4de014dfbcdb0af5179a358114"
  },
  {
    "url": "assets/js/page--src--pages--home-2-vue.84bfbef8.js",
    "revision": "bca2c85277685e86d67e304a795d6db7"
  },
  {
    "url": "assets/js/page--src--pages--home-3-vue.0ee4d4af.js",
    "revision": "237bd5a1fac246854fc42b1c011fa016"
  },
  {
    "url": "assets/js/page--src--pages--home-4-vue.bb598a9d.js",
    "revision": "6a10f51e34af5452834190c49d1e150a"
  },
  {
    "url": "assets/js/page--src--pages--home-5-vue.50097334.js",
    "revision": "5cd51e271d94a0082d7f57cbb6ee48b8"
  },
  {
    "url": "assets/js/page--src--pages--home-6-vue.4e12717a.js",
    "revision": "5611e39b48ac515d13f8db8e1068708a"
  },
  {
    "url": "assets/js/page--src--pages--home-7-vue.23f9afe6.js",
    "revision": "571c0b68fb77d1bd7cf459ccda9440d7"
  },
  {
    "url": "assets/js/page--src--pages--home-8-vue.679af8ce.js",
    "revision": "356d8f2779b5cc3cef384d37cd30184a"
  },
  {
    "url": "assets/js/page--src--pages--home-8-vue~page--src--pages--index-vue.d5b8b4d5.js",
    "revision": "71efe924c06ae952f0c318ade2a78e95"
  },
  {
    "url": "assets/js/page--src--pages--home-9-vue.e1ee9104.js",
    "revision": "dd28d61c1edbe7bdabca37c2a7faaf64"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.ef9439b0.js",
    "revision": "5cacdde3833b3d7ff6761586a865bd90"
  },
  {
    "url": "assets/js/page--src--pages--old-index-vue.da83e129.js",
    "revision": "f2c49c26358bc02251c093c0ffe4ba76"
  },
  {
    "url": "assets/js/page--src--pages--products-vue.62796912.js",
    "revision": "0ec4d04d1ab9047963eef618dc65b606"
  },
  {
    "url": "assets/js/page--src--pages--what-vue.f5cb2760.js",
    "revision": "cbcbba449e1b6e52582c1fd2563237a9"
  },
  {
    "url": "assets/js/page--src--templates--catalog-vue.8225dfbd.js",
    "revision": "a372c13f02348ef0a17dc826223e1fae"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.b556b966.js",
    "revision": "6477025d4cc35f8e4d1e688fa1ef554b"
  },
  {
    "url": "assets/js/page--src--templates--product-vue.63522324.js",
    "revision": "0684d5dc0051001f907b8cce4c2a6fc8"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.405e87ee.js",
    "revision": "233b017004fb784de4a214bbddbbe559"
  },
  {
    "url": "assets/js/vendors~page--src--pages--blogs-vue~page--src--pages--home-8-vue~page--src--pages--index-vue~page--s~02fabfba.f85f45c3.js",
    "revision": "024529f9133c4fae64b68bd348c68ea9"
  },
  {
    "url": "assets/static/0162.d12e930.e4539f82eeb0d9eb30e8aa376573b0f6.jpg",
    "revision": "25bb1631552c51a83407851e4919273c"
  },
  {
    "url": "assets/static/2019.9ccc4e6.c669a63adb2ed7331d89480fc3470c00.png",
    "revision": "ec48a6ceb40fcc5dd3ee93a2523b27d0"
  },
  {
    "url": "assets/static/agate.5e31822.46d8fbe12f304a058d61674e169f4f60.png",
    "revision": "097591fa5f86181232cd207cb0ce4a46"
  },
  {
    "url": "assets/static/bca.5e31822.0c517619ba7ce44fc2cfb17087b2d568.png",
    "revision": "25c25ba6950346382a13f8378c08948e"
  },
  {
    "url": "assets/static/bri.5e31822.310176fc4c8c2b5459663e9b0a58d428.png",
    "revision": "287760315ed19a437550e81ad78dcc5e"
  },
  {
    "url": "assets/static/btn.5e31822.babf4dc10df41dd2e83412fb1a3673ba.png",
    "revision": "26c4337708d5f7df51547959413ba892"
  },
  {
    "url": "assets/static/color-2.1b91758.982e15f9e524207be88fdeb2c73b6827.jpg",
    "revision": "b993ee8fb5b5d1e3421b7d53a06e3eaf"
  },
  {
    "url": "assets/static/color-2.3df3210.982e15f9e524207be88fdeb2c73b6827.jpg",
    "revision": "b582cada965fef46d19883f5f57db7b5"
  },
  {
    "url": "assets/static/color-2.ad76ebb.982e15f9e524207be88fdeb2c73b6827.jpg",
    "revision": "7382165107e3dcd5ee507c41b81ca185"
  },
  {
    "url": "assets/static/favicon.1539b60.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "4b7767f97bf1facbe95a0cd4a525004c"
  },
  {
    "url": "assets/static/favicon.62d22cb.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "0a70799ad56ca23d58bc8655be04ea32"
  },
  {
    "url": "assets/static/favicon.7b22250.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "e3c5604feb031c78cf18f31a3c710944"
  },
  {
    "url": "assets/static/favicon.ac8d93a.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "aa12220dfa88ec9deed284028297a2a2"
  },
  {
    "url": "assets/static/favicon.b9532cc.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "7809b5fd094f7a290df7acf9c25eee6f"
  },
  {
    "url": "assets/static/favicon.ce0531f.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "a75fbdcb9d2872d82bb6fd583452c0ef"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "f9da2391561927d59a2ea0c164167460"
  },
  {
    "url": "assets/static/favicon.f22e9f3.8cfbf28a1132994cf3201d8de822d265.png",
    "revision": "8dd773e2f73753d82ea5e5cd519b0101"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "8cfbf28a1132994cf3201d8de822d265"
  },
  {
    "url": "assets/static/gramedia-digital-nusantara.5e31822.9a301795a84c261baea52138b261cc6d.png",
    "revision": "4719c12c5864df9db7c9fb632cc52134"
  },
  {
    "url": "assets/static/hegarmanah-residence.5e31822.834b3beb38915e807bf782a3898ff125.png",
    "revision": "9ad9d306e604c9e793f2e654779b278f"
  },
  {
    "url": "assets/static/ibis.5e31822.f3ba8e35e8aa217fd51b6f5f89f41db8.png",
    "revision": "c57acb620ee8ae6ee4499a2b51285375"
  },
  {
    "url": "assets/static/IMG_2254.36a08ae.3873f6c8691bb94ba795544b886b79d3.jpg",
    "revision": "3d62709395d7e39ba9ac44a414e77a54"
  },
  {
    "url": "assets/static/inti.5e31822.98692b369f32948fed15195dee77db2f.png",
    "revision": "8c4ac25e5793271a46caf43b77b5ea97"
  },
  {
    "url": "assets/static/itb.5e31822.f9255e9d10df88651b138986e6497c38.png",
    "revision": "0c7167fe7abc9f8aa25a7a86b867ab97"
  },
  {
    "url": "assets/static/ithb.5e31822.01c8b7b690187974af2aac5b676f33d4.png",
    "revision": "2303a4c644ec98789a3bd9f507c5f849"
  },
  {
    "url": "assets/static/jamkrindo.5e31822.3267b0d72cb9e5a4ab775375d0b31061.png",
    "revision": "671ffd1d251115a37052d5905cf2e5f6"
  },
  {
    "url": "assets/static/pen.1b91758.1a1e9205fd0bc6fc2001846bce6dd27a.jpg",
    "revision": "d47fd354bfc166772ef79de7df5bfea2"
  },
  {
    "url": "assets/static/pen.bd64798.1a1e9205fd0bc6fc2001846bce6dd27a.jpg",
    "revision": "f39cb1024a7701f4d9824643ccdbc0ec"
  },
  {
    "url": "assets/static/pln.5e31822.f619f8d4fc420bc88ab7646691946af5.png",
    "revision": "80fe67529d37886a86d26a12afbe0820"
  },
  {
    "url": "assets/static/powerbank-veger.1b91758.314b83332912cfeec145a0fcdda5c9b9.jpg",
    "revision": "e7fab1562527bdd0e2a4c4fb40279e61"
  },
  {
    "url": "assets/static/powerbank-veger.3df3210.314b83332912cfeec145a0fcdda5c9b9.jpg",
    "revision": "f553aed27f99d0c97569ccfd3cb99091"
  },
  {
    "url": "assets/static/powerbank-veger.ca461dc.314b83332912cfeec145a0fcdda5c9b9.jpg",
    "revision": "1a122fedeea48af738af90fc8b752aca"
  },
  {
    "url": "assets/static/pt-kai.5e31822.3f29ec15f0bffbe6ee9d8a52d27eb6bc.png",
    "revision": "9808a8d81096bcf92975971fd640a46c"
  },
  {
    "url": "assets/static/summarecon-bandung.5e31822.f545a571a5e77aecfcb089a53c4c7ef5.png",
    "revision": "5af234055b332f2501adfc05a05bcf4c"
  },
  {
    "url": "assets/static/tumbler-daytona.d12e930.ff4c6c67515bf22d0e230c95ff6d2660.png",
    "revision": "901c9d97fb2891e2e093724bd7dc5d52"
  },
  {
    "url": "assets/static/umbrella-foldable.1b91758.cd013ce2907f7a88a44547b664e6120d.jpg",
    "revision": "6e7db66300d0dab6f760ef6dbfe63bfb"
  },
  {
    "url": "assets/static/umbrella-foldable.a932647.cd013ce2907f7a88a44547b664e6120d.jpg",
    "revision": "2a8990b68efaa647d265f4b5eefdb451"
  },
  {
    "url": "assets/static/umbrella-standard.d12e930.f4566e8db6aec00bc6ab595963f0d4cb.jpg",
    "revision": "dd44c301caa15b3dd7cb931c4aeb4e03"
  },
  {
    "url": "assets/static/vacuum-flask.d12e930.4b7a099beb71f6dd6e04477bf1d6fc2b.png",
    "revision": "4f32f104071a1f9439b2be0d5b520c5f"
  },
  {
    "url": "assets/static/white.1b91758.781577258f81d67ae1b57fc52b4e2a5f.png",
    "revision": "60790389e5e879aef21f190863956965"
  },
  {
    "url": "assets/static/white.d6356bc.781577258f81d67ae1b57fc52b4e2a5f.png",
    "revision": "6b86d8b3009a5f9a036b53f99c3e8c18"
  },
  {
    "url": "blog/blog-one-title/index.html",
    "revision": "b1f68ee5d5ebf6df3ab6c0d9771eb5a3"
  },
  {
    "url": "blog/blog-two-title/index.html",
    "revision": "11085e24e14053109f2af019d74e8227"
  },
  {
    "url": "blog/corporate-gifts-the-key-to-customer-retention/index.html",
    "revision": "967a7fba76e4eeef9adcc7e994649f16"
  },
  {
    "url": "blog/diff/index.html",
    "revision": "8c9353c6f30dbe28be5cc920b405b1bf"
  },
  {
    "url": "blog/how/index.html",
    "revision": "e920c6457841d3469de8b78cbb8da9a1"
  },
  {
    "url": "blog/title/index.html",
    "revision": "4ab7e0aae775600e92b8cdd42156b55d"
  },
  {
    "url": "blog/why/index.html",
    "revision": "80a9ac3e10448f3d1b9dadb422071556"
  },
  {
    "url": "blogs/2/index.html",
    "revision": "097d686a7c89e1d5bc087be83c1129e8"
  },
  {
    "url": "blogs/3/index.html",
    "revision": "67b251ec2620a6b6cf23dec9f447fe1e"
  },
  {
    "url": "blogs/4/index.html",
    "revision": "4cd6963f5fa4a06f5779ee859c1313cb"
  },
  {
    "url": "blogs/5/index.html",
    "revision": "8cf44e146321c213cef226179b6d3dbc"
  },
  {
    "url": "blogs/6/index.html",
    "revision": "06e4576f259a0e51d67fd0241c3448b2"
  },
  {
    "url": "blogs/7/index.html",
    "revision": "d615ee742dcbbd71527b7252b3bdea63"
  },
  {
    "url": "blogs/index.html",
    "revision": "200e562952984d5dd7e3323621222d41"
  },
  {
    "url": "catalog/2019/index.html",
    "revision": "68268386a98c98cedb1fea0e41464d22"
  },
  {
    "url": "catalogs/index.html",
    "revision": "8fea9f4a13e62ec4ae540fe8beaea6b0"
  },
  {
    "url": "contact/index.html",
    "revision": "05afd09db2feae45b6e2965fd8521480"
  },
  {
    "url": "customer/index.html",
    "revision": "11ffdff339d90cb36880648669a6054d"
  },
  {
    "url": "home-1/index.html",
    "revision": "9736bbc67582dcd21cea83c17caca780"
  },
  {
    "url": "home-10/index.html",
    "revision": "e85c920df6dc6a159a12e53b2d5ee548"
  },
  {
    "url": "home-11/index.html",
    "revision": "9ca859045da29d37f1eeda72d3af53a9"
  },
  {
    "url": "home-2/index.html",
    "revision": "33bb8a81dd50589a35e341ee016915fe"
  },
  {
    "url": "home-3/index.html",
    "revision": "e62cd5a5cf3cae7acc4cf7e333ea3215"
  },
  {
    "url": "home-4/index.html",
    "revision": "8cfe9d274966be02eabf0f3513b505bd"
  },
  {
    "url": "home-5/index.html",
    "revision": "1d2fa3e51a7fdc65de40e6289607a89c"
  },
  {
    "url": "home-6/index.html",
    "revision": "9fdd4b9db960844a2bc188a7900e6820"
  },
  {
    "url": "home-7/index.html",
    "revision": "7ec393d4b0d5562082eb419b11e033b0"
  },
  {
    "url": "home-8/index.html",
    "revision": "64dd794f471dcc8af63abd6909fb010f"
  },
  {
    "url": "home-9/index.html",
    "revision": "3862ea9a5d55593feccbc4b42b203f19"
  },
  {
    "url": "images/b1.jpg",
    "revision": "53a1a76e0e1f5ff5a5e39e4e5055cc3c"
  },
  {
    "url": "images/b2.jpg",
    "revision": "1b8752bf07e0ec86bd00473ed417ba6b"
  },
  {
    "url": "images/b3.jpg",
    "revision": "9a10ef394433c2109693e74e3c798105"
  },
  {
    "url": "images/b5.png",
    "revision": "1bfdb5d6d5b5328701b874ae0593370d"
  },
  {
    "url": "images/close.svg",
    "revision": "9aaaaaffbe1c7597b0d998e4ad71ca87"
  },
  {
    "url": "images/curve1.svg",
    "revision": "f5669d20687b98175d5110c0cbdee513"
  },
  {
    "url": "images/curve2.svg",
    "revision": "455c2b2751fefbfb63ee1c4876b891a6"
  },
  {
    "url": "images/curve3.svg",
    "revision": "3d96bb177346d35da7f4251c0df0662b"
  },
  {
    "url": "images/customize.svg",
    "revision": "62b96b598e54a4a5c185f687b167a46c"
  },
  {
    "url": "images/drinkware.png",
    "revision": "661d121a7a27357faeabcdf4a3064ff3"
  },
  {
    "url": "images/email.svg",
    "revision": "a4f3a083468b981ca7230804fa33415d"
  },
  {
    "url": "images/explore.svg",
    "revision": "82285c5c5cc253017e2f100af949d7b3"
  },
  {
    "url": "images/gantungan-kunci.png",
    "revision": "7a1985e3e521491202f9fccb37e626bc"
  },
  {
    "url": "images/Gift Banner.jpg",
    "revision": "e206d2941f0307f0e971259147084d13"
  },
  {
    "url": "images/giftbox-box.png",
    "revision": "8cfbf28a1132994cf3201d8de822d265"
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
    "url": "images/giftbox-logo2.svg",
    "revision": "18400ffd5ff60661b6425514038587f5"
  },
  {
    "url": "images/giftbox-logo3.svg",
    "revision": "aff39570d161a7a0f05d68a738cd7eb2"
  },
  {
    "url": "images/gifts.png",
    "revision": "b2f211238004d92e179b654b1ebd896b"
  },
  {
    "url": "images/github.svg",
    "revision": "2c927e77502f04724ef3f48a60ccbf82"
  },
  {
    "url": "images/impact.svg",
    "revision": "be92b904f6f8981db000bf7f1dc486e9"
  },
  {
    "url": "images/instagram.svg",
    "revision": "5a236250715f43bffce789f37f2ac46f"
  },
  {
    "url": "images/menu.svg",
    "revision": "35cd8a61c8f4ba1fa4fb0785f8d09193"
  },
  {
    "url": "images/mybadge.png",
    "revision": "ccdc60769e5a7d0840bea53762217e81"
  },
  {
    "url": "images/office-supplies.png",
    "revision": "8837bdea2d1a38ffbc63f7ac288d76d1"
  },
  {
    "url": "images/payung.png",
    "revision": "098f3bfa5f6c49545a129ed8ef0572fb"
  },
  {
    "url": "images/search.svg",
    "revision": "02bceb199e2b3e2459687df303cdb168"
  },
  {
    "url": "images/search2.svg",
    "revision": "3d0e7255956eeb96750f1296f9b91ad3"
  },
  {
    "url": "images/slidego.svg",
    "revision": "3cad0d7777541a4c2ddd1ee874e79568"
  },
  {
    "url": "images/spc-logo.png",
    "revision": "52fe4495267c558d44324bbb311978b0"
  },
  {
    "url": "images/spc-logo.svg",
    "revision": "044804ef161d800bd1a3add1e8fa0866"
  },
  {
    "url": "images/surapati-box.png",
    "revision": "88bbdbb5115d4a4f89cbb1f6f27fdfb2"
  },
  {
    "url": "images/test.svg",
    "revision": "c2e23612a4f6d1080def529eb05315c2"
  },
  {
    "url": "images/whatsapp.svg",
    "revision": "46af11f59a17637d29f1acc6a3e47007"
  },
  {
    "url": "index.html",
    "revision": "186192b82d517c6679bc51666a2be5bf"
  },
  {
    "url": "js/classList.js",
    "revision": "a628ed2421789e7b4a5ee038679c2cc6"
  },
  {
    "url": "manifest.json",
    "revision": "fe4f65aa5d77b40f769a24581ca987d2"
  },
  {
    "url": "old-index/index.html",
    "revision": "b14ef2c07b9cc203c6a1f0b4dca2d1e2"
  },
  {
    "url": "product/baby-kids-gift/index.html",
    "revision": "99fa65a5fce8660ad267c9dbfb321246"
  },
  {
    "url": "product/bags-spunbond/index.html",
    "revision": "ad6696adbd65e0072bd56bfd04c83471"
  },
  {
    "url": "product/gift-set/index.html",
    "revision": "41f9a067ff45155212344d9375030da5"
  },
  {
    "url": "product/mug-standard/index.html",
    "revision": "c0b9dcccd12c381c8a5e1d2e5517e9ad"
  },
  {
    "url": "product/pen/index.html",
    "revision": "813899c570df230c23632815618e65d2"
  },
  {
    "url": "product/tumbler-daytona/index.html",
    "revision": "88d59bf06b6d6269542e1df7323d0cd2"
  },
  {
    "url": "product/umbrella-foldable/index.html",
    "revision": "ad2bca766055b70d0d10b1cf4074060f"
  },
  {
    "url": "product/umbrella-standard/index.html",
    "revision": "f85e552dc9305b9f137c3a056f0f567e"
  },
  {
    "url": "product/vacuum-flask/index.html",
    "revision": "f11266315e945599685516c00114fedc"
  },
  {
    "url": "product/veger-powerbank/index.html",
    "revision": "85d55486691e105aad8296896f6c8326"
  },
  {
    "url": "products/2/index.html",
    "revision": "928b985e663bed9e6b0585e8c7dda5b5"
  },
  {
    "url": "products/3/index.html",
    "revision": "7c7ddf0634a3cac89f5eaa52eea2b0d3"
  },
  {
    "url": "products/4/index.html",
    "revision": "cea88e672f90a0cc7d6095e3031dd431"
  },
  {
    "url": "products/index.html",
    "revision": "0c390f01b70279b3fa5fbc84a8dc1886"
  },
  {
    "url": "tag/apparel/index.html",
    "revision": "ee4b70ac75119c71f82e5d3e3a05571a"
  },
  {
    "url": "tag/baby-kids-gift/index.html",
    "revision": "cb80049a78025349241391708604fe43"
  },
  {
    "url": "tag/bags/index.html",
    "revision": "799161bcfdb1ba2a8f7a47847796ebfb"
  },
  {
    "url": "tag/flashdrive/index.html",
    "revision": "6f3fa09d43fbefdee0d71dc03ddf67ad"
  },
  {
    "url": "tag/gift-set/index.html",
    "revision": "694ee2b05c3756c30e6abf0f936e789c"
  },
  {
    "url": "tag/goodie-bags/index.html",
    "revision": "7ccc66872146bb6f54b3e319195dc5ed"
  },
  {
    "url": "tag/pen/index.html",
    "revision": "3d8d856ebbe22c62d748966d0ccc4154"
  },
  {
    "url": "tag/pouch-and-bag/index.html",
    "revision": "d42892255f62dcc9ead720c5bcea503d"
  },
  {
    "url": "tag/power-bank/index.html",
    "revision": "c3990f85b895889e345a86cc837aba3d"
  },
  {
    "url": "tag/stationeries/index.html",
    "revision": "3ca1c7d5379fbbdbc79cfcfce66dcff9"
  },
  {
    "url": "tag/tumbler/index.html",
    "revision": "92c2e6136f4632c65446d6fc2e075559"
  },
  {
    "url": "tag/umbrella/index.html",
    "revision": "65579053731fea50c82b7c9dff00f16b"
  },
  {
    "url": "tag/vacuum-flask/index.html",
    "revision": "38c9c1226211146cd2b312888bc5658b"
  },
  {
    "url": "test.svg",
    "revision": "4405c6fe77f44fd93360736a8cb80893"
  },
  {
    "url": "what/index.html",
    "revision": "4172e2497cd6e71d22616e474346096f"
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
    "url": "tag/gift-set",
    "revision": "a8d978c98685206b5a2396f707f790cd"
  },
  {
    "url": "tag/stationeries",
    "revision": "19d7595bff5790fb926d0d2172137efc"
  },
  {
    "url": "tag/flashdrive",
    "revision": "aa176bf78c781a8718100ed51aa0e8da"
  },
  {
    "url": "tag/pouch-and-bag",
    "revision": "92590e9e2a5f8d85dad8c507a7ade48e"
  },
  {
    "url": "tag/apparel",
    "revision": "8f8754a110a0a7605498122803a0f86e"
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
    "url": "product/veger-powerbank",
    "revision": "9e10ce852bca336e80361f33b07fa360"
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
    "url": "product/baby-kids-gift",
    "revision": "7141a184f98a7bbae2ff1eb7ddb52845"
  },
  {
    "url": "product/bags-spunbond",
    "revision": "c4bccd3ec5ca3a56f25ee3c50e8c4740"
  },
  {
    "url": "product/gift-set",
    "revision": "b9f4cf517ce1b8b89c284465a2e6c8da"
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
    "url": "product/tumbler-daytona",
    "revision": "75a20bcd08e125ea32a23cb575bf9016"
  },
  {
    "url": "product/vacuum-flask",
    "revision": "465c0f4ab89d423962e60bcaedcf5f97"
  },
  {
    "url": "catalogs",
    "revision": "73013b6c8c4952c6de827175b9d96dd6"
  },
  {
    "url": "blogs",
    "revision": "85454adb943e6abc61e89c57678802a8"
  },
  {
    "url": "blogs/2",
    "revision": "22f8195ebf26462a1a1ebd965cfb33f7"
  },
  {
    "url": "blogs/3",
    "revision": "47533cc7ecc5a5c2b47642711056b867"
  },
  {
    "url": "blogs/4",
    "revision": "1c300468272e3c4991b32d9be9a25b96"
  },
  {
    "url": "blogs/5",
    "revision": "de2ce97168032c0eb470765c214d27c4"
  },
  {
    "url": "blogs/6",
    "revision": "a63c67c6662fa50b1eb8d0b98dd2300c"
  },
  {
    "url": "blogs/7",
    "revision": "5bc1c2c3cdb03a25cef33640348eafb9"
  },
  {
    "url": "catalog/2019",
    "revision": "dc4ec1bcd7a982bc01046284e734a67d"
  },
  {
    "url": "blog/blog-one-title",
    "revision": "33553586a090f3e1d22491c3f7fee2b6"
  },
  {
    "url": "blog/blog-two-title",
    "revision": "5112aca29acba415a99fc2c16b342c4f"
  },
  {
    "url": "blog/diff",
    "revision": "ca3353febbb3aab281629c3849b34f68"
  },
  {
    "url": "blog/how",
    "revision": "8fba6ee0268218460c7bde87329c5a68"
  },
  {
    "url": "blog/why",
    "revision": "ae60b7731c2bb9fe1aba7eb71e3e900c"
  },
  {
    "url": "blog/corporate-gifts-the-key-to-customer-retention",
    "revision": "67e6029b7e6e6868ade995d8417c8b1f"
  },
  {
    "url": "blog/title",
    "revision": "99b9707a4f1318a4cfbe23342682642d"
  },
  {
    "url": "what",
    "revision": "5b7a31976d9e1618d9cdc96c7d8135e1"
  },
  {
    "url": "old-index",
    "revision": "27f4d4556aaaebdf05a6cbf2cb04d7a4"
  },
  {
    "url": "home-3",
    "revision": "7484ed62427c2e7827885def8e524b3d"
  },
  {
    "url": "home-4",
    "revision": "e81befb832b902eb80dfa7d065a5e330"
  },
  {
    "url": "home-5",
    "revision": "3684fbc832524177560c7804f93191a1"
  },
  {
    "url": "home-6",
    "revision": "fd6aa7169245e4a1f2e92b73ecd70d26"
  },
  {
    "url": "home-7",
    "revision": "97865d232d142745468a831a2c0f5271"
  },
  {
    "url": "home-8",
    "revision": "344ca75ed84b541cfa3973fc67eed855"
  },
  {
    "url": "home-9",
    "revision": "98e24c11f248574b7b3d2138bd5f9b1b"
  },
  {
    "url": "home-1",
    "revision": "fb889bf8206af089e8e50bfb73f4482f"
  },
  {
    "url": "home-10",
    "revision": "319c3e8202060d40003ec669de7095c8"
  },
  {
    "url": "home-11",
    "revision": "906db1b59b0147773f8d6973a155a1b3"
  },
  {
    "url": "home-2",
    "revision": "e539b66a48396ff3f74b48128a185466"
  },
  {
    "url": "customer",
    "revision": "223719174b53d388c0948a03c1607df1"
  },
  {
    "url": "contact",
    "revision": "8048a6aaa865ac645f16b02a79e059dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})