//Ejecutar ejercicio:
ejercicio1();

//Ejercicio 1:
function ejercicio1(){
    let num;
    do{
        num = Number(prompt("Ingrese un número mayor a 0"));
    }while(num <= 0 || isNaN(num));

    function fibonacci(array){
        for (let index=0 ; index < num; index++){
            array.push(array[index+1] + array[index])
        }
    }

    const array = [0, 1];

    fibonacci(array);
    console.log(array);
}
