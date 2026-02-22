'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c396ae6b2e861260837c37d6bd174c96",
".git/config": "b7409499c980bda27e5e692bebd3ac14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e95cbeebc6b58e4f1d66e8f104359856",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2e888bdcd7f28b4cdd4acfd8875f0071",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b640bd87acd48b1e025cb5fb494c64a",
".git/logs/refs/heads/main": "6b640bd87acd48b1e025cb5fb494c64a",
".git/logs/refs/remotes/dex/main": "0c96144407dc3f2de59220ad2e319f04",
".git/logs/refs/remotes/origin/main": "f82bec248de6e040565ce49bdb2c573d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/03/ec3eb9017cabc2a5074783e5b1d8b09b2390af": "cfc3df2a219409939a3125d81def9acf",
".git/objects/0b/ac8bd4d603ba72a2f3fdb4699208da62bbee5f": "ce36775e7273fa73fc75a0eba684b541",
".git/objects/10/8ddf6d887c8475f50bd9f718f193835d11900e": "4ae7ab2aaf79fd23f997e1f26789a141",
".git/objects/12/2d0a96a0d60bb5c9a202f2ffaf50a1c747dd07": "0cba5015e2af191d44e69cce1639931a",
".git/objects/12/30d57b0260cd632bd16be16ff43b61f34d23ab": "28f05746cbdee7ab6d97da2e69f187f4",
".git/objects/26/60591d7d008f917528af3dd8f0c8adf368d94d": "3d0a56d4ac6f8b9737d7ac22847f7c38",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "b786283fd4289795d6530a1cf5fa703f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/38/8de9a3849c1cd57112e27e43d2be5c879e95ce": "ae96bac30a28ad329283be00e75a0a92",
".git/objects/39/703abce29a22479065da61b444339f613a1f89": "8d0f80af256ceae8bc3a9609bc5b799c",
".git/objects/3c/4fb887d0c970e75b80f6f3fae698bd00ecf81a": "ad48531fb0279c391747ffae3232154b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/42/513d2e991b4f9fe6c06a8e4a330b1cde1cc29c": "b10f8dd974011596397d49e3c33101f0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/47/ec6c3f0fe62d6c55bfe65d3c87de1228ad77ea": "6a25e1554d2f95f640dd9eb643af5a0d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/51/a5da0022bd1f525129c3dc20e9c59d50bf17d3": "274fd8a9da0d7ddc154e3320fb11d916",
".git/objects/51/bc87aa687486e36302f6a5352e4f3e2fbe8b0a": "dc0bc3c416b5141f0e1802752a07a704",
".git/objects/56/18ee3f11b2fdfcb9bc2dd1531accdd6e051844": "7b6d7941779f5157eca9144d179c058a",
".git/objects/56/d68f5e0f762dac0478faaeea1cd6338117765a": "278bcb94c648e310e0bf12b81826d119",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/58/32ce6a9b89601da50583af0402038ec859d53c": "85b45fd4b40833876fa0ab2334991050",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "5e4a591c0e9b3c8ea49c825e5c65fbc0",
".git/objects/65/5b89f88f33d05e050a80ffbd3359aed1ec75af": "b82946044c53d7ff9d665b67ed275e6f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6e/86e8ddb53c1295efa42da8854aa28403e170f4": "71f6b23dacc7d355fa92267c3d3b7ed7",
".git/objects/75/69c7de457ef711f400159b7a67d368089c5a84": "62802fdf15ef0da25622b4510e39c638",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/90/9ca8eaaadea1b2a738de64aca52e45687b6b8b": "2a90d5cce745d93ae6f4cbab7b5d3fd6",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/92/7551890194e0beac622140ce8ac64b2572775e": "e09960dc810711f7a55c03cd1260cb10",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "93de43c815a74921d28c0395459cae3a",
".git/objects/98/a73278fd4e159a30f4e7bb6e3ec68890a379c9": "a62a948e82f814f9801ac8ef11d0f5cf",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/a7/2a6ab91797b4ee085388a2b91bd35d0169cb8b": "3506c0f3e9e1b8151912fedf7ae61ba5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/aa/d551ba594575bc6fdbc7e96ed098a76d64dbd2": "d0a3ee1a625ddfceff5247f744b8f555",
".git/objects/aa/fbcc96245ffdf470f2f8510f0804afe8919215": "c35b6cac4c706e9bbbabdc166c8f626d",
".git/objects/af/01c96f9b9c6a2a655f2a694f2e79c17f76ddb3": "cc72e443c764343533cfe24a1e10323d",
".git/objects/af/055533e8885a442297ef44389f7502a9f8a14b": "252e39fb86352a9abd0d6cc803ef67d0",
".git/objects/b5/841b9322b956c4077fc842475f219f0134f27b": "676e555ff682cdd488c75f4276ebdda4",
".git/objects/cd/0624ca985670e04bada9f2772e09af7090c2c5": "8fd5ba9a55b1928b41ee9dcc3a09d2a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d7/0308cf1417e73a81f1456a31b74aa2251542e2": "d11a623fd1b3fd51bdbaf241964a78f3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/d9/4dcccc5a50f6dd67c22685fb816704e1e59c42": "a737355a0291e3722af2312a2ea28444",
".git/objects/dd/4ada789fa18369f24fbcbb5f7a8dde8c0b9466": "afd94a25f4c9eae1d5e4ab9779b38a19",
".git/objects/df/03c5338f3e0e541e6c019f0dc1371c83b6705d": "d97a1857ced3345aef59b105b427562e",
".git/objects/e0/6cf0a7b22a8e0566a9858d314d2fb7a261ef79": "241d0e390eaf654ba4ad08aa13425623",
".git/objects/e0/95f15643b123ec14d31e3eac667367a8cdf73a": "61f579a68c8a6fa427a88f4259e3dee9",
".git/objects/e4/995ce80bdc649989a4b1eb92c10b5a326ed5dd": "661707b254a6fd0cd1d9399787179d34",
".git/objects/e8/7bd3d0cd659fa166ad60e1c536834ba5c32296": "d1ba9af5c70a71e3fff52df9dd76924a",
".git/objects/e8/c42d812cafc19c5cc1dc8bdc2c503c3de6e9a5": "08cc991339229a01a69b4d638af92c34",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/fa/a363f3a27182250fcacc2ee0b04dfd83b26301": "fa565fa2b11e8f8b309d8e95e379dc53",
".git/objects/ff/aa99019210ab7012ee5059e9673f268db296ed": "a37b1100f553055ee500562389141e0b",
".git/refs/heads/main": "1569445b2bdd77aa4f76371eb3f33432",
".git/refs/remotes/dex/main": "1569445b2bdd77aa4f76371eb3f33432",
".git/refs/remotes/origin/main": "59619751101ec0cb0d544ebd56b7c084",
"assets/AssetManifest.bin": "69f5842dc28eb6c7860419e7142bbec2",
"assets/AssetManifest.bin.json": "467376229294058af2f98b6a376a4f71",
"assets/AssetManifest.json": "b1fcf5b83394cbaecda312d23c4cdb00",
"assets/assets/applogo.jpg": "78ceed9b8d232d215f420d1ff69f7569",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "813a87c38650d1dc4f8a80a341320cfd",
"assets/NOTICES": "8778944da0bfeb8d92cff4cadf4c142e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "e46334b0407b5be6198582cc3b8f7a4e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f38132127951ba9eb4f919a2f1174664",
"icons/Icon-192.png": "9505d6493a97da14990acb41dd2b07dd",
"icons/Icon-512.png": "ad785de72eb74fd595573c63500d7034",
"icons/Icon-maskable-192.png": "9505d6493a97da14990acb41dd2b07dd",
"icons/Icon-maskable-512.png": "ad785de72eb74fd595573c63500d7034",
"index.html": "72919f1d7e13e19ac20e0d1e9f342a47",
"/": "72919f1d7e13e19ac20e0d1e9f342a47",
"main.dart.js": "60bbc10f3f8c8ba9ced2a2fc2aaf7955",
"manifest.json": "c73cc5d5bfd457c93ab20d766701636b",
"version.json": "afac2ad60fc76e200ab36a623834eaf4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
