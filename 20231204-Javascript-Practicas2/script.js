//Ejercicio práctica:
/*
let num = Number(prompt("Ingresa un número"));

switch (num % 2) {
    case 0:
        console.log("El número es par!");
        break;

    default:
        if (isNaN(num)){
            console.log("Ingrese un número!");
        } else{
            console.log("El número es impar!");
        }
        break;
}
*/

//Ejercicio 1:
/*
let resp = prompt("Ingrese su palabra");

switch (resp.toLowerCase()) {
    case "casa":
        console.log("House!");
        break;

    case "perro":
        console.log("Dog!");
        break;

    case "pelota":
        console.log("Ball!");
        break;

    case "árbol":
        console.log("Tree!");
        break;

    case "genio":
        console.log("Genius!");
        break;


    default:
        console.log("ERROR 404 - Word not found");
        break;
}
*/

//Ejercicio 2:
/*
let resp2 = prompt("Ingresa la calificación de la película");
let saludo = true;

switch (resp2.toLowerCase()) {
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
*/