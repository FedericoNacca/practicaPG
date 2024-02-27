let graduadosHtml5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCss3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
let graduadosNodeJs = "45 56 73 34 65 72 70 32";

let arrayGraduadosHtml5 = graduadosHtml5.split(" ");
let arrayGraduadosCss3 = graduadosCss3.split(" ");
let arrayGraduadosJavaScript = graduadosJavaScript.split(" ");
let arraygraduadosNodeJs = graduadosNodeJs.split(" ");

function eleccion(html5,Css3,javascript,nodejs,numero){
    let suma = 0;
    
    switch(numero){
        case 1 :      
        for(let i = 0; i < html5.length; i++){
            suma += parseInt(html5[i]);        
        }
        return suma / html5.length;
        case 2 :
            for(let i = 0; i < Css3.length; i++){
                suma += parseInt(Css3[i]);        
            }
            return suma / Css3.length;
        case 3 :
            for(let i = 0; i < javascript.length; i++){
                suma += parseInt(javascript[i]);        
            }
            return suma / javascript.length;
        case 4:
            for(let i = 0; i < nodejs.length; i++){
                suma += parseInt(nodejs[i]);        
            }
            return suma / nodejs.length;

        default:
            return `seleccione una opccion correcta: \n 1 HTML 5 \n 2 CSS3 \n 3 JAVASCRIPT \n NODEJS`
    }
}

console.log(eleccion(arrayGraduadosHtml5,arrayGraduadosCss3,arrayGraduadosJavaScript,arraygraduadosNodeJs,1));

