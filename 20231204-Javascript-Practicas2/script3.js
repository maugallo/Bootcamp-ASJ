let resp = prompt("Ingresa la calificación de la película");
let saludo = true;

switch (resp.toLowerCase()) {
    case "muy mala":
        console.log("Lamentamos mucho que no te haya gustado :(");
        break;

    case "mala":
        console.log("Lamentamos que no te haya gustado :(");
        break;

    case "mediocre":
        console.log("Okey");
        break;

    case "buena":
        console.log("Nos alegramos que te haya gustado :)");
        break;

    case "muy buena":
        console.log("Nos alegramos mucho que te haya gustado :)");
        break;

    default:
        console.log("Porfavor, ingresa una respuesta correcta");
        saludo = false;
        break;
}

if (saludo){
    console.log("Gracias por tu visita al cine!");
}