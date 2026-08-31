/* Service Worker für Klassenheft.
   Zweck: die App startet auch ohne Internet und lässt sich am Homescreen
   ablegen. Es werden ausschließlich die Programmdateien zwischengespeichert.
   Schülerdaten liegen im lokalen Speicher des Browsers und werden hier
   niemals angefasst oder irgendwohin gesendet. */

const CACHE = "klassenheft-v6";
const DATEIEN = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

self.addEventListener("install", function(ev){
  ev.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(DATEIEN); }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(namen){
      return Promise.all(namen.filter(function(n){ return n !== CACHE; }).map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* Zuerst das Netz versuchen, damit eine neue Fassung ankommt.
   Ohne Netz wird die zwischengespeicherte Fassung ausgeliefert. */
self.addEventListener("fetch", function(ev){
  if(ev.request.method !== "GET") return;
  ev.respondWith(
    fetch(ev.request).then(function(antwort){
      const kopie = antwort.clone();
      caches.open(CACHE).then(function(c){ c.put(ev.request, kopie); }).catch(function(){});
      return antwort;
    }).catch(function(){
      return caches.match(ev.request).then(function(treffer){
        return treffer || caches.match("./index.html");
      });
    })
  );
});
