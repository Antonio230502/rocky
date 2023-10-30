"serviceWorker" in navigator && navigator.serviceWorker.register("sw.js")

//Crear base de datos
const db = new PouchDB('Personajes');
const remoteCouch = false;

const botonRegresar = document.querySelector("#btnRegresar")
const imagenPersonaje = document.querySelector("#imagenPersonaje")
const selectPersonaje = document.querySelector("#selectPersonaje")
const nombrePersonaje = document.querySelector("#nombrePersonaje")
const selectPeliculas = document.querySelector("#peliculas")
const imagenPelicula = document.querySelector("#imagenPelicula")


selectPeliculas.innerHTML = `
    <option value="null" selected disabled hidden>Selecciones una película</option>
    <option value="pelicula1.jpg">Rocky 1</option>
    <option value="pelicula2.jpg">Rocky 2</option>
    <option value="pelicula3.jfif">Rocky 3</option>
    <option value="pelicula4.jfif">Rocky 4</option>
    <option value="pelicula5.jfif">Rocky 5</option>
    <option value="pelicula6.jpg">Rocky Balboa</option>
    <option value="pelicula7.jfif">Creed I </option>
    <option value="pelicula8.jpg">Creed II</option>
    <option value="pelicula9.jpg">Creed III</option>
`

botonRegresar.onclick = () => window.location.href = "index.html"

selectPeliculas.onchange = () =>{
    imagenPelicula.setAttribute("src", `Img/${selectPeliculas.value}`)
    imagenPersonaje.setAttribute("src", `Img/personajes.jpg`)
    nombrePersonaje.innerText = ""
    nombrePersonaje.style.display = "inline"
    selectPersonaje.style.display = "inline"
    imagenPersonaje.style.display = "inline"

    switch (selectPeliculas.value){
        case "pelicula1.jpg":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adrian.jpg">Adrian Pennino</option>
                <option value="Apolo.jpg">Apolo Creed</option>
                <option value="Mickey Goldmill.jpg">Mickey Goldmill</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula2.jpg":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adrian.jpg">Adrian Pennino</option>
                <option value="Apolo.jpg">Apolo Creed</option>
                <option value="Mickey Goldmill.jpg">Mickey Goldmill</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula3.jfif":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adrian.jpg">Adrian Pennino</option>
                <option value="Apolo.jpg">Apolo Creed</option>
                <option value="Clubber Lang.jpg">Clubber Lang</option>
                <option value="Mickey Goldmill.jpg">Mickey Goldmill</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula4.jfif":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adrian.jpg">Adrian Pennino</option>
                <option value="Apolo.jpg">Apolo Creed</option>
                <option value="Ivan Drago.jpg">Ivan Drago</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula5.jfif":
           selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adrian.jpg">Adrian Pennino</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
                <option value="Tommy_Gunn.webp">Tommy "Machine" Gunn</option>
            `
            break
        case "pelicula6.jpg":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Mason Dixon.webp">Mason Dixon</option>
                <option value="Paulie.jpg">Paulie Pennino</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula7.jfif":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adonis.jpg">Adonis Creed</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula8.jpg":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adonis.jpg">Adonis Creed</option>
                <option value="Ivan Drago.jpg">Ivan Drago</option>
                <option value="rocky1.jpg">Rocky Balboa</option>
            `
            break
        case "pelicula9.jpg":
            selectPersonaje.innerHTML = `
                <option value="personajes.jpg" selected disabled hidden>Selecciona un personaje</option>
                <option value="Adonis.jpg">Adonis Creed</option>
            `
            break
    }
}

selectPersonaje.onchange = () => {
    imagenPersonaje.setAttribute("src", `Img/${selectPersonaje.value}`)
    nombrePersonaje.innerText = selectPersonaje.selectedOptions[0].text
    imagenPersonaje.style.cursor = "pointer"
}

imagenPersonaje.onclick = () =>{
    if(selectPersonaje.value != "personajes.jpg"){
        window.location.href = `detalles.html?personaje=${selectPersonaje.value}`
        agregarPersonajeBD()
    }    
}

const agregarPersonajeBD = () =>{
    const personaje = {
        _id : uuid.v4(),
        personaje : selectPersonaje.selectedOptions[0].text,
        imagenPersonaje : selectPersonaje.value,
        pelicula : selectPeliculas.selectedOptions[0].text,
        imagenPelicula : selectPeliculas.value
    }

    db.put(personaje, (err, result) => !err && console.log('Personaje registrado correctamente'))
}