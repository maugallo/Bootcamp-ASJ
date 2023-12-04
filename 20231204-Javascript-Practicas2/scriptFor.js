//Ejercicio 1:

let num = Number(prompt("Ingrese el número"));
let simbolo = "";

for (let index = 0; index <= num; index++) {
    console.log(simbolo);
    simbolo += "*";
}

for(let index = num; index > 0; index--){
    simbolo = "";
    for(let index2 = 0; index2 < index-1; index2++){
        simbolo += "*";
    }
    console.log(simbolo);
}


//Ejercicio 2:
/* 
let num = Number(prompt("Ingrese el número"));
let factorial = num;

for(let index = num-1; index > 0; index--){
    factorial = factorial * index;
}

alert(`El factorial de ${num} es ${factorial}`);
 */