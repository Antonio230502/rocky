"serviceWorker" in navigator && navigator.serviceWorker.register("sw.js")
const botonRegresar = document.querySelector("#btnRegresar")
const parametros = new URLSearchParams(window.location.search)
const imagen = parametros.get('personaje')
const nombrePersonaje = document.querySelector("#nombrePersonaje")
const descripcion = document.querySelector("#descripcion")
const imagenPersonaje = document.querySelector("#imagenPersonaje")
const tituloPagina = document.querySelector("title")
tituloPagina.innerText = "Prueba"

switch (imagen){
    case "Adonis.jpg":
        nombrePersonaje.innerText = "Adonis Creed"
        tituloPagina.innerText = "Detalles de Adonis Creed"
        descripcion.innerText = `Adonis Creed es un personaje ficticio de la franquicia de películas "Creed", que a su vez es una extensión de la famosa serie de películas sobre boxeo "Rocky". Adonis es interpretado por el actor Michael B. Jordan.

        Adonis es el hijo ilegítimo de Apollo Creed, un antiguo campeón de boxeo y rival de Rocky Balboa. Después de la muerte de su padre, Adonis decide seguir sus pasos y se convierte en un boxeador profesional. A pesar de tener un talento innato para el boxeo, Adonis enfrenta desafíos para establecer su propio legado y superar la sombra de su famoso padre.
        
        A lo largo de las películas, Adonis es un personaje complejo que lucha por encontrar su identidad como boxeador y como hombre. La saga "Creed" explora temas de legado, determinación y superación personal, y muestra el viaje de Adonis desde ser un joven aspirante a campeón hasta convertirse en un contendiente de renombre en el mundo del boxeo.`
        break
    case "Adrian.jpg":
        tituloPagina.innerText = `Detalles de Adrian Pennino`
        nombrePersonaje.innerText = "Adrian Pennino"
        descripcion.innerText = `Adrian Pennino es interpretada por la actriz Talia Shire. Es un personaje central en la historia y juega un papel crucial en la vida de Rocky Balboa, el protagonista de la serie.

        Al principio de la saga, Adrian es retratada como una mujer tímida y reservada que trabaja en una tienda de animales en Filadelfia. Es la hermana del amigo de Rocky, Paulie Pennino. A lo largo de la historia, Adrian se convierte en el interés romántico de Rocky y, a medida que su relación se desarrolla, se convierte en su apoyo más cercano y confiable.
        
        Adrian también juega un papel fundamental en la carrera de boxeo de Rocky. Ella es la fuente de su fuerza y motivación, y lo anima a perseguir sus sueños en el ring. A medida que la saga progresa, Adrian se convierte en la esposa de Rocky y más tarde en la madre de su hijo.
        
        El personaje de Adrian es conocido por su profunda compasión, inteligencia y apoyo incondicional a Rocky en todas sus aventuras. Su relación es un pilar importante de la narrativa y ha dejado una marca indeleble en la cultura popular.`
        break
    case "Apolo.jpg":
        nombrePersonaje.innerText = "Apolo Creed"
        tituloPagina.innerText = `Detalles de Apolo Creed`
        descripcion.innerText = `Apolo Creed es un personaje ficticio en la saga de películas de boxeo "Rocky", interpretado por el actor Carl Weathers. Es un boxeador altamente exitoso y campeón del mundo en la serie de películas.

        Apolo es conocido por su carisma, habilidades excepcionales en el ring y su personalidad extrovertida. Es un campeón respetado y cariñosamente apodado "El Maestro del Desastre". Es el rival principal de Rocky Balboa en las dos primeras películas de la serie. La primera pelea entre Rocky y Apolo es un combate épico que marca el inicio de la saga y se convierte en un evento icónico del cine.
        
        A lo largo de las películas, Apolo Creed se desarrolla como un personaje complejo y multifacético. Aunque inicialmente es presentado como un competidor feroz y a menudo arrogante, con el tiempo se convierte en un amigo cercano y mentor para Rocky. Su relación evoluciona hacia una profunda amistad y respeto mutuo.
        
        La historia de Apolo Creed también se expande en la serie de películas "Creed", donde es recordado como una leyenda del boxeo y su legado continúa a través de su hijo, Adonis Creed.`
        break
    case "Clubber Lang.jpg":
        nombrePersonaje.innerText = "Clubber Lang"
        tituloPagina.innerText = `Detalles de Clubber Lang`
        descripcion.innerText = `Clubber Lang es un personaje ficticio en la franquicia de películas "Rocky III". Es interpretado por el actor Mr. T. Clubber es un boxeador extremadamente poderoso, agresivo y desafiante que se convierte en el principal antagonista en la tercera entrega de la serie "Rocky".

        A diferencia de los anteriores oponentes de Rocky, Clubber Lang es conocido por su estilo de lucha brutal y su actitud provocativa. Es famoso por sus declaraciones desafiantes y su falta de respeto hacia Rocky Balboa y otros boxeadores de renombre.
        
        Clubber Lang emerge como una verdadera amenaza para Rocky y lo desafía a una pelea por el título. En su enfrentamiento, Clubber logra vencer a Rocky de manera contundente, lo que lleva a una profunda crisis en la carrera y confianza del campeón.
        
        Este personaje es un punto de inflexión en la historia de Rocky, ya que representa un desafío completamente diferente en comparación con los oponentes anteriores. La relación entre Rocky y Clubber Lang es una parte central de la trama de "Rocky III".`
        break
    case "Ivan Drago.jpg":
        nombrePersonaje.innerText = "Ivan Drago"
        tituloPagina.innerText = `Detalles de Ivan Drago`
        descripcion.innerText = `Ivan Drago es un personaje ficticio en la franquicia de películas "Rocky IV". Es interpretado por el actor Dolph Lundgren. Drago es un boxeador profesional de la Unión Soviética y es presentado como una máquina física imponente y altamente entrenada.

        Lo que distingue a Ivan Drago es su enfoque científico y tecnológico hacia el entrenamiento y el boxeo. Es conocido por su impresionante fuerza física, resistencia y habilidades en el ring. Drago representa la cima de la tecnología y la preparación física en el mundo del boxeo.
        
        Drago se convierte en el principal antagonista en "Rocky IV" cuando desafía a Rocky Balboa a una pelea después de la trágica muerte de Apollo Creed en un enfrentamiento contra Drago. La pelea entre Rocky y Drago se lleva a cabo en Moscú y se convierte en un evento de gran relevancia política y mediática, ya que representa un enfrentamiento entre dos superpotencias durante la Guerra Fría.
        
        A lo largo de la película, se explora la rivalidad y el conflicto ideológico entre Rocky y Drago, así como las diferencias en sus enfoques hacia el boxeo y la vida en general.
        
        Ivan Drago es uno de los personajes más icónicos en la saga de películas "Rocky" y su enfrentamiento con Rocky Balboa es uno de los momentos más memorables en la historia del cine deportivo.`
        break
    case "Mason Dixon.webp":
        nombrePersonaje.innerText = "Mason Dixon"
        tituloPagina.innerText = `Detalles de Mason Dixon`
        descripcion.innerText = `"The Line" Dixon es un personaje ficticio en la película "Rocky Balboa" (2006), la sexta entrega de la saga de Rocky. Dixon es interpretado por el actor Antonio Tarver.

        Mason Dixon es un boxeador de peso pesado que representa una nueva generación en el mundo del boxeo profesional. Es un campeón indiscutible, pero enfrenta críticas y escepticismo debido a que no ha tenido oponentes que le ofrezcan un verdadero desafío en el cuadrilátero.
        
        A lo largo de la película, Mason Dixon se enfrenta a Rocky Balboa en una pelea de exhibición. Esta pelea se presenta como una oportunidad para ambos: para Dixon, es una forma de probar su valía y ganar respeto como campeón legítimo, y para Rocky, es una oportunidad de volver al ring y mostrar que todavía tiene lo necesario para competir.
        
        A medida que avanza la película, Mason Dixon se convierte en un personaje que busca redimir su reputación y demostrar que es un verdadero campeón, no solo en términos de títulos, sino en cuanto a su habilidad y valía como boxeador.
        
        La inclusión de Mason Dixon en la trama de "Rocky Balboa" representa una reflexión sobre la evolución del mundo del boxeo y el contraste entre la vieja guardia representada por Rocky y la nueva generación de boxeadores.`
        break
    case "Mickey Goldmill.jpg":
        nombrePersonaje.innerText = "Mickey Goldmill"
        tituloPagina.innerText = `Detalles de Mickey Goldmill`
        descripcion.innerText = `Mickey Goldmill es un personaje ficticio en la saga de películas "Rocky". Es interpretado por el actor Burgess Meredith. Mickey es un entrenador de boxeo experimentado y enérgico que desempeña un papel fundamental en la carrera de Rocky Balboa.

        Mickey es conocido por su estilo directo y a menudo abrasivo de entrenar a los boxeadores. A pesar de su apariencia gruñona, Mickey es un experto en el mundo del boxeo y tiene un profundo conocimiento sobre tácticas y estrategias de combate.
        
        Incluso desde el principio, cuando Rocky era un desconocido boxeador local de Filadelfia, Mickey veía el potencial en él y quería guiarlo hacia la grandeza. A lo largo de la serie de películas, Mickey se convierte en una figura paterna y mentor para Rocky, aunque a veces su relación está marcada por la tensión y los desafíos.
        
        La dinámica entre Mickey y Rocky es un aspecto emocionalmente poderoso en la trama de las películas. Mickey juega un papel crucial en el desarrollo de Rocky como boxeador y como persona.
        
        El personaje de Mickey Goldmill es recordado y querido por los fanáticos de la saga "Rocky" por su carácter distintivo y su impacto en la historia de Rocky Balboa.`
        break
    case "Paulie.jpg":
        nombrePersonaje.innerText = "Paulie Pennino"
        tituloPagina.innerText = `Detalles de Paulie Pennino`
        descripcion.innerText = `Paulie Pennino es un personaje ficticio en la saga de películas "Rocky". Es interpretado por el actor Burt Young. Paulie es el hermano de Adrian Pennino y desempeña un papel recurrente en la serie.

        Paulie es un personaje complejo, a veces temperamental y a menudo impulsivo. A lo largo de la saga, se le muestra como alguien que puede ser cariñoso y protector hacia su hermana Adrian, pero también puede ser propenso a estallidos de enojo y resentimiento.
        
        Aunque Paulie no es un boxeador, tiene una conexión profunda con el mundo del boxeo a través de su relación con su cuñado, Rocky Balboa. A veces, Paulie puede ser un apoyo importante para Rocky, pero también puede ser una fuente de conflicto y tensión en la relación.
        
        A lo largo de las películas, el personaje de Paulie evoluciona y se muestra enfrentando sus propios desafíos y buscando su lugar en el mundo. A pesar de sus defectos, Paulie se convierte en un personaje querido y a menudo proporciona momentos de humor y humanidad en la saga.`
        break
    case "rocky1.jpg":
        nombrePersonaje.innerText = "Rocky Balboa"
        tituloPagina.innerText = `Detalles de Rocky Balboa`
        descripcion.innerText = `Rocky Balboa es el personaje principal en la saga de películas "Rocky". Es interpretado por el actor Sylvester Stallone. Rocky es un boxeador originario de Filadelfia, conocido por su resistencia, determinación y corazón.

        Al principio de la serie, Rocky es retratado como un boxeador relativamente desconocido que lucha en peleas locales. Sin embargo, su vida cambia drásticamente cuando se le presenta la oportunidad de enfrentar al campeón del mundo, Apollo Creed, en un combate por el título.
        
        A lo largo de la saga, Rocky se convierte en un ícono del boxeo y en una figura legendaria. Su estilo de pelea se caracteriza por su capacidad para soportar una gran cantidad de castigo y su habilidad para lanzar golpes poderosos en momentos cruciales.
        
        Más allá del ring, Rocky es conocido por su humildad, su lealtad hacia sus amigos y su profundo sentido del honor. A lo largo de las películas, se enfrenta a numerosos desafíos tanto en el boxeo como en su vida personal, lo que lo convierte en un personaje complejo y profundamente humano.
        
        La franquicia "Rocky" no solo se centra en su carrera como boxeador, sino también en sus relaciones con personajes como Adrian, Paulie, Mickey y otros, lo que agrega capas de emoción y drama a la historia.`
        break
    case "Tommy_Gunn.webp":
        nombrePersonaje.innerText = `Tommy "Machine" Gunn`
        tituloPagina.innerText = `Detalles de Tommy "Machine" Gunn`
        descripcion.innerText = `Tommy "Machine" Gunn es un personaje ficticio en la película "Rocky V" (1990), que es la quinta entrega de la saga "Rocky". Es interpretado por el actor Tommy Morrison.

        Tommy Gunn es un joven boxeador con un talento natural para el deporte. Es descubierto por Rocky Balboa, quien se convierte en su entrenador y mentor. Gunn rápidamente se convierte en un contendiente de peso pesado y gana popularidad en el mundo del boxeo.
        
        Sin embargo, a medida que la fama y el éxito llegan a Gunn, también lo hace la presión y la ambición. Gunn se siente cada vez más marginado y desilusionado por la sombra de Rocky y la atención mediática constante que recibe.
        
        La relación entre Tommy Gunn y Rocky Balboa se complica a medida que la trama avanza. Gunn se aleja de Rocky en busca de una gestión más lucrativa y, como resultado, cae en un camino de autodestrucción y corrupción.
        
        Tommy Gunn representa una exploración de los peligros de la fama rápida y el deseo de reconocimiento a cualquier costo. Su personaje añade una nueva capa de complejidad a la trama de la serie "Rocky", ya que se enfrenta a desafíos muy diferentes en comparación con los antagonistas anteriores.`
        break
}

imagenPersonaje.setAttribute("src", `Img/${imagen}`)

botonRegresar.onclick = () => window.location.href = "personajes.html"