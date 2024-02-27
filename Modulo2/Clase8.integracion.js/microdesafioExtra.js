/*----------------   FUNCION 1  ------------------ */

let array = [10,2,8,4,6];
let numeroSolicitado = 10;

function encontrarElNumero(arrayDenumeros,numeroAEncontrar){
    for(let i = 0; i < arrayDenumeros.length; i++){
        if(arrayDenumeros.includes(numeroAEncontrar)){
        return "“El número " + numeroAEncontrar + " sí existe en el array ";
        }
    }      
    return "El valor solicitado no existe";
}

/*----------------   FUNCION 2  ------------------ */

function juegoDeTrompito(arrayTrompito, cantidadVueltas) {
    if (cantidadVueltas < 2 || cantidadVueltas > 6) {
        return "La cantidad de vueltas debe estar entre 2 y 6.";
    }

    let indiceAleatorio = Math.floor(Math.random() * arrayTrompito.length);

    return arrayTrompito[indiceAleatorio];
}

let trompitoMessages = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
let vueltas = 4; 

let resultado = juegoDeTrompito(trompitoMessages, vueltas);

/*----------------   FUNCION 3 ------------------ */

let arrayNumerico = [0,1,2,3,4,5,6,7,8,9];

function sumartoriaDeParesOImpares(arrayDeNumeros){
    let impares = 0;
    let pares = 0;
    for(i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] % 2 != 0){
            impares += arrayDeNumeros[i];
        }
        else{
            pares += arrayDeNumeros[i]
        }
    }
    return "El total de numeros pares es de " + pares +"\n" + "El total de numeros impares es de " + impares;
}

console.log(sumartoriaDeParesOImpares(arrayNumerico));







/* Math.floor() es una función en JavaScript que devuelve el mayor entero menor o igual a un número. Aquí tienes algunos ejemplos de cómo se puede utilizar: 

let numero1 = 5.78;
let redondeo1 = Math.floor(numero1);
console.log(redondeo1); // Salida: 5

let numero2 = -3.14;
let redondeo2 = Math.floor(numero2);
console.log(redondeo2); // Salida: -4   REDONDEA SIEMPRE HACIA ABAJO

*/

