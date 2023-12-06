//Visor de resultados:
let visor = document.getElementById("visor");

//Botones numéricos:
let btnUno = document.getElementById("btn-uno");
btnUno.addEventListener("click", function () { ingresarBoton("1") });

let btnDos = document.getElementById("btn-dos");
btnDos.addEventListener("click", function () { ingresarBoton("2") });

let btnTres = document.getElementById("btn-tres");
btnTres.addEventListener("click", function () { ingresarBoton("3") });

let btnCuatro = document.getElementById("btn-cuatro");
btnCuatro.addEventListener("click", function () { ingresarBoton("4") });

let btnCinco = document.getElementById("btn-cinco");
btnCinco.addEventListener("click", function () { ingresarBoton("5") });

let btnSeis = document.getElementById("btn-seis");
btnSeis.addEventListener("click", function () { ingresarBoton("6") });

let btnSiete = document.getElementById("btn-siete");
btnSiete.addEventListener("click", function () { ingresarBoton("7") });

let btnOcho = document.getElementById("btn-ocho");
btnOcho.addEventListener("click", function () { ingresarBoton("8") });

let btnNueve = document.getElementById("btn-nueve");
btnNueve.addEventListener("click", function () { ingresarBoton("9") });

let btnCero = document.getElementById("btn-cero");
btnCero.addEventListener("click", function () { ingresarBoton("0") });

//Botones de símbolos matemáticos:
let btnSuma = document.getElementById("btn-suma");
btnSuma.addEventListener("click", function(){ ingresarBoton("+") });

let btnResta = document.getElementById("btn-resta");
btnResta.addEventListener("click", function(){ ingresarBoton("−") });

let btnMultiplicacion = document.getElementById("btn-multiplicacion");
btnMultiplicacion.addEventListener("click", function(){ ingresarBoton("x") });

let btnDivision = document.getElementById("btn-division");
btnDivision.addEventListener("click", function(){ ingresarBoton("÷") });

//Otros botones:
let btnClear = document.getElementsByClassName("btn-clear");
btnClear[0].addEventListener("click", function () { ingresarBoton("CE") });
btnClear[1].addEventListener("click", function () { ingresarBoton("CE") });

function ingresarBoton(boton) {
    if (longitudMaxima() == false) {
        if (visor.innerText == 0) {
            if (boton == "+" || boton == "−" || boton == "x" || boton == "÷") {
                visor.innerText = "ERROR";
            } else if (boton == "CE") {
                visor.innerText = "0";
            } else if (boton != "0") {
                visor.innerText = boton;
            }
        } else if (boton == "CE") {
            visor.innerText = "0";
        } else {
            visor.innerText += boton;
        }
    } else {
        if (boton == "CE") {
            visor.innerText = 0;
        }
    }
}

function longitudMaxima() {
    if (visor.innerText.length > 15) {
        return true;
    } else {
        return false;
    }
}