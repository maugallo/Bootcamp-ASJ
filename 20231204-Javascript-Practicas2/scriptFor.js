//Ejercicio 1:
/* 
let num = Number(prompt("Ingrese el número"));
let simbolo = "";

for (let index = 0; index <= num; index++) {
    console.log(simbolo);
    simbolo += "*";
}

for(let index = num; index > 0; index--){ //El primer for, ayuda a determinar la cantidad de "*" que el segundo for debe dibujar. Y al final del segundo for, dibujará la cantidad de símbolos necesarios.
    simbolo = "";
    for(let index2 = 0; index2 < index-1; index2++){ //El segundo for se basará en la cantidad de valores que el index del primer for tenga, y concatenará los "*".
        simbolo += "*";
    }
    console.log(simbolo);
}
 */

//Ejercicio 2:
/* 
let num = Number(prompt("Ingrese el número"));
let factorial = num;

for(let index = num-1; index > 0; index--){
    factorial = factorial * index;
}

alert(`El factorial de ${num} es ${factorial}`);
 */