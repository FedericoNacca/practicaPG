function tipo(tipoDeHamburguesa){
let precio;
    switch(tipoDeHamburguesa){
        case "carne a la parrilla":
            precio =  1800;
            break;
        case "pollo":
            precio = 1500;
            break;
        case "vegetariana":
            precio = 1200;
            break;
        default:
            return "el tipo seleccionado no es valido";
    }  
return precio;
}


let = jamon = 30;
let = queso = 25;
let = salsaDeTomate = 5;
let = mayonesa = 5;
let = mostaza = 5;
let = tomate = 15;
let = lechuga = 10;
let = cebolla = 10;

function elAdicional(callback,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla){ 
let condimento = 0;
    (jamon ? condimento = jamon : 0); 
    (queso ? condimento = queso  : 0); 
    (salsaDeTomate ? condimento = salsaDeTomate : 0); 
    (mayonesa ? condimento = mayonesa  : 0); 
    (mostaza ? condimento = mostaza : 0);
    (tomate ? condimento= tomate : 0);
    (lechuga ? condimento = lechuga : 0);
    (cebolla ? condimento = cebolla : 0);

let percioTotal = callback + elAdicional;
return percioTotal;
}
    


console.log(elAdicional(("pollo")),true);