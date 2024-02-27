/*------------------- OBJETOS LITERALES------------------*/
let miPais = {
    nombre : "Argentina",    //Lado izquierdo la propiedad y del derecho el valo. Y a los dos se los llaman propiedades de un obejto literal.
    poblacion : 40000000,
    capital : "Buenos Aires",        
    decirNacionalidad: function(){          //ESTE ES UN METODO
        return "Yo naci en " + this.nombre;  //Es para referirse a una propiedad interna del obejeto siempre que estamos DENTRO DEL METODO.
    },      
};

//console.log("La capital de mi pais " + miPais.nombre +  " es " + miPais.capital);   //dotNotation

//Metodos son funciones que se asignan como valor a una clave y que buscan hacer algo mas alla de tener un simple dato.

// dotnotation

let curso = {
    cantidadDeAlumnos : 30,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs",
    notificacion : function(){  //METODO
        return "El horario de la cursada es de : " + this.horario; //Hace referencia al obejeto en el cual estamos.
    }
};

/*------------------- CONSTRUCTOR DE OBJETOS ------------------*/

//Funcion constructura de obejetos tipo auto
function Auto(laMarca,elModelo){   //ES CONVENCION QUE LA PRIMERA LETRA INICIE CON MAYUSCULA
    this.marca = laMarca;       //Asocia a la propiedad el valor que esta recibiendo como parametro.
    this.modelo = elModelo;     //Asocia a la propiedad el valor que esta recibiendo como parametro.
}

/*---------------------INSTANCIAR--------------------- */
// Crear un objeto a partir de una funcion modelo

let miAuto = new Auto("Peugeot",2049); //Se pasan los dos parametros 

function Curso(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Curso(25,["Javier","Gerardo"],"Horario de 19 a 21 hs");  //Esto es INSTANCIAR (Crear un objeto a partir de una funcion modelo)
let cursoDeMarketing = new Curso(45,["Damian","Lorena"],"de 8 hs a 15 hs");             //Esto es INSTANCIAR (Crear un objeto a partir de una funcion modelo)


console.log(cursoDeMarketing);
