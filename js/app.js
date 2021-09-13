console.log('Hola Mundo');

if (navigator.serviceWorker) {
    console.log('Service Worker Disponible :D ');
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log('No disponible');
}