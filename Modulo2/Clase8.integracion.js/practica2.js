//Array bidimencional ...
const gondola = [
    ["Cafe", "Yerba","Galletitas"],
    [1,6,7],
    [99,5,56]
];

const gondolaSimplificado = gondola.flat();  //Une todos los array en uno solo simple que contiene todos los array en uno.  Si hay mas dimenciones al () del flat se le pone 1 , 2 , 3.

for(let i = 0; i < gondolaSimplificado.length; i++){   //Lo trabajas como si fuera un array comun.
    //console.log(gondolaSimplificado[i]);
}

for(let i = 0; i < gondola.length; i++){
    for(let j = 0; j < gondola[i].length; j++){  //Itera en un segundo indice del array.
        //console.log(gondola[i][j])
    }
}

/* ------------------------------------------------------------------- */
//LA CLAVE SECRETA : 

function laClaveSecreta(caracteres){
    let nuevoArray = [];
    for(let i = 0; i < caracteres.length; i++){
        if(caracteres[i] !== "*"){
            nuevoArray.push(caracteres[i]);
        }
    }
    let nuevoArray1 = [];
    for(let j = 0; j < nuevoArray.length; j++){
        nuevoArray1.unshift(nuevoArray[j]);
    }

return nuevoArray1.join("");
}

//console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));

/*------------------------------------------------------------------------- */

let = oracionOriginal = "Hola Federico";

function InvertirTexto(oracion){
    let oracionInvertida = oracion.split("").reverse().join(""); //split : para hacerlo array  - reverse : para darlo vuelta - join : para volver a hacerlo string.
    return oracionInvertida;
}
//console.log(InvertirTexto(oracionOriginal));

/*------------------------------------------------------------------------- */

function primeraPalabra(oracion){
    let recorteOracion = oracion.slice(0,4); //Para buscar un pedazo del texto
    return recorteOracion;
}

//console.log(primeraPalabra(oracionOriginal));

/*------------------------------------------------------------------------- */

function ultimaPalabra(oracion){
    let recorteOracion = oracion.slice(4); //Para buscar un pedazo del texto
    return recorteOracion;
}

//console.log(ultimaPalabra(oracionOriginal));

/*------------------------------------------------------------------------- */

function listaDePalabras(oracion){
    let lista = oracion.split(" ");  //Para hacerlo array y separados por comas cada palabra.
    return lista;
}
// console.log(listaDePalabras(oracionOriginal));

/*------------------------------------------------------------------------- */
