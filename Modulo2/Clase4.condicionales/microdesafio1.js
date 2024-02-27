// Con if 

let perfil = " ";

if (perfil == "administrador" || "ADMINISTRADOR" || "Administrador") {
    console.log("Usted tiene todo los privilegios del sistema");
}
else if (perfil == "asistente" || "ASISTENTE" || "Asistente") {
    console.log("Usted solo tiene permiso de registrar, modificar y consultar datos")
}
else if (perfil == "invitado" || "INVITADO" || "Invitado") {
    console.log("Usted tiene permiso solo de consultar datos")
}
else {
    console.log("Debe especificar el perfil del usuario")
}

// Con switch

let perfil1 = "cacho";
switch (perfil1) {
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":
        console.log("Usted tiene todo los privilegios del sistema");
        break;
    case "asistente":
    case "ASISTENTE":
    case "Asistente":
        console.log("Usted solo tiene permiso de registrar, modificar y consultar datos");
        break;
    case "invitado":
    case "INVITADO":
    case "Invitado":
        console.log("Usted tiene permiso solo de consultar datos");
        break;
    case "":
        console.log("Debe especificar perfil de usuario");
        break;
    default:
        console.log("Debe especificar perfil valido");
        break;

}
