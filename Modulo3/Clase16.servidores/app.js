const express = require("express");

const app = express();

const path = require("path");  //Modulo nativo no se instala

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");   //Se usa el metodo path despues de haberlo requerido con el resolve despues.
    // Envía el archivo HTML como respuesta al cliente
    res.sendFile(htmlPath);
});

app.get("/contacto", (req,res) => {
    let archivo = res.sendFile(path.resolve(__dirname, "/views/index.html")); //Tiene que ser una ruta absoluta .
    return archivo;  
});

app.get("/un-array", (req,res) => {
    res.send([1,2,3,4,5])
});

app.get("/un-objeto", (req,res) => {
    res.send({"manzana" : "ver  de"})
});

