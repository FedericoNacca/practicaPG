/*Ya sabemos cómo generar distintos tipos de datos en distintas variables, ya sean números, booleanos, 
o cadenas de caracteres (strings)… Pero ¿cómo podemos agrupar mucha información en una sola variable?
Para ello contamos con un tipo de dato un poco más estructurado llamado array —también conocido como lista
o arreglo—, que no es más que una “colección de elementos”.*/

//Permite generar un conjunto de datos ordenados.

let edades = [22, 34, 51, 76, 52, 25];
console.log(edades.length);
let nombres = ["Federico", "Nacho"];
let valoresDeVerdad = [true, false];
let variado = [true, 23, "Rodrigo", edades];

console.log(variado[3][1]); //Hay que abrir corchete nuevo para ir buscando en el array.

// Los arrays en JavaScript tienen muchas funciones llamadas métodos que nos van a permitir manipular los datos presentes en ese arreglo
// Metodos :
variado.push(32, 55); //Sirve para insertar elmentos al final del array
variado.unshift(23, "Taka"); //Inserta al principio del array.

let ultimoNumero = variado.pop(); //Extraer el ultimo elemento y lo almacena en una variable para poder retornarlo.

variado.shift(); //Sirve para extraer del array al elemento del indice 0. (Saca el primer elemento).
variado.pop(); //Siempre extraer el ultimo elemento del array y tambien lo retorna lo que significa que se lo puede usar si uno quiere: EJ:

console.log(variado);

/*---------------------------------------------------------------------------------- */
// indexOF : Recibe como parametro una cadena de texto.
let colores = ["Azul", "Naranja", "Rojo", "Verde", "Rojo", "Azul"];
let indice = colores.indexOf("Rojo"); //Menciona el indice del string mencionado empezando a contar de izquierda a derechas hasta encontrar el primer el string mencionado.
let indice1 = colores.lastIndexOf("Azul"); //Menciona el indice del string mencionado empezando a contar de izquierda a derecha hasta encontrar el ultimo string mencionado.
console.log(indice);
console.log(indice1);

let diaDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
let stringDelArray = diaDeLaSemana.join("-");
/*Arma un string de todos los elementos del array. Depende de como uno lo quiera separar en el parametro
del metodo se deja en blanco y separa con coma o poner un guion y separa con guiones.*/
console.log(stringDelArray);

//En caso de no encontrar lo que se busca en el array la consola dice : -1

let frutas = ["Manzana", "Pera", "Banana"];
let incluido = frutas.includes("Frutilla"); //Busca el elemento dentro del array y retorna un booleano.
console.log(incluido);
