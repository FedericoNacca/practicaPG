//Ciclo for : consta de 3 partes.
for(let i = 1; i <= 7; i++){   //Primera parte es la condicion inicializadora , y la 2da parte es la condicion, la 3er parte que es el modificador de la variable inicializadora.
    console.log(i * 7);                   
}

/*-----------------------------------------------------*/

for(let i = 0; i < 10; i++){                            //(INICIO ; CONDICION ; MODIFICADOR)        { CODIGO QUE SE EJECUTARA}
    console.log("El valor de i es igual a " + i);
}

/*-----------------------------------------------------*/
// Para dar vueltas
for(let vuelta = 1; vuelta <= 100; vuelta++){        //Cambiamos la i por otra palabra.
    console.log("Dando la vuelta " + vuelta);
}
/*-----------------------------------------------------*/
for(let hola = 1; hola <= 4; hola++){
    console.log("Repito hola " + hola);
}
/*-----------------------------------------------------*/
function imprimirAzul4(){
    for(i = 1; i <= 4; i++){
        console.log("Azul")
    }
}
imprimirAzul4();
/*-----------------------------------------------------*/

function pasandoPorI(){
    for(let i = 0; i <= 4; i++){
        console.log("acá i tiene el valor de " + i);
    }
}
pasandoPorI();

/*-----------------------------------------------------*/





