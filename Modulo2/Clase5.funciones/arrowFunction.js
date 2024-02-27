/* 
Arrow Functions :
Como ya vimos, una función es un bloque de código que podemos invocar todas las veces que necesitemos. Puede realizar una tarea específica y 
retornar un valor, y nos permite agrupar el código que vayamos a usar muchas veces.

Existe una forma un poco más compacta de crear o expresar nuestras funciones.

Las arrow functions —o funciones arrow— son una forma de crear funciones incorporadas a partir de ES6 —ECMAScript versión 6—. Una de sus
 ventajas es que son más concisas que las funciones clásicas creadas con la palabra reservada function.

 */

//  Forma clasica :
function sumar(a,b){
    return a + b;
}
console.log(sumar(2,2));
/* ----------------------------------------------------------------------------------------------------------------*/

// ES6 arrow function :
let sumar1 = (a,b) => a + b; //Se usa el operador flecha (=>)
    console.log(sumar1(2,4)); 

let elDoble = numero => numero * 2;
    console.log(elDoble(4));
/* ----------------------------------------------------------------------------------------------------------------*/

// Arrow function con varias sentencias de codigo

let esPar = numero => {
    if (numero % 2 === 0){
        return true;
    }
        return false;
}
console.log(esPar(9));
/* ----------------------------------------------------------------------------------------------------------------*/
// Otros

let laMitad = numero => numero / 2;
console.log(laMitad(8));

let dividir = (numeroA,numeroB) => numeroA / numeroB;
console.log(dividir(20,4));
/* ----------------------------------------------------------------------------------------------------------------*/
//Con if : 
let tengoQueTrabajar = dia => {
    if(dia == "Sabado" || dia == "Domingo"){
        return "No tenes que trabajar";
    }else if(dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes")
    { return "Si Fede tenes que trabajar";
    }else {
        return "Ponga el dia correcto";
    }
    }  
console.log(tengoQueTrabajar("Martes"));
/* ----------------------------------------------------------------------------------------------------------------*/

let saludo = () => "Hola mundo";  //Sin parametros
console.log(saludo());

let dobleDe = numero => numero * 2;     //Con un solo parametro
console.log(dobleDe(10));

let dividirDosNumeros = (numero1,numero2) => numero1 / numero2;  //Con dos parametros va entre ().
console.log(dividirDosNumeros(8,2)); 
/* ----------------------------------------------------------------------------------------------------------------*/

let horaActual = () =>{
    let fecha = new Date();
    return fecha.getHours() + " " + fecha.getMinutes();
}
console.log(horaActual());

let a = 2;
let b = 2;
let sumaDosNumerosMas100 = (a,b) => a + b + 100;

console.log(sumaDosNumerosMas100(a,b));