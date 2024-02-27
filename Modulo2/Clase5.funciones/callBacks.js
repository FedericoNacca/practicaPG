/* Es una funcion que se pasa como parametro de otra funcion. La funcion que lo recibe es la que se 
encarga de ejecutarla cuando sea necesario*/

let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(56, 58, multiplicar));
/*-------------------------------------------------------------------------------*/

function saludar(nombre, apellido, callback) {
    return "Hola! " + callback(nombre, apellido)
};
/*-------------------------------------------------------------------------------*/

function iniciales(nombre, apellido) {
    return nombre[0] + apellido[0];
}

function saludar(nombre, apellido, callback) {
    return "Hola " + callback(nombre, apellido); //Pedir explicacion 
}

console.log(saludar("Fede", "Nacca", iniciales));
/*-------------------------------------------------------------------------------*/

function doble(numero) {
    return numero * 2;
}
function cuadruple(numero) {
    return numero * 4;
}
function aplicarCallback(numero, callback) {
    return callback(numero);
}
console.log(aplicarCallback(2, cuadruple));

/*-------------------------------------------------------------------------------*/

