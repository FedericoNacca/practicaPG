/* 
Una función es un bloque de código que nos permite realizar una tarea en particular. Para que la función se ejecute, "algo" debe invocarla. 
Es una herramienta muy útil porque estiliza el código y lo hace más escalable. 

Es un listado de procedimientos que se va a ejecutar cuando sea necesario.

Declaradas : Es aquella que recibe un nombre formal y no se asigna como valor a una variable. 
Ej : function sumar(){}...
Tener en cuenta que se carga antes de que cualquier codigo sea ejecutado.
*/

//Ejemplo declarada
function elDoble (unNumero){
    return unNumero * 2;
}

console.log(elDoble(6));

// Ejemplo 2 declarada
function cantidadDeEntradas (boletos){
        return boletos + 1;
}

console.log(cantidadDeEntradas(3));

// Ejemplo 3 declarada 

function restar (numeroC,numeroD){
    return numeroC - numeroD;
}
console.log(restar(10,5));
/* ----------------------------------------------------------------------------------------------------------------*/
// Funcion con switch 

let dia = "viernes"

function finDeSemana (dia){
        switch(dia){
		case "viernes":
			console.log("buen finde");
			break;
		case "lunes":
			console.log("buena semana");
			break;
		default:
			console.log("buen dia");
	}
}
/* ----------------------------------------------------------------------------------------------------------------*/
finDeSemana(dia);

// Otro ejemplo de funcio con switch 
function tengoClases(dia) {
	switch(dia) {
		case "lunes":
			console.log("tenés clases");
			break;
		case "miércoles":
			console.log("tenés clases");
			break;
		case "viernes":
			console.log("tenés clases");
			break;
    	default:
			console.log("no tenés clases");
			
	}
}
console.log(tengoClases("lunes"));
