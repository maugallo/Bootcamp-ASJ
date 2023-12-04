//Ejercicio 1:

let num = Number(prompt("Ingrese el número"));
let simbolo = "*";
let cantidad = num -1;

for (let index = 0; index < num; index++) {
    console.log(simbolo);
    simbolo += "*";
}

for(index = num; index > 0; index--){
    console.log(simbolo.substring(0, cantidad));
    cantidad --;
}
