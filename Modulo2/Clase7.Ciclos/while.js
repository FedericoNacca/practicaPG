// Ciclo while

let vuelta = 1;                                        
while(vuelta <= 5){
    console.log(`Dando la vuelta ${vuelta}`);
    vuelta++
};

/*------------------------------------------------------ */

function tablaDeMultiplicar1(numero) {
    let numeroAMultiplicar = 1;
    while(numeroAMultiplicar <= 10){
        console.log(numero * numeroAMultiplicar);
        numeroAMultiplicar++
    }
    return numeroAMultiplicar;
}

tablaDeMultiplicar1(5);

