let pelisNavidenias = ["Mi pobre angelito", "El grinch", "El expreso polar"];
let ultimaPeli = pelisNavidenias.pop();
console.log(pelisNavidenias);

console.log(ultimaPeli);

/*---------------------------------------------------------------*/

let estudiante = [
{
    nombre : "Federico",
    edad : 33,
    estado : "soltero",
    practicaDeporte : true,
},
{
    nombre : "Matias",
    edad : 22,
    estado : "casado",
    practicaDeporte : false,
}
]
let estudianteNuevo = {
    nombre : "Miguel",
    edad : 55,
    estado: "casado",
    practicaDeporte: true,
}

estudiante.push(estudianteNuevo);
let ultimoEstudiante = estudiante.pop();

console.log(ultimoEstudiante);
console.log(estudiante);

/*---------------------------------------------------------------------------------- */

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  let estudianteJuan =
    {
      nombre : "Juan",
      promedio : 5,
      curso : "iOS",
    }
    
    estudiantes.push(estudianteJuan);
  
    let estudianteMiguel =
      {
      nombre : "Miguel",
      promedio : 2,
      curso : "Android",
    }
  estudiantes.push(estudianteMiguel);
  estudiante.pop()
  console.log(estudiantes);

/*---------------------------------------------------------------------------------- */

let estudiantes1 = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]
let alumnaMariana = {
  nombre:"Mariana",
  promedio: 9,
  curso:"Full stack",
}
estudiantes1.unshift(alumnaMariana);

let alumnoFrancisco = {
  nombre:"Francisco",
  promedio: 2,
  curso: "Android",
}
estudiantes1.unshift(alumnoFrancisco);
console.log(estudiantes1);

/*---------------------------------------------------------------------------------- */

let notasDeAlumnos = [10, 2 , 4 , 5 , 6 , 10 , 6, 5 , 10 , 6 , 6 ];
notasDeAlumnos.push(2); //Agrega elemento al array.
notasDeAlumnos.pop(); // elimina el ultimo elemento.
notasDeAlumnos.shift(); //Elimina el primer elemento.
notasDeAlumnos.unshift(3,4,5,2); //Agrega elemneto al principio del array.
console.log(notasDeAlumnos);

console.log(notasDeAlumnos.indexOf(2)); //Muestra en que indice del array se encuentra el elemento contando desde el indice 0 en adelante.
console.log(notasDeAlumnos.lastIndexOf(6)); //Muestra en que indice se encuentra el elemento dentro del array , cuenta desde el indice 0 en adelante PERO DEVUELVE EL ULTIMO ENCONTRADO.
let siExiste = notasDeAlumnos.indexOf(6); 
if(siExiste != -1 ){
  console.log("El numero existe")};

let buscarSiExisteAlumno = notasDeAlumnos.includes(6); //El Includes buscar el elemento dentro del array y si lo encuentra devuelve un booleano.
if (buscarSiExisteAlumno = true){
  console.log("El alumno existe detro del array");
}

console.log(notasDeAlumnos.join(" - or && ")); //Para mostrarlo al array en un string. Se puede pasar como parametro del metodo un string con cualquier caracter.


