let bicicleta = [{
    "marca" : "Fierce",
    "modelo" : "FM18SI29AM211",
    "rodado" : 16,
    "añoFabricacion" : 2019,
    "color" : "celeste",
    "peso" : 13,
    "tipo" : "montañera",
    "precio" : 5000,
    "vendida" : true
}];

/*------------------------- CONSTRUCTOR-------------------------- */

function Estudiante(name, lastname, age){  //Funcion constructora.
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.decirEdad = function(){
        return "El estudiante " + this.name + " " + this.lastname + " " + "tiene la edad de " + age
    }
}
let nuevoEstudiante = new Estudiante("Federico","Naccarato",33); //Para crear al nuevo estudiante.

console.log(nuevoEstudiante.decirEdad());

/*-------------------------OTRO CONSTRUCTOR-------------------------- */
function Autos(marca, modelo, años){
    this.marca = marca;
    this.modelo = modelo;
    this.años = años;
    this.decirDatosDelAuto = function(){
        return "El auto " + this.marca + " modelo " + this.modelo + " es modelo " + this.años;
    }
}

let nuevoAuto = new Autos("Renault","Clio 2",2006);
let nuevoAuto1 = new Autos("Ford","Fiesta",2015);

console.log(nuevoAuto1.decirDatosDelAuto());

