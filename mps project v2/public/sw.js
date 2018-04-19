self.addEventListener('install',function(event){
    console.log('service worker installed',event);
});

self.addEventListener('activate',function(event){
    console.log('service worker activated',event);
    return self.clients.claim();
});

self.addEventListener('fetch',function(event){
    console.log('service worker fetch',event);
});