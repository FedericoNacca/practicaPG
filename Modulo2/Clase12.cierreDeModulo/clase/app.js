let autosImportados = require("./autos");

const concesionaria = {
    autos: autosImportados,
    buscarAuto: function(patente){
    return this.autos.find((auto) => auto.patente === patente) || null;
    },
    venderAuto: function(patente){
    let autoEncontrado = this.buscarAuto(patente);
        if(autoEncontrado){
        autoEncontrado.vendido = true;
        return true;
    }
        else{
        return false;
    }

        },
    autosParaLaVenta: function(){
        return this.autos.filter((auto) => auto.vendido === false);
    },
    autosNuevos: function(){
        let autosNoVendidos = this.autosParaLaVenta();
        let autosNuevos = autosNoVendidos.filter((auto) => auto.km < 100); 
        return autosNuevos;
    },
    listaDeVentas: function(){
return this.autos.filter((auto) => auto.vendido).map((auto) => auto.precio)
    },
    totalDeVentas: function(){
        let ventas =  this.listaDeVentas();
    return ventas.reduce((acumulador, precio) => acumulador + precio, 0);
        }
    }

console.log(concesionaria.buscarAuto("APL123"));