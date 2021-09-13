self.addEventListener('install', event => {

    console.log('SW: Instalación Lista');

});

self.addEventListener('activate', event => {
    console.log('SW: Activo y listo para contralar la app despues de la modificación ');
});

self.addEventListener('fetch', event => {
    
    console.log(event);

    event.respondWith(fetch(event.request));

    // if(event.request.url.includes('.jpg')){
    //     console.log('Es una imagen =D');
    //     let newResponse = fetch('/images/falino.jpg');
    //     event.respondWith(newResponse);
    // }

    // if(event.request.url.includes('page.css')){

    //     let newResponse = new Response(`body {background-color: black !important ;
    //     color: pink !important;}`,{
    //         headers:{
    //             'Content-Type':'text/css'
    //         }
    //     })
    //     event.respondWith(newResponse);;
    // }

});