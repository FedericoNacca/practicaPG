// ---------TABLA DE MULTIPLICAR  --- 
function multiplicar(){
    let resultado = 0;
    for(let i = 1; i <= 10;i++){
        resultado = i * 5;
    }
    let tablaMultiplicar = 1 + " * " +  + " = " + resultado;
    return tablaMultiplicar;
}
console.log(multiplicar());