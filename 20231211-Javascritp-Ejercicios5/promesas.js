let condicion = false;
let mensajeExitoso = "Promesa exitosa!";
let mensajeNoExitoso = "Promesa no exitosa";

console.log("1...");

const promesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (condicion){
            resolve(mensajeExitoso);
        } else{
            reject(mensajeNoExitoso);
        }
    }, 5000); //Hacemos esperar 5 segundos para mostrar la asincronicidad de las promesas. Podemos ejecutar varios procesos a la vez, y aunque uno se demore el resto se seguirá ejecutando.
});

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((mensaje) => {
    console.log(mensaje);
}).finally(() => { //Útil para quitar por ejemplo un 'loader'.
    console.log("Ejecutando el finally, siempre va a estar!");
});

console.log("2...");

console.log("3...");

console.log("4...");

console.log("5...");