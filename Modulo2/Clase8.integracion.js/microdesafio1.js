let cursosYPrecios = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

let cursosATomar = ['HTML5', 'CSS3', 'NODEJS'];

function calcularPrecio(cursos, cursosTomados){
    let precio = 0;
for (let i = 0; i < cursos.length; i++){
    if (cursosTomados.includes(cursos[i][0].toUpperCase())){ 
        precio += cursos[i][1]; 
}
} 
return precio;
}

let nombre = 'Federico';
let apellido = 'Naccarato';

function alumno(nombreAlumno, apellidoAlumno, callback, elCurso, vaATomar){
    let resultadoFinal = "Estimado " + nombreAlumno + " " + apellidoAlumno + "en función de los cursos seleccionados:\n" + cursosATomar
    + "\nEl monto a pagar a es de: " + callback(elCurso,vaATomar) + "\n" + "bienvenido a la gran aventura de DH." ;
return resultadoFinal
}
console.log(alumno(nombre, apellido, calcularPrecio, cursosYPrecios,cursosATomar));

/* ----------------------------------------------------------------- */



