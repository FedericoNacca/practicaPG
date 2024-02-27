const fs = require("fs");  //Para leer y manipular archivos.
let moment = require("moment"); //Para requerir la libreria

let texto = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8")   //Para leer el archivo texto.

console.log(texto);
console.log(moment().format("DD MM YYYY")); //Para llamar al dia actual , como una funcion se pone las ()