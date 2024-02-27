/*La sintaxis de asignación de desestructuración (destructuring assignment) es una 
expresión que posibilita la extracción de datos, tanto de arreglos (los famosos arrays) 
como de propiedades de objetos, en variables distintas.*/

//Se usa para la extraccion de datos 
let colores = ["blanco","celeste","rojo","amarillo","verde"];
let [colorBlanco,colorCeleste,colorRojo] = colores; //Tener en cuenta que a cada variable de esas 3 se asocia al indice del array anterior respetando su orden.
console.log(colorRojo);

let persona = {
    nombre : "Federico",
    edad : 33,
    profecion : "estudiante",
    seriesFavoritas : ["breaking bad", "cosmos"]
}

let {nombre, profecion,seriesFavoritas} = persona;
console.log(seriesFavoritas[0]);