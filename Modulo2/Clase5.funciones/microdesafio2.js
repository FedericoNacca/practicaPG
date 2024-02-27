
function calcularPrecioBaseSegun(tipoDeHamburguesa){
    let precioBase = 0;
    switch (tipoDeHamburguesa){
        case 'Carne a la parrilla':
            precioBase = 1800;
            break;
        case 'Pollo':   
        precioBase = 1500;
            break;
        case 'Vegetariana':
            precioBase = 1200;
            break;
        default:
           'Dato no existe';
  }
  return precioBase;
  }

let jamon = 30;
let queso = 25;
let salsaDeTomate = 5;
let mayonesa = 5;
let mostaza = 5;
let tomate = 15;
let lechuga = 10;
let cebolla = 10;

 function calcularPrecioTotal(tipoDeHamburguesa,callback,jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
let adicional = 0;

// adicional += jamon ? jamon : 0;   
// adicional += queso ? adicional = queso : 0;
// adicional += salsaDeTomate ? adicional = salsaDeTomate : 0;
// adicional += mayonesa ? adicional = mayonesa : 0;
// adicional += mostaza ? adicional = mostaza : 0;
// adicional += tomate ? adicional = tomate : 0;
// adicional += lechuga ? adicional = lechuga : 0;
// adicional += cebolla ? adicional = cebolla : 0;

console.log(jamon);
if(jamon){
    adicional += jamon;
 } 
if(queso){
    adicional += queso; 
 }
if(salsaDeTomate){
    adicional += salsaDeTomate;
 }
if(mayonesa){
    adicional += mayonesa;
 }
 console.log(adicional);
 
    let precioTotal = adicional + callback(tipoDeHamburguesa);
    console.log(callback(tipoDeHamburguesa));
    return precioTotal; 
    }

console.log(calcularPrecioTotal("Pollo",calcularPrecioBaseSegun,queso,salsaDeTomate,mayonesa));

/*--------------------------------------------------------------------------------------------------------------------------------------------------*/


