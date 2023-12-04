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