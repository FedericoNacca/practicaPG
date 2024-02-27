/*Para java script un string es un objeto , que trae consigo una serie de particularidades.
    Sobre el string se puede consultar propiedades y ejecutar diversos metodos */

let longitudDelTexto = "Me gusta java script".length; //Devuelve la longitud de una cadena de texto.
console.log(longitudDelTexto);

let dondeSeEncuentra = "Me gusta java script".indexOf("script"); //Devuelve el indice donde empieza la palabra buscada.
console.log(dondeSeEncuentra);

let porcionDeTexto = "Me gusta java script".slice(3,8); //Toma una porcion del string. 
console.log(porcionDeTexto);

let eliminarEspacios = "    Me gusta java script   ".trim(); //Recorta los espacios en blanco del principio y final de string. No elimina los espacios que estan en medio de los caracteres.
console.log(eliminarEspacios);

let convierte = "Me gusta java script".split(" "); //Convierte un string en un array.
console.log(convierte);

let reemplaza = "Me gusta java script".replace("gusta","no me gusta"); //Reemplaza partes de un string.
console.log(reemplaza);
/* ---------------------------------------------------------------------------------*/

function dominio(nombre){
    return "http://www." + nombre  + ".com.ar";
}
console.log(dominio("digitalhouse"));

/* ---------------------------------------------------------------------------------*/

let cantidadDeCaracteres = "Me gusta la programacion".length; //Cuenta la cantidad de caracteres.
console.log(cantidadDeCaracteres);

let dondeSeEncuentra1 = "Me gusta la programacion".indexOf("programacion"); //Busca en que indice del string se encuentra el primer caracter de la palabra buscada.
console.log(dondeSeEncuentra1);
/* ---------------------------------------------------------------------------------*/

let existe = "Me gusta la programacion".indexOf("programacion");
if (existe = -1){
    console.log("Esa palabra no se encuentra");
}
    else{
        console.log("La palabra se encuentra");
    }

console.log(existe);
/* ---------------------------------------------------------------------------------*/

let slice = "Me gusta JS".slice(3,8);  //Para cortar codigo
console.log(slice);

let mensaje = "Gran dia para practicar JavaScript, dia!";
console.log(mensaje.length);  // Para ver la cantidad de caracteres.
console.log(mensaje.indexOf("dia")); //Para ver donde se encuentra la primer palabra dia.
console.log(mensaje.lastIndexOf("dia")); //Para ver donde se encuentra la ultima palabra dia.
console.log(mensaje.slice(0,24)); //Para recortar mensaje.

let mensaje1 = "   Soy un ser humano  ";
console.log(mensaje1.trim());  //Para eliminar los espacios en blanco al principio y al final del string.

let mensaje2 = "Soy del planeta tierra";
console.log(mensaje2.split(" ")); // Para separar las palabras en array diferentes que tendra una posicion nueva. Cada palabra recibe un indice.
console.log(mensaje2.replace("tierra","marte")); //Para reemplazar palabras.

let mensaje4 = "estoy programando";
console.log(mensaje4.indexOf("programando"));




