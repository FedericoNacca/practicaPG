/*-----------------------Filter con números-----------------------------*/
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == true;
});

let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado !== true;
});

/*---------------------- Map ----------------------------*/

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(horarios){
    return horarios - 1;
});


/*---------------------- reduce() ----------------------------*/

let vueltas = [5, 8, 12, 3, 22];
let totalVueltas = vueltas.reduce(function(total,vuelta){
    return total + vuelta;
});

/*---------------------- forEach ----------------------------*/

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

let mostrandoLista = listaDeSuperMercado.forEach(function(lista){
    //console.log(lista);
});

/*---------------------- Json Para conocer ----------------------------*/

let amigos = ["Coco", "Pablito" , "Sus", "Franco"];

let amigosJSON = JSON.stringify(amigos); //Lo convierte a string

let amigosOriginal = JSON.parse(amigosJSON); //Lo convierte a array

let persona = {
    nombre : "Carli",
    edad : 26,
    domicilio : "Calle falsa 123"
};

let personaJson = JSON.stringify(persona); //Lo convierte a string.

let personaObjeto = JSON.parse(personaJson);

//console.log(personaObjeto);





