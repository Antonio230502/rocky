let CACHE_NAME = "Boveda Principal"

self.addEventListener('install', e => {

    const recursos = caches.open(CACHE_NAME).then(cache => {
        cache.add('/'),
            cache.add('css/bootstrap1.min.css'),
            cache.add('css/detalles.css'),
            cache.add('css/index.css'),
            cache.add('css/personajes.css'),

            cache.add('Img/principal.jpg'),
            cache.add('Img/left-arrow.png')
            
            cache.add('Img/Adonis.jpg'),
            cache.add('Img/Adrian.jpg'),
            cache.add('Img/Apolo.jpg'),
            cache.add('Img/Clubber Lang.jpg'),
            cache.add('Img/Ivan Drago.jpg'),
            cache.add('Img/Mason Dixon.webp'),
            cache.add('Img/Mickey Goldmill.jpg'),
            cache.add('Img/Paulie.jpg'),
            cache.add('Img/rocky1.jpg'),
            cache.add('Img/Tommy_Gunn.webp'),

            cache.add('Img/pelicula1.jpg'),
            cache.add('Img/pelicula2.jpg'),
            cache.add('Img/pelicula3.jfif'),
            cache.add('Img/pelicula4.jfif'),
            cache.add('Img/pelicula5.jfif'),
            cache.add('Img/pelicula6.jpg'),
            cache.add('Img/pelicula7.jfif'),
            cache.add('Img/pelicula8.jpg'),
            cache.add('Img/pelicula9.jpg'),
            cache.add('Img/peliculaDefault.jpg'),

            cache.add('js/detalles.js'),
            cache.add('js/index.js'),
            cache.add('js/personajes.js'),
            cache.add('js/pouchdb.min.js'),
            cache.add('js/uuid_8.3.2.min.js'),

            cache.add('detalles.html'),
            cache.add('detalles.html?personaje=Adrian.jpg'),
            cache.add('detalles.html?personaje=*'),
            cache.add('index.html'),
            cache.add('personajes.html'),

            cache.add('manifest.json'),
            cache.add('sw.js')
    })

    e.waitUntil(recursos);
})

self.addEventListener('fetch', e => {

    //Estrategia 3 first network then cache
    const respuesta = fetch(e.request).then(newResp => {
        caches.open(CACHE_NAME)
            .then(cache => {
                cache.put(e.request, newResp)
            });

        return newResp.clone()
    }).catch(err => {
        return caches.match(e.request)
    })
    e.respondWith(respuesta);
})