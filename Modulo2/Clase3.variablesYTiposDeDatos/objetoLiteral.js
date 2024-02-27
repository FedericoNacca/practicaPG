/* Objeto literal :
let objetoLiteral =
    {
        clave:valor,
        clave1:valor1
    }


let miComputadora = {
    marca : "pc escritorio",
    modelo : 2017,
    estaEncendida : true,
};      
*/

/* Objetos:
Es una coleccion de propiedades y una propiedad es una asociacion entre un nombre (o clave) y un valor.
Van entre {}
*/

let auto = {
    marcar: "ford", //String
    km: 10000, //Number
    disponible: true, //Booleano
    bocina: () => console.log("Beep, beep"), //funcion
};
console.log(auto);

// Dato del tipo objeto literal
let persona = {
    nombre: "Fede",
    edad: 33
};
    console.log(persona);

let alumno = {
    nombre: "Federico",
    apellido: "Naccarato",
    edad:33,
    realizoElPago: true,
}
console.log(alumno);

