/*Scope local : cuando existen funciones declaradas exclusivamente dentro de una funcion,
                fuera de la funcion la variable es inexistente.

Scope global : Cuando las variable se declaran fuera de la funcion. Teniendo asi,
                alcance a ellas en cualquier lugar del codigo, incluso dentro de las funciones.

*/

// Ej : 

let mensaje = "Hola";  //Esta variable esta en un scope global

function saludar(){
        let mensaje = "Chau";   //Esta variable esta en un scope loca
        return mensaje;
}

console.log(mensaje);  //Por eso el console log solo soma el scope global

console.log(saludar());   //Aca llama a la variable del scope local que tiene predominancia sobre el scope global.


