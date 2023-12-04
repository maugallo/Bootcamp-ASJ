let num = Number(prompt("Ingrese un número"));
let cant = 0;
let result = 0;

if (!isNaN(num)){
    while (cant <= num) {
        result += cant;
        cant += 1;
    }
    alert(`El promedio de la suma de los números anteriores a ${num} es ${Number(result/cant).toFixed(1)}`);
} else{
    alert("El valor ingresado no es un número!");
}



