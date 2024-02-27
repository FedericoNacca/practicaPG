const fs = require("fs");

let manejadorEstudiante = {
    importar: function(curso){
        let moduloAImprotar = `estudiantes${curso}.json`
        }
    }

function Estudiante(edad, nombre, apellido){
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
}

module.export = {manejadorEstudiante, Estudiante}