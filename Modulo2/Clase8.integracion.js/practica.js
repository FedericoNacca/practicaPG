function sumatoriaBajoImporte(arrayImportes) {
  let sumaDeArray = 0;
  for (let i = 0; i < arrayImportes.length; i++) {
    if (arrayImportes[i] <= 1000 && arrayImportes[i] >= 0) {
      sumaDeArray = sumaDeArray + arrayImportes[i];
    }
  }
  return sumaDeArray;
}

//console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

/*------------------------------------------------------------ */

function asientosDisponibles(asientos, asientoAOcupar) {
  if (asientos.includes(asientoAOcupar)) {
    return (
      "Felicitaciones, el asiento número " + asientoAOcupar + " está disponible"
    );
  } else {
    return (
      "Lo sentimos, el asiento número " +
      asientoAOcupar +
      " está ocupado, pero aún quedan " +
      asientos.length +
      " asientos disponibles"
    );
  }
}

/*------------------------------------------------------------ */

// function reporteDePasajeros(estaciones) {
//   let cantidadPasajeros = 200;
//   const subidaNormal = 50;
//   const bajadaNormal = 30;
//   const subidaFlorida = 120;
//   const bajadaFlorida = 80;

//   for (let i = 1; i <= estaciones; i++) {
//     cantidadPasajeros += subidaNormal - bajadaNormal;
//     if (i === 5) {
//       cantidadPasajeros += subidaFlorida - bajadaFlorida;
//     }
//   }
//   return cantidadPasajeros;
// }
// console.log(reporteDePasajeros(5));
/*-----------------------------------------------------------------------------------------------*/

/*Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos 
pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes somos responsables
 de generar un programa que lo resuelva.

Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones 
que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que
 lleva el tren. La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.*/


function reporteDePasajeros(cantidadEstacion){
  let terminal = 200;
  const estacionNormalSube = 50;
  const estacionNormalBaja = 30;
  const estacionFloridaSube = 120;  
  const estacionFloridaBaja = 80;

  const reporte = [];

  for(let i = 0; i <= cantidadEstacion; i++){
      if(i === 5){
          terminal = terminal + estacionFloridaSube - estacionFloridaBaja;
      }
      else if(i === 0){
          terminal = terminal;
      }
      else{
          terminal = terminal + estacionNormalSube - estacionNormalBaja;
      }
      
      reporte.push("En la estación " + i + " hay " + terminal + " pasajeros arriba del tren");
  }
  return reporte;
}

console.log(reporteDePasajeros(5));

/*-----------------------------------------------------------------------------------------------*/



