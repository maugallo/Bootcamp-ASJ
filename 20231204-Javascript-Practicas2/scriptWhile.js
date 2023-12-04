//Ejercicio 1:
/*
let num = Number(prompt("Ingrese un número"));
let cant = 0;
let result = 0;

if (!isNaN(num)){
    while (cant <= num) {
        result += cant;
        cant ++;
    }
    alert(`El promedio de ${num} es ${Number(result/cant).toFixed(1)}`);
} else{
    alert("El valor ingresado no es un número!");
}
*/

//Ejercicio 2:
/*
let continuar = true;
let cant = 0;
let num = 0;

while (continuar){
    num = parseInt(prompt("Ingrese un número entero"));
    if (!isNaN(num)){
        if (num < 0){
            continuar = false;
        } else{
            cant ++;
        }
    } else{
        alert("Ingresa un número válido");
    }
}

alert(`Programa terminado! Ingresaste ${cant} números positivos.`);
*/

//Ejercicio 3:
/*
let num = 0;

while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} - FizzBuzz!\n`);
    } else if (num % 3 === 0) {
        console.log(`${num} - Fizz\n`);
    } else if (num % 5 === 0) {
        console.log(`${num} - Buzz\n`);
    } else {
        console.log(`${num}\n`);
    }
    num++;
}
*/

//Ejercicio 4:
/*
let resp;
let cuenta = 0;
let ejecucion = true;
alert("¡Bienvenido al bar para 1 persona! Aquí tienes tu carta, avísame qué quieres hacer.");

while (ejecucion) {
    do {
        resp = Number(prompt(`OPCIONES:\n 1- Ver menú\n 2- Pedir un chiste\n 3- Pedir la cuenta\n\nCuenta: $${cuenta}`));
    } while (resp > 3 || resp < 1 || isNaN(resp));

    switch (resp) {
        case 1:
            do {
                resp = Number(prompt("-----MENU-----\n1. Fernet c/Coca-Cola - $500\n2. Gin Tonic c/Tónica - $500\n3. Milanesa Napolitana c/Puré - $1500\n4. Fideos c/bolognesa - $1000"));
            } while (resp > 4 || resp < 1 || isNaN(resp));
            switch (resp) {
                case 1:
                    alert("Servite tu Fernet c/Coca-Cola");
                    cuenta += 500;
                    break;

                case 2:
                    alert("Servite tu Gin Tonic c/Tónica");
                    cuenta += 500;
                    break;

                case 3:
                    alert("Servite tu Milanesa Napolitana c/Puré");
                    cuenta += 1500;
                    break;

                case 4:
                    alert("Servite tu Fideos c/bolognesa");
                    cuenta += 1000;
                    break;

                default:
                    alert("No entendí lo que querés");
                    break;
            }
            break;

        case 2:
            do {
                resp = Number(prompt("¡Por supuesto! Elige entre dos:\n1. Chiste sobre Python\n2. Chiste sobre JavaScript"));
            } while (resp > 2 || resp < 1 || isNaN(resp));
            if (resp === 1) {
                alert("¿Por qué los programadores de Python no pueden reconocer sus relaciones tóxicas? Porque ignoran las excepciones.");
            } else {
                alert("¿Cómo confortas a un desarrollador de JavaScript? Simplemente le dices 'Estoy aquí para ti; no eres indefinido.'");
            }
            break;

        case 3:
            if (cuenta === 0){
                alert("No hace falta que pagues nada!")
            } else{
                do {
                    resp = Number(prompt("¿La cuenta? ¡Enseguida! ¿Vas a agregar propina?\n1. Sí\n2. No"));
                } while (resp > 2 || resp < 1 || isNaN(resp));
                resp === 1 ? alert(`El total sería $${cuenta += (cuenta * 0.1)}`): alert(`El total sería $${cuenta}`) 
            }
            ejecucion = false;
            alert("¡Un gusto tenerte como cliente, nos vemos!");
            break;

        default:
            alert("No te entendí!");
            break;
    }
}
*/
