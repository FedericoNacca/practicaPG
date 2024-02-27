function suma(numeroA,numeroB){
    return numeroA + numeroB;
}
function resta(numeroA,numeroB){
    return numeroA - numeroB;
}
function multiplicacion(numeroA,numeroB){
    return numeroA * numeroB;
}
function division(numeroA,numeroB){
    return numeroA / numeroB;
}
function calculadora(numeroA,numeroB,callback){
    return callback(numeroA,numeroB);
}

console.log(calculadora(3,3,division));