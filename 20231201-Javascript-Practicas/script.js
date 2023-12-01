//Cantidad de caracteres:
/*
 
 var input = prompt("Hola usuario, ingresa un texto breve");

console.log("Tu input tiene una longitud de " + input.length + ".");
*/

//Calculadora de edad:
/*
var edad = parseInt(prompt("¿Qué edad tenés?"));

var result = edad * 365;

console.log("Esa edad representa " + result + " días."); 
*/

//Suma de valores:
/*
var num1 = parseInt(prompt("Ingresa un valor para num1"));
var num2 = parseInt(prompt("Ingresa un valor para num2"));

var resultado = num1 + num2;

console.log("El valor de la suma es " + resultado + ".");
*/

//Calculadora de abastecimiento de por vida:
//Ejercicio 1:
/*
var edad = parseInt(prompt("Ingresa tu edad"));
var edadMax = parseInt(prompt("Ingresa tu edad máxima"));
var snack = "Franui";
var consumoDiario = 2;
var cantRestante = (edadMax - edad) * 365 * consumoDiario;

alert("Necesitarás " + cantRestante + " snacks para que te alcancen hasta los " + edadMax + " años.");
*/

//Ejercicio 2:
/*
var dias = parseInt(prompt("Ingresa la cantidad de días"));
var presupuesto = parseFloat(prompt("Ingresa tu presupuesto máximo"));
var comida = parseInt(prompt("¿Cuántas comidas vas a tener en todo tu viaje?"));
var gastoComida = (presupuesto / (comida * dias)).toFixed(2);

alert("Podés gastar $" + gastoComida + " en cada comida para que te alcance la plata durante los " + dias + " días de viaje.");
*/

//ES6:
//Ejercicio 1:
/*
let profesion = "programadora";
let nombre = "Gabriela";
let mensaje = `${nombre} es ${profesion}`

console.log(mensaje);
*/

//Ejercicio 2:
/*
let precioArt = parseFloat(prompt("Ingrese el precio del artículo"));
let cant = parseInt(prompt("Ingrese la cantidad que llevará"));

console.log(`El total que debe abonar es de $${precioArt*cant}`);
*/