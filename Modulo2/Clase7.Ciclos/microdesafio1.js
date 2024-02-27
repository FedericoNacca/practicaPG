// let misOperacionesBancarias = [1000, -2000 , 8000 , 3000 , -3500];
//     let saldoDeposito = 0;
//     let saldoRetiro = 0;
//     let saldoDeCuenta = 0;

//     function calcularSaldos(){    
//         for(let i = 0; i < misOperacionesBancarias.length; i++){
//             if(misOperacionesBancarias[i] > 0){
//         saldoDeposito += misOperacionesBancarias[i];
//     }
//             else{
//         saldoRetiro += misOperacionesBancarias[i];            
//     } 
//         saldoDeCuenta = saldoDeposito + saldoRetiro;
//     }  
//     return saldoDeCuenta;
// }
    
// let nombreEs = "Gloria";
// let apellidoEs = "Medina";
// let 

// function calcularTotal(nombre,apellido,callback){    
//     return("Estimada " + nombre + " " + apellido + ":" + "\n" + "El monto total de los depósitos es de: " +  callback(calcularSaldos));
// }

// //console.log(calcularTotal(nombreEs,apellidoEs,calcularSaldos));

/*----------------------------------------------------------------------------- */

let operacionesBancarias = [3000, -1500, 6000, -2500, -5000, 8000];

let depositos = 0;
let retiros = 0;
let saldoActual = 0;

function calcularSaldos (operaciones){
    for (let i = 0; i < operaciones.length; i++){

        if (operaciones[i] >= 0){
            depositos += operaciones[i];
        } else {
            retiros += operaciones[i];
        }


    };

    saldoActual = depositos + retiros;

let arrayDatos = [depositos, retiros, saldoActual];

    return arrayDatos
    }
     //console.log(calcularSaldos(operacionesBancarias));

        let nombre = 'Gloria';
        let apellido = 'Medina';

    function mensajeACliente (nombreCliente, apellidoCliente, arrayOperaciones, callbackCalculo){
        let resultadoCallback = callbackCalculo(arrayOperaciones);
        let nombreCompleto = "Estimado " + nombreCliente + " " + apellidoCliente + ": " + "\nEl monto total de los depositos es de: " + resultadoCallback[0] + 
        "\nEl monto total de retiros es de:" + resultadoCallback[1] +  "\nPor lo tanto, su saldo actual en la cuenta es de: " + resultadoCallback[2];

        return nombreCompleto
}

    console.log(mensajeACliente(nombre, apellido, operacionesBancarias, calcularSaldos));