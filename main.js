// Codigo Papel Tijeras creado por Gabriel Lagrotteria para el curso de Javascript de CoderHouse

//Meto todo en una Funcion

function jugarPiedraPapelTijera(){
let seleccion = prompt("Ingrese Piedra, Papel o Tijeras");

// Defino valores que quiero que recorra como respuesta a mi seleccion

const valorMinimo = 0;
const valorMaximo = 2;

// Inicia Loop que actua por en base al prompt

while (seleccion !== "esc") {
  // Busca un numero entero entre el 0 y el 2 con las funciones Math.floor y Math.Random esta las use un par de veces en mi carrera
    const respuesta = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
    // crea un switch el cual crea una respuesta aleatoria a mi seleccion y en caso de ser ganador o perdedor tira distintos mensajes
    switch (seleccion.toLowerCase()) {
        case "piedra":
            if (respuesta === 0) {
                alert("El oponente escogio Piedra, es un Empate");
            } else if (respuesta === 1) {
                alert("El oponente escogio Papel, Gana el Oponente");
            } else {
                alert("El oponente escogio Tijeras, Ganaste");
            }
            break;
        case "papel":
            if (respuesta === 0) {
                alert("El oponente escogio Piedra,Ganaste");
            } else if (respuesta === 1) {
                alert("El oponente escogio Papel, Empate");
            } else {
                alert("El oponente escogio Tijeras, Gana el Oponente");
            }
            break;
        case "tijeras":
            if (respuesta === 0) {
                alert("El oponente escogio Piedra, Gana el Oponente");
            } else if (respuesta === 1) {
                alert("El oponente escogio Papel, Ganaste");
            } else {
                alert("El oponente escogio Tijeras, Empate");
            }
            break;
        default:
            alert("No ha habido seleccion");
            seleccion = prompt("Ingrese Piedra, Papel o Tijeras");
            break;
    }

// Se selecciona si quieres seguir jugando para asi poder romper el While

    let repetir = prompt("¿Quieres jugar de nuevo? ¿Si o No?").toLowerCase();
        if(repetir === "no"){
            break;
        }else if (repetir !== "si"){
            alert("Eso es una respuesta invalida, por favor selecciona Si o No");
            repetir = prompt("¿Quieres jugar de nuevo? ¿Si o No?");
        } 
        seleccion = prompt("Ingrese Piedra, Papel o Tijeras");
}
}

// Llamo a la funcion

jugarPiedraPapelTijera();