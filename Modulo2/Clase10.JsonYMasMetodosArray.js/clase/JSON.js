/*
Es super liviano , permite pasar una cantidad de datos muy compleja con objetos literales. 
Aplana todos los datos y los comparte y luego desde cada lenguaje se encarga de parsearlo.
Ej: desde un texto lo convierte a un objeto.

*/
let objetoLiteral = {   //Objeto formato js.
    nombre : "Javier"
}

let json = JSON.stringify(objetoLiteral); //Lo convierte en string.


//Para importarlo =
const fs = require("fs");
let importaJson = fs.readFileSync(__dirname + "/prueba.js" , "utf-8"); //__dirname es la ruta + el final de la ruta + convertirlo en un formato comun con acentos,etc.

let jsonStringy = JSON.stringify(objetoLiteral); 
let jsonParseado = JSON.parse(jsonStringy);


console.log(jsonParseado);
console.log(json);
console.log(objetoLiteral);

/*------------------------------------------- */

console.log(pokemones.pokemones[0].nombre);  
/*De esta forma accede primero al archivo , despues al objeto pokemones , despues al indice 0 
y despues a la propiedad y por ultimo muestra el valor de esa propiedad */

