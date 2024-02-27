
let electrodomesticos = ["lavarropa","heladera","microondas","pava electrica","batidora","tostadora"]; //Declara array
//console.log(electrodomesticos[3]);
electrodomesticos.shift(); //Saca primero
electrodomesticos.push("lavarropa", "heladera", "horno electrico"); //Agrega lavarropa

console.log(electrodomesticos);
console.log(electrodomesticos.length);  //Muesta la cantidad en numeros.

   
function decirSiSeEncontro(electrodomesticos,elementoBuscado){
    let elementoABuscar = electrodomesticos.includes(elementoBuscado);
    let mensaje = elementoABuscar === false ? "no encontrado" : "producto encontrado";
    return mensaje
}
console.log(decirSiSeEncontro(electrodomesticos,"lavarropa"));

let nuevoString = electrodomesticos.join(" "); //Lo convierte en un array

console.log(nuevoString);

console.log(nuevoString.length);  //Cuenta las cantidad de letras.

let recotarArray = nuevoString.replace("pava","pavita");  //Reemplaza

console.log(recotarArray);

let nuevoArray = nuevoString.split();





