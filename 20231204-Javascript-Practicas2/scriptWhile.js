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
let continuar = true;
let cant = 0;
let num;

while (continuar){
    num = Number(prompt("Ingrese un número entero"));
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

alert(`Programa terminado! Ingresaste ${cant} números enteros.`);
