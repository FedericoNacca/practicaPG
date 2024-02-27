/* 
1. Map().  Se ejecuta sobre un array dado y recibe como parametro un callback,
dicho callback recorre uno a uno todos los elementos del array dado.
Tomando como parametro cada uno de los elementos y se encargar de retornar
un array nuevo con la misma cantidad de elementos del array original

2. filter();  Filtrar los elementos de un array, toma cada uno 
de los elementos y devuelve solo aquellos que cumplan con la definion defindia

3. reduce();  Se ejecuta sonbre un array y reduce a la mas mini esxprecion
el array dado , retornando un unico valor.
Recibe 2 parametros:    
1.El acumulador
2.El elemento actual

4. forEach();  Itera sobre un array dado, recibe como parametro un callback 
que recorre el array dado. No devuelve nada solo itera en el array.
*/
let notas = [10,4,5,8,9,2,9];

let notasHastaEl100 = notas.map(function(numero){  //Devuelve el array pero modificado.
    return numero * 10;
});

//console.log(notasHastaEl100);

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;   //Para filtrar las iguales o mayores a 7.
});

//console.log(notasAprobadas); 

let sumaNotas = notas.reduce(function(estado,numero){
    return estado + numero; //Va sumando los numeros del array los acumulando en estado.
});

//console.log(sumaNotas);

notas.forEach(function(valor,indice){
    //console.log("En la posicion " + indice + " tengo el valor " + valor);
});

/*---------- REDUCE ----------- */

let cantidadDeJugares = [5,6,1,4,7,5];

let totalJugadores = cantidadDeJugares.reduce(function(acumulador,jugador){
        return acumulador + jugador;
});

