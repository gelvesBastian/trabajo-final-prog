//Obtengo el elemento a, para poder acceder a los atributos
let enlaceVideoJuego1 = document.querySelector ('.enlaceVideoJuego1')
//Utilizo el elemento a y el evento onClick para que al presionar boton, te redirija a la página del juego mediante el href.
enlaceVideoJuego1.onclick = function(){
    let prompt = prompt("Estás seguro de ir a este sitio? Si seleccionas que si te redirigue a la página del juego, sino a la página principal");
    if(prompt){
        enlaceVideoJuego1.href = "https://poki.com/es/g/subway-surfers"
    } else {
        enlaceVideoJuego1.href = "https://poki.com/es/"
    }
    
}

//Obtengo el elemento a, para poder acceder a los atributos
let enlaceVideoJuego2 = document.querySelector('.enlaceVideoJuego2')
//Utilizo el elemento a y el evento onClick para que al presionar boton, te redirija a la página del juego mediante el href.
enlaceVideoJuego2.onclick = function(){
    enlaceVideoJuego2.href = "https://poki.com/es/g/blumgi-slime"
}

//Obtengo el elemento a, para poder acceder a los atributos
let enlaceVideoJuego3 = document.querySelector('.enlaceVideoJuego3')
//Utilizo el elemento a y el evento onClick para que al presionar boton, te redirija a la página del juego mediante el href.
enlaceVideoJuego3.onclick = function(){
    enlaceVideoJuego3.href = "https://poki.com/es/g/vectaria-io" 
}


//Obtengo el elemento a, para poder acceder a los atributos
let enlaceVideoJuego4 = document.querySelector('.enlaceVideoJuego4')
//Utilizo el elemento a y el evento onClick para que al presionar boton, te redirija a la página del juego mediante el href.
enlaceVideoJuego4.onclick = function(){
    enlaceVideoJuego4.href = "https://poki.com/es/g/monkey-mart"
}
