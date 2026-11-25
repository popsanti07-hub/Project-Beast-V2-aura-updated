const CACHE='beast-mode-v3';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{const cache=await caches.open(CACHE);for(const url of CORE){try{await cache.add(url)}catch(err){console.warn('Could not cache',url,err)}}await self.skipWaiting()})());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('beast-mode-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})());
});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(req);if(cached)return cached;try{const response=await fetch(req);if(response&&response.ok)cache.put(req,response.clone());return response}catch(err){if(req.mode==='navigate')return (await cache.match('./index.html'))||Response.error();return Response.error()}})());
});
