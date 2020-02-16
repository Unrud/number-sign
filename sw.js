// Files to cache
var cacheName = "numbersign2";
var contentToCache = [
  ".",
  "fn.js",
  "icon.png",
  "index.html",
  "main.css",
  "neon/0.png",
  "neon/1.png",
  "neon/1x.png",
  "neon/2.png",
  "neon/2x.png",
  "neon/3.png",
  "neon/3x.png",
  "neon/4.png",
  "neon/4x.png",
  "neon/5.png",
  "neon/5x.png",
  "neon/6.png",
  "neon/6x.png",
  "neon/7.png",
  "neon/7x.png",
  "neon/8.png",
  "neon/8x.png",
  "neon/9.png",
  "neon/9x.png",
  "neon/arr0.png",
  "neon/arr1.png",
  "neon/arr2.png",
  "neon/arr3.png",
  "neon/arr4.png",
  "neon/arr5.png",
  "neon/fn.js",
  "neon/index.html",
  "neon/main.css",
  "neon/x0.png",
  "neon/x1.png",
  "neon/x2.png",
  "neon/x3.png",
  "neon/x4.png",
  "neon/x5.png",
  "neon/x6.png",
  "neon/x7.png",
  "neon/x8.png",
  "neon/x9.png",
  "simple/fn.js",
  "simple/index.html",
  "simple/main.css"
];

// Delete old caches
self.addEventListener("activate", function(e) {
  console.log("[Service Worker] Activate");
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[Service Worker] Deleting cache: "+key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Installing Service Worker
self.addEventListener("install", function(e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(e.request).then(function(r) {
        console.log("[Service Worker] Fetching resource: "+e.request.url);
        return r || fetch(e.request).then(function(response) {
          console.log("[Service Worker] Caching new resource: "+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      })
    })
  );
});
