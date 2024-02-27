let peliculas = ["Turno dedía", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"];
let cambioDeIndice = peliculas.pop(); //Sacar el ultimo y lo guarda en la variable 
peliculas.unshift(cambioDeIndice); //Agregar en el 1er indice 

let = primerPalabra = peliculas[0]; //Guardar la primer palabra

function modificarAMayuscula(primerPalabra){
    return primerPalabra.toUpperCase(0); //Pasa a mayuscula
}

console.log(modificarAMayuscula(primerPalabra)); //Llama a la funcion con el argumento.

let peliculasProximasAEstrenar = ["Counter-Strike" ,"NOP" , "Vértigo", "Nick", "Avatar"];
let sacaElPrimero = peliculasProximasAEstrenar.shift();  //Saca el primer indice 

function todas(peliculas,peliculasProximasAEstrenar){
    return peliculas.concat(peliculasProximasAEstrenar);  //Concatena 2 array o mas. 
}
console.log((todas(peliculas,peliculasProximasAEstrenar)));

/*--------------------------------------------------------------------------------------------------------------------------------*/

let electrodomesticos = ["lavarropas", "heladera", "microondas", "pava electrica", "batidora", "tostadora"];

// console.log(electrodomesticos[0]);
// console.log(electrodomesticos[4]);
// console.log(electrodomesticos[25]);

let sacarPrimero = electrodomesticos.shift();

// console.log(sacarPrimero);
// console.log(electrodomesticos);

electrodomesticos.push(sacarPrimero);
// console.log(electrodomesticos);

electrodomesticos.push("horno electrico", "plancha")
// console.log(electrodomesticos);

let cantidadElementos = electrodomesticos.length;
// console.log(cantidadElementos);

// console.log(electrodomesticos.length);

let productoEncontrado = electrodomesticos.includes("tostadora");

function encontrarProducto1(parametro1) {
    if (parametro1) {
        return "Encontrado";
    } else {
        return "No encontrado";
    }
}

// console.log(encontrarProducto1(productoEncontrado));

let nuevoString = electrodomesticos.join(",");

// console.log(nuevoString);
// console.log(nuevoString.length);

let electroRecortado = nuevoString.replace("tostadora", "planchita de pelo");

// console.log(electroRecortado);

let nuevoArrayElectrodomesticos = electroRecortado.split(",")


// console.log(nuevoArrayElectrodomesticos);

let peliculas1 = ['Turno de día', '30 noches con mi ex', "Bestia", 'El monte', 'Top gun maverick',"Elvis","Thor: amor y trueno"]

let sacarPeli = peliculas.pop();

function modificarPeli(peliAModificar){
    let aMayusculas = peliAModificar.toUpperCase();
    return aMayusculas;
}

peliculas.unshift(modificarPeli(sacarPeli));

console.log(peliculas);

let nuevasPelis = "Counter-Strike NOP Vértigo Nick Avatar"

let nuevoArrayPelis = nuevasPelis.split(" ");

console.log(nuevoArrayPelis);

nuevoArrayPelis.shift();

console.log(nuevoArrayPelis);

function unirArrays(parametro1, parametro2) {
    let arrayUnido = parametro1.concat(parametro2);
    return arrayUnido;
}
let arrayFinal = unirArrays(peliculas, nuevoArrayPelis);

console.log(arrayFinal);
