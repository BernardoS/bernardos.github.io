const CACHE_VERSION = 'v1'
const cdns = [
  'https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css',
  'https://fonts.googleapis.com/css?family=Quattrocento|Quattrocento+Sans',
  'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  'https://use.fontawesome.com/releases/v5.0.13/webfonts/fa-solid-900.woff2',
  'https://use.fontawesome.com/releases/v5.0.13/webfonts/fa-brands-400.woff2',
  'https://fonts.gstatic.com/s/quattrocento/v9/OZpEg_xvsDZQL_LKIF7q4jP3w2j6XYvVuQ.woff2',
  'https://fonts.gstatic.com/s/quattrocentosans/v10/va9c4lja2NVIDdIAAoMR5MfuElaRB0zJt0_8H3HI.woff2'
]
const htmls = [
  '/',
  '/about',
  '/cv'
]

self.addEventListener('install', handleInstall)

self.addEventListener('fetch', handleFetch)

/**
 * @param {Event} event 
 */
function handleFetch (event) {
  /** @type {Request} */
  const request = event.request
  event.respondWith(
    caches.match(request)
      .then(res => res || fetch(request).then((response) => {
        const responseClone = response.clone()
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, responseClone))
        return response
      }))
    // .catch(function() {
    //   return caches.match('/sw-test/gallery/myLittleVader.jpg')
    // })
  )
}

/**
 * @param {Event} event 
 */
function handleInstall (event) {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll([
    ...cdns,
    ...htmls
  ])))
}
