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