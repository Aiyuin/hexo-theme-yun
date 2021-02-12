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
    "revision": "2f67ed53dbdd14c33f38d417aa44d6c4"
  },
  {
    "url": "about.html",
    "revision": "f5d66d8b6eed6079b049fcb412711bb4"
  },
  {
    "url": "assets/css/0.styles.51ea9abf.css",
    "revision": "a5d9586bf858c1bc45fb381917c4cb03"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86d7c464.js",
    "revision": "f1cd9f2eba00cb51b1fc0d789830caee"
  },
  {
    "url": "assets/js/11.33fde071.js",
    "revision": "1acffda1676971cfc206f07baea041d0"
  },
  {
    "url": "assets/js/12.eeaac9e2.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.c883f98d.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.96b7c562.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.b984a9bd.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.25c39931.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.834ce1f7.js",
    "revision": "1c191bed1a4b91641274278f61d11c84"
  },
  {
    "url": "assets/js/18.b73655eb.js",
    "revision": "e44b8b50f27a8b47911bc6643d090b3c"
  },
  {
    "url": "assets/js/19.1f23bb12.js",
    "revision": "1160c160f0176974d43b7e5f9b297ac3"
  },
  {
    "url": "assets/js/20.d9967a9f.js",
    "revision": "ed0049ebc2a26824898eb6fd99090ad2"
  },
  {
    "url": "assets/js/21.678fa676.js",
    "revision": "d47213d7dec3d7163d20d0fc22049cec"
  },
  {
    "url": "assets/js/22.4e989f82.js",
    "revision": "4530c9044a45ecdf5e0af463a4c78f5a"
  },
  {
    "url": "assets/js/23.1129e3a4.js",
    "revision": "cdcb62efc665fe5ff8b74299055512dc"
  },
  {
    "url": "assets/js/24.c6f8fea2.js",
    "revision": "9fe52f16b29c0703cbf44cf345cacaeb"
  },
  {
    "url": "assets/js/25.493c6d13.js",
    "revision": "1478b7680122f7a452bc423e04170b33"
  },
  {
    "url": "assets/js/26.d5b98dc0.js",
    "revision": "fd780fed7adf465c92b887e69228e3bc"
  },
  {
    "url": "assets/js/27.641d6f40.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.f3f9baf4.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.34531aac.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b0c17e98.js",
    "revision": "d94e08279b51fcbdf21d2158a96be041"
  },
  {
    "url": "assets/js/30.8a41357f.js",
    "revision": "e80753590e64e81add0ca8eeb957eece"
  },
  {
    "url": "assets/js/31.4964465f.js",
    "revision": "490b499e1846ef5a5b02ced3fe4ddd26"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.b3f9e313.js",
    "revision": "8e4339d61203e5dfd7e3c55d2bf1afbe"
  },
  {
    "url": "assets/js/5.63374297.js",
    "revision": "ff5a6ca882e3c295d3444f2c95a47aba"
  },
  {
    "url": "assets/js/6.e6272bd5.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.561f1a5b.js",
    "revision": "2aceb9e462b5abe1e6117bbf786e14cb"
  },
  {
    "url": "assets/js/8.f0197f8e.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.c9c76b29.js",
    "revision": "97f9d2d6a70f809b0ace0edd55c58aeb"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "7cf456e4c1021047d84df3d9685f6a17"
  },
  {
    "url": "en/about.html",
    "revision": "d010352729918447a6871cbf9128b5da"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "d4efeff4cd89c886720887c03a0f7c58"
  },
  {
    "url": "en/guide/config.html",
    "revision": "ee7afb41375ab3606bbad4e67f817108"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "c8ff3afba6efc993b1604321198a8c4e"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "ea606b7d12fb20eac803207c249c5369"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d91216105dad96a2e51fc34508d4aaf1"
  },
  {
    "url": "en/guide/page.html",
    "revision": "60b0a4beb72d85917bfa468637e42293"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "21e38b34293ed86b34e26faa77f7701c"
  },
  {
    "url": "en/index.html",
    "revision": "5cb211c5c36c26dd3b5edbd7689514de"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "f30d6e9d9193302ab46d088d3cbb30ae"
  },
  {
    "url": "guide/config.html",
    "revision": "6b2b865160f21c4e6cc4215959cc7aba"
  },
  {
    "url": "guide/faq.html",
    "revision": "d8b1463df183802a60a38aed64b5a9fa"
  },
  {
    "url": "guide/icon.html",
    "revision": "66fc86cb69791dd348d26db69643fcf2"
  },
  {
    "url": "guide/index.html",
    "revision": "51ef132cfe00be9fdad6b45c18001703"
  },
  {
    "url": "guide/migrate.html",
    "revision": "00487420eb802b75021a2521a24e5ae1"
  },
  {
    "url": "guide/page.html",
    "revision": "033124a6d4a00a48f24284e3921c33b8"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "3469c40317445310a209bbd7992e29d7"
  },
  {
    "url": "index.html",
    "revision": "81e0fa3979ecfc4663f776ee2eba31d2"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
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
