/* Nos permiten evaluar condiciones y realizar diferentes acciones según el resultado de dicha evaluación
    permite ejecutar un bloque de codigo siempre que se cumpla una condicion */

//If toma una condicion que es un valor booleano


// IF  -  ELSE - ELSE IF  (Tener en cuenta que son CONDICIONALES )
let clima = "Soleado";
let dia = "Martes";

if (clima == "Soleado" && dia == "Domingo"){           
        console.log("Lindo dia para salir");
    } 
    else if(clima == "Soleado" && dia == "Lunes"){
        console.log("Podria salir igual");
    }
    else{
        console.log("Me quedo en casa");
    }

// Otro ejemplo 

let edad = 16;
let acceso = "";

if(edad < 16){
    acceso = "prohibido";
}
    else if(edad >= 16 && edad <= 18){
        acceso = "con permiso";
    }
    else {
        acceso = "permitido";
    }
console.log(acceso);


