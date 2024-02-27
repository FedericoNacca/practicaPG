function noParesDeContarImparesHasta(numero){
    let numerosImpares = 0;
    for(let i = 0; i <= numero; i++ ){
    if(i % 2 !== 0 ){
        numerosImpares++;
    }
    return numerosImpares;
}
}
// console.log(noParesDeContarImparesHasta(50));

/*------------------------------------------------------------*/

function tablaDeMultiplicar3(numero){
    let i = 1;
    while(i <= 10){
        let resultado = numero * i;
        // console.log(numero + " * " + i + " = " + resultado)
        i++;
    }
}
tablaDeMultiplicar3(10);

/*---------------------------------------------------------- */

function gananciaTotal(unPeriodo){  //Se define una función llamada gananciaTotal que toma un parámetro llamado unPeriodo
let sumatoria = 0;                  //Se crea una variable llamada sumatoria e se inicializa en 0. Esta variable se utilizará para almacenar la suma acumulativa de los elementos en el arreglo.
    for(i = 0; i < unPeriodo.length; i++ ){ //Se utiliza un bucle for para recorrer cada elemento en el arreglo unPeriodo. La variable de control del bucle es i
       let mes = unPeriodo[i];       
       sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

// console.log(gananciaTotal([6,7,4,6,9,7,45,4,48,454]));

/*----------------------------------------------------------- */

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {    
        let mes = unPeriodo[i];             
        sumatoria = sumatoria + mes;  //Otra :      sumatoria += mes;
    }   
    return sumatoria;
}
// console.log(gananciaTotal([]));
// console.log(gananciaTotal([100]));
// console.log(gananciaTotal([100, 2]));
// console.log(gananciaTotal([2, 10, -20]));
// console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));



function saldosDeMesesConGanancia(periodos){
    let cantidadDePeriodos = [];  //Se inicia un contador de un array.
    for(i = 0; i <= periodos.length; i++){  //Se itera hasta llegar al final del array.
        if(periodos[i] > 0){                //Se condiciona que sea positivo ( o mayor que 0 ).
        cantidadDePeriodos.push(periodos[i]);   //Si da true se pushea a cantidadDePeriodos.
    }
    }
    return cantidadDePeriodos;
}

// console.log(saldosDeMesesConGanancia([3,5,6,-1,-5,2]));

/*---------------------------------------------------------- */

function cantidadDeMesesConPerdida(periodo){
    let cantidadMesesPerdida = 0;
    for(let i = 0; i <= periodo.length; i++){
        if(periodo[i] < 0){
            cantidadMesesPerdida = cantidadMesesPerdida + 1;
        }
    }
    return cantidadMesesPerdida;
}

//console.log(cantidadDeMesesConPerdida([-2,-5,2,8,6,-3]));


/*---------------------------------------------------------- */

function esNumeroPrimo(n){            //Funcion para sacar un numero primo.
    if (n <= 1){
            return false;
    }   
        for (let i = 2; i < n; i++){
            if (n % i == 0) return false;
        }
        return true;
    }

//console.log(esNumeroPrimo(100));

/*---------------------------------------------------------- */

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if(unPeriodo[i] > 0){
        cantidad++
      }
    }
    return cantidad;
  }

//console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));

function saldosDeMesesConGanancia(unPeriodo){
    let contandoMesesGanancia = [];
    for(let i = 0; i < unPeriodo.length; i++){
        if(unPeriodo[i] > 0){
            contandoMesesGanancia.push(unPeriodo[i]);
        }
    }
    return contandoMesesGanancia
}

//console.log(saldosDeMesesConGanancia([2,5,-3,-2,3]));

/*---------------------------------------------------------------------------- */

function sumatoriaBajoImporte(arrayImportes){
    let contador = 0;
    for(let i= 0; i < arrayImportes.length; i++){
        if(arrayImportes[i] > 0 && arrayImportes[i] <= 1000){
            contador += arrayImportes[i];
        }
    }
    return contador
}

/*---------------------------------------------------------------------------- */

/*------------------------------------------------------ */
function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if(unPeriodo[i] > 0){
        cantidad = cantidad + 1;
      }
    }
    return cantidad;
  }
  
  //console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));
  //console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]));

/*------------------------------------------------------ */ 

function saldosDeMesesConGanancia(periodos){
    let cantidadDePeriodos = 0;
    for(i = 0; i <= periodos.lenght; i++){
        if(periodos > 0){
        cantidadDePeriodos = cantidadDePeriodos.split(" ");
        }
    }
    return cantidadDePeriodos;
}

//console.log(cantidadDeMesesConGanancia([2,4,8,-5,7,2-5]));

/*------------------------------------------------------ */ 



/*------------------------------------------------------ */ 

