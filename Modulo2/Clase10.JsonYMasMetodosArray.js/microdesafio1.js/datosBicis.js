let fs = require("fs");

const biciParseada = () => {
    let bici = JSON.parse(fs.readFileSync(__dirname + "/bicicletas.json", "utf-8"))
    return bici;
};

module.exports = biciParseada;


