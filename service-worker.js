// service-worker.js
const CACHE_NAME = "infobits-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    // List any other assets you want to cache
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
