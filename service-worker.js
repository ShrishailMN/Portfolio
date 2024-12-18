self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('sn-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/images/Logo.png',
          '/manifest.json',
          '/service-worker.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  