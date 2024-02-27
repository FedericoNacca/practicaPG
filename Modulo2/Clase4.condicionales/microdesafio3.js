let traductorOriginal = "perro";
    if (traductorOriginal == "perro"){
    console.log("dog");
    }
    else if(traductorOriginal == "gato"){
        console.log("gato");
    }
    else if(traductorOriginal == "puerta"){
        console.log("door");
    }
    else if(traductorOriginal == "ventana"){
        console.log("window");
    }
    else if(traductorOriginal ==  "mesa"){
        console.log("table");
    }
    else{
        console.log("La palabra ingresada es incorrecta");
    }

// Con switch:

switch(traductorOriginal){
    case "perro":
        console.log("dog");
        break;
    case "gato":
        console.log("cats");
        break;
    case "puerta":
        console.log("door");
        break;
    case "ventana":
        console.log("windows");
        break;
    case "mesa":
        console.log("table");
        break;
    default:
        console.log("La palabra ingresada es incorrecta")
}
    
    