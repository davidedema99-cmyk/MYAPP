const CACHE_NAME = 'budgetwise-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aperta');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Ritorna la risorsa dalla cache se trovata
                if (response) {
                    return response;
                }
                // Altrimenti, recuperala dalla rete
                return fetch(event.request);
            })
    );
}); 
