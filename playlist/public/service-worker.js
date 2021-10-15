//Version number

const VERSION_NR_STATIC = "static-v1";
const VERSION_NR_DYNAMIC = "dynamic-v1";
const STATIC_FILES = [
  "./",
  "./works",
  "./links",
  "./about",
  "./home",
  "./index.html",
  "./offline.html",
  "./src/App.js",
];

//add minimal necessary files to cache
self.addEventListener("install", (event) => {
  console.log("[Serviceworker] installing Service Worker ...", event);
  event.waitUntil(
    caches.open(VERSION_NR_STATIC).then((cache) => {
      console.log("caching app shell");
      return cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] activating Service Worker...", event);
  // Remove old cache
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== VERSION_NR_STATIC && key !== VERSION_NR_DYNAMIC) {
            console.log("ServiceWorker is removing old cache!", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[Serviceworker] fetching something.... ", event.request);
  event.respondWith(
    caches.match(event.request).then((response) => {
      //if already stored in cache
      if (response) {
        return response;
      }
      //if not stored in cache, get from internet and store it now
      else {
        return fetch(event.request)
          .then((res) => {
            return caches.open(VERSION_NR_DYNAMIC).then((cache) => {
              if (event.request.url.startsWith("http")) {
                cache.put(event.request.url, res.clone());
                return res;
              } else return res;
            });
          })
          .catch((error) => {
            console.log(error);
            caches.match("offline.html");
          });
      }
    })
  );
});
