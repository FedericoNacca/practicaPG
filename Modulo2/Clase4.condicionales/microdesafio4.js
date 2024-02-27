let operacion = "restar";
let numero1 = 3;
let numero2= 3;

switch(numero1,numero2,operacion){
    case "sumar":
        console.log(`El resultado de la suma es ${numero1 + numero2}`)
        break;
    case "dividir":
        console.log(`El resultado de la division es ${numero1 / numero2}`);
        break;
    case "restar":
        console.log(`El resultado de la resta es ${numero1 - numero2}`);
        break;
    case "multiplicar":
        console.log(`El resultado de la multiplicacion es ${numero1 * numero2}`);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir");
}
