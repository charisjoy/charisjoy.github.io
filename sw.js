const staticCacheName = 'site-static-v5';
const assets = [
  './',
  'index.html',
  'her2.html',
  'privacypolicy.html',
  './assets/js/roche-script.js',
  './assets/css/production/style.min.css',
  './assets/media/image/bc-header-desktop.png',
  './assets/media/image/bc-header-mobile.png',
  './assets/media/logo/roche-logo-white.png',
  './assets/media/image/unraveling.png',
  './assets/media/image/hope.png',
  './assets/media/image/column1.png',
  './assets/media/image/column2.png',
  './assets/media/image/column3.png',
  './assets/media/image/Early-Stage/Neoadjuvant/treatmentgoals-1.png',
  './assets/media/image/Early-Stage/Neoadjuvant/treatmentgoals-2.png',
  './assets/media/image/Early-Stage/Neoadjuvant/treatmentgoals-3.png',
  './assets/media/image/Early-Stage/Neoadjuvant/success-rate.png',
  './assets/media/image/Early-Stage/Neoadjuvant/lifestyle-1.png',
  './assets/media/image/Early-Stage/Neoadjuvant/lifestyle-2.png',
  './assets/media/image/Early-Stage/Neoadjuvant/lifestyle-3.png',
  //'./assets/media/video/Her2-Animation.mp4'
];

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      return cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

// dynamic
// // activate event
// self.addEventListener('activate', evt => {
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       return Promise.all(keys
//         .filter(key =>  key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       );
//     })
//   );
// });
// // fetch event
// self.addEventListener('fetch', evt => {
//   evt.respondWith(
//     caches.match(evt.request).then(cacheRes => {
//       return cacheRes || fetch(evt.request).then(fetchRes => {
//         return caches.open(dynamicCacheName).then(cache => {
//           cache.put(evt.request.url, fetchRes.clone());
//           return fetchRes;
//         })
//       });
//     })
//   );
// });
