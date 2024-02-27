//Ejemplo con array.
let frutas1 = ["banana","manzana","naranja"];   
let frutas2 = ["ciruela","mandarina","kiwi"];

let todasLasFrutas = [...frutas1,...frutas2];  //Para juntar dos array.
// console.log(todasLasFrutas);

let cursada = {
    curso: "Fullstack",
    turno: "Mañana",
    sede: "Belgrano"
};

let estudiante1 = {
    nombre : "Federico",
    email : "fede__fede",
    ...cursada
};

let estudiante2 = {
    nombre: "Gaston",
    email: "gaston__gaston",
    ...cursada
}

//Ejemplo con funcion
function peliculasVistas(...peliculas){
    for(i = 0; i < peliculas.length; i++){
        console.log("La persona ya vio " + peliculas[i]);
    }
}

peliculasVistas("Mi pobre angelito","Iron man","Casa fantasmas");

