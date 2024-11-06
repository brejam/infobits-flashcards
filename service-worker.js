const CACHE_NAME = "infobits-cache-v1";
const urlsToCache = [
    "/infobits-flashcards/",              // Home page
    "/infobits-flashcards/index.html",     // Main HTML file
    "/infobits-flashcards/styles.css",     // CSS file
    "/infobits-flashcards/script.js",      // JavaScript file
    "/infobits-flashcards/manifest.json",  // Manifest file
    "/infobits-flashcards/icon-192.png",   // 192x192 icon
    "/infobits-flashcards/icon-512.png"    // 512x512 icon
];

// Install event - caching all specified files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch((error) => console.log("Caching failed: ", error))
    );
});

// Fetch event - serve from cache if available
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // If there's a cached response, return it; otherwise, fetch from network
                return response || fetch(event.request);
            })
            .catch((error) => console.log("Fetch failed: ", error))
    );
});

// Activate event - update cache if any changes
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
