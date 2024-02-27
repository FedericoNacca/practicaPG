function calcularMontoDeAlquiler(tipoDeVehiculo, DiasDeAlquiler, SillaParaBebe) {
    let precioVehiculo;
    switch (tipoDeVehiculo) {
        case "Compacto":
            precioVehiculo = 14000;
            break;
        case "Mediano":
            precioVehiculo = 17000;
            break;
        case "Camioneta":
            precioVehiculo = 28000;
            break;
        default:
            return "Vehiculo ingresado no valido";
    }

    let precioSilla = SillaParaBebe ? 1200 * DiasDeAlquiler : 0;

    let costoTotal = precioVehiculo * DiasDeAlquiler + precioSilla;

    return costoTotal;
}

console.log(calcularMontoDeAlquiler("Compacto", 2, true));



