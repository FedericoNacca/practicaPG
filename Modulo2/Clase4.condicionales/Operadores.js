/*Operadores aritmeticos + - * / y la % que se encarga de dar el resto de una division osea el sobrante. Ej : 5 % 2 = 1 
Incrementar ++ y Decrementar -- */

//Suma 
console.log(5 + 4);

//Resta
console.log(56 - 48);

//multiplicacion
console.log(3 * 4);

//Division
console.log(10 / 2);

//Modulo
console.log(10 % 3);

//incremento
let numero = 6;
console.log(++numero);

//Decremento 
let otroNumero = 10;
console.log(--otroNumero);

//Comparacion simple
console.log(5 == 7);

//Comparacion estricta
console.log(5 === "5");  //Es falso porque uno es un number y el otro es un string. Ademas de comprar el valor tambien compara el tipo de dato y eso lo hace diferente al anterior.

//Desigualdad simple  
console.log(5 != "5");

//Desigualdad estrica 
console.log(5 !== "5");

//Mayor que otro
console.log(5 > 3);

//Mayor o igual que otro.
console.log(15 >= 16);

//Menor que otro
12 < 3
12 <= 3

//Not
! //el signo para invertir el valor

    //Operadores logicos : Nos permiten unir sentencias de codigos por las cuales queremos preguntar.  && y ||

    //AND 
    console.log(true && true); //Los dos tienen que dar true o caso contrario da false.

console.log("Gato" && "Perro"); /*En el caso de los strings y el operador &&, al ser ambos strings verdaderos 
                                 (ya que tienen una cadena de caracteres), la respuesta es el último string de la sentencia. */


//OR
console.log(false || true);  //Va a pedirnos que aunque sea una de las dos sea verdadera caso contrario da false. 

console.log(false | 3 == 4);

//Concatenacion : +

let nombre = "Fede";
let apellido = "Nacca";
console.log(nombre + " " + apellido);

//Operador de negacion :  !  permite cambiar el valor a falso o verdadero

//Type of : Al ser llamado sobre una variable devuelve el tipo de dato que dicha variable contiene.

//Let usado de la siguiente manera da error por console.log no lo puede encontrar desde afuera a diferencia de var que si se puede llamar desde afuera.
if (true) {
    let nombre = "fede";
}
console.log(nombre);

/* Const al igual que let estaran disponibles solo en el bloque de codigo en el que se haya declarado,
lo que lo diferencia es que const no puede ser modificado y let si se puede modificar una ves que este declarado */

console.log(false | false); //Retorna 0 porque los compara de forma binaria.
