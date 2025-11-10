'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c866cdf8b327d5b40b37a2b118a7eaa",
"assets/AssetManifest.bin.json": "3b5a7053671dc10768bd6a92d57796dc",
"assets/AssetManifest.json": "98a4874f6227659306f4f99e8a1fae3e",
"assets/assets/images/1.png": "505fa7f5c4526e9a4b14d7ae3b91db20",
"assets/assets/images/1.webp": "e8e9a6910d15e03a98c59e6d19a66c97",
"assets/assets/images/2.png": "ada8b8d957140f483f98b761ac97353b",
"assets/assets/images/2.webp": "840a0d5fe6a764c4db26e684117dfde2",
"assets/assets/images/3.png": "9c7d912958cf34b3f2cae48874dda241",
"assets/assets/images/3.webp": "58d8a657e7b7d01183a4db30340873fc",
"assets/assets/images/attendance.png": "21a342dddbb2d45ee114e585c1d3645c",
"assets/assets/images/business_center.png": "8a33bd92d06ec030ec2f69e95def0663",
"assets/assets/images/business_center_splash.png": "db0cb82f0a31a9f9a6d38c6e77f771d3",
"assets/assets/images/dahua.webp": "4ca78bd62fa62a7ee63b15f9d6f957d3",
"assets/assets/images/data.png": "f160e042bb2a0a0e3d6a0464401d92ae",
"assets/assets/images/fl_icons.png": "ea0713a8acc0c56704693dcef237a676",
"assets/assets/images/hris.png": "c2cd7a3c5313ca51155d660ad11db4e3",
"assets/assets/images/task.png": "aee38fa5f78d3aca7a165e009dde5a6a",
"assets/assets/lottie/CCTV.json": "9c2f0ebb525aac7bae26592cd93e8792",
"assets/assets/lottie/data.json": "3850f6545b5a2e411f9134e5154aeba4",
"assets/assets/lottie/loading.json": "39e79a0d8be9d68d261ba1a585430a2f",
"assets/assets/lottie/Sandy.json": "86f61086035ee6033f83de37e122b7ef",
"assets/assets/lottie/scanning.json": "0ca739f4fe4416cb2ed1b0c88abb9eb1",
"assets/FontManifest.json": "2a3f09429db12146b660976774660777",
"assets/fonts/MaterialIcons-Regular.otf": "d38994d14b72b9996ddcebd906f2cf25",
"assets/NOTICES": "fa4ff0109653cd09a08a72dfbd119e7d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "555c1f44baff546ce9c6dc0be8cdee72",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "4c1edb74ae792aa6054b355b0c79f4e5",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "dec03ccdc00e87ad346cb209c2c6b345",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "721e962957d558fe45a91d1da5fb6044",
"firebase-messaging-sw.js": "8c6de5c13bba00e93b26bef57b9572d9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7816120e46fcdff56e9c6850f9c71661",
"icons/Icon-192.png": "6efb36745d632cd8b0ea08b9e5f02dfd",
"icons/Icon-512.png": "fecafe04697d5feabdad0debe949d742",
"icons/Icon-maskable-192.png": "6efb36745d632cd8b0ea08b9e5f02dfd",
"icons/Icon-maskable-512.png": "fecafe04697d5feabdad0debe949d742",
"index.html": "cc88ebe4d629b5d1a1cb95c00dcc6f2a",
"/": "cc88ebe4d629b5d1a1cb95c00dcc6f2a",
"main.dart.js": "b9f99720c45a0b57d55595a1029d5ef6",
"manifest.json": "a9a452b7e921502dd305ec4283d6693f",
"version.json": "f4e26bb6a08787cac6187aff6185cfa4"};
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
