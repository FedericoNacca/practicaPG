function importar(){
    const fs = require("fs");
    let coleccionables = fs.readFileSync(__dirname + "/figuras1.json", "utf-8");
    return coleccionables;
}
console.log(importar());