// Ahid çevrimdışı çalışma: sayfa önce internetten, yoksa önbellekten açılır
const CACHE = "ahid-v3";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./img/ersin.webp",
  "./img/logo.jpg",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/apple-touch-icon.png",
  "./img/favicon-32.png",
  "./favicon.ico"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Sayfanın kendisi: önce internet (güncel sürüm), yoksa önbellek
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Yazı tipleri, resim kütüphanesi ve resimler: önbellekte varsa oradan, yoksa indirip sakla
  const cacheable = url.origin === location.origin ||
    url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" ||
    url.hostname === "cdnjs.cloudflare.com";
  if (!cacheable) return;
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
