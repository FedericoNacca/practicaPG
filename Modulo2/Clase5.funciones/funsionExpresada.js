/*
Expresadas : Es aquella que se asigna como valor a una variable. 
Ej : let sumar = function({})...
Tener en cuenta que ser carga unicamente cuando el interprete alcanza esa linea de codigo 
donde se encuentra la funsion
*/

// Ejemplo expresada
let sumar1 = function(numeroA,numeroB){
    return numeroA + numeroB;
}

console.log(sumar1(3,3));


//Ejemplo suma

function sumarAlnumero(numero){
    return numero + 2;
}
console.log(sumarAlnumero(13));

// Por ejemplo, si queremos sumar dos números y después multiplicarlos por 3, podríamos hacerlo de la siguiente forma.

function sumar(numero1,numero2){
    return numero1 + numero2;
}


function tripleDeLaSuma(numero3,numero4){
    let resultadoDeLaSuma = sumar(numero3,numero4)  //Esta la funcion sumar que se declaro anteriormente en la lunea 25.
    return resultadoDeLaSuma * 3;
}
/* ----------------------------------------------------------------------------------------------------------------*/

// Sacando radio y perimetro de un circulo

function perimetro(radio){
    return 3.14 * radio * 2;
}

function area(radio){
    return 3.14 * radio * radio;
}
/* ----------------------------------------------------------------------------------------------------------------*/

// Operando Strings : Por ejemplo podemos medir qué tan largos son (en caracteres) con el método length:
"biblioteca".length        //Devuelve 10
"Buenos días".length      // devuelve 11, porque el espacio es un caracter también

/* ----------------------------------------------------------------------------------------------------------------*/
// Escribí una función longitudNombreCompleto que tome un nombre y un apellido como parametro y devuelva su longitud total, contando un espacio extra para separar a ambos.
function longitudNombreCompleto(nombre,apellido){
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}
console.log(longitudNombreCompleto("Federico","Naccarato"));
/* ----------------------------------------------------------------------------------------------------------------*/

