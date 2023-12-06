//Visor de resultados:
let visor = document.getElementById("visor");

//Botones numéricos: (Pasar todos los btn a clases y usar un for) (Separarlos también en una clase numero para poder concatenarlos luego).
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

//Botones de símbolos matemáticos: (Pasar todos los btn a clases y usar un for) 
let btnSuma = document.getElementById("btn-suma");
btnSuma.addEventListener("click", function(){ ingresarBoton("+") });

let btnResta = document.getElementById("btn-resta");
btnResta.addEventListener("click", function(){ ingresarBoton("−") });

let btnMultiplicacion = document.getElementById("btn-multiplicacion");
btnMultiplicacion.addEventListener("click", function(){ ingresarBoton("x") });

let btnDivision = document.getElementById("btn-division");
btnDivision.addEventListener("click", function(){ ingresarBoton("÷") });

//Otros botones: (Pasar todos los btn a clases y usar un for) (Usar solo el botón C. El CE dejarlo)
let btnClear = document.getElementsByClassName("btn-clear");
btnClear[0].addEventListener("click", function () { ingresarBoton("CE") });
btnClear[1].addEventListener("click", function () { ingresarBoton("CE") });

function ingresarBoton(boton) {
    if (longitudMaxima() == false) {
        if(visor.innerText == "ERROR"){
            if (boton == "CE") visor.innerText = "0";
        } else if (visor.innerText == 0) {
            //Si el botón ingresado es un símbolo matemático y el visor está vacío devuelve ERROR.
            if (esUnSimbolo(boton)) {
                visor.innerText = "ERROR";
            //Si el botón ingresado es distinto de cero cuando el visor está limpio, lo reemplaza por el 0.
            } else if (boton != "0" && boton != "CE") {
                visor.innerText = boton;
            }
        //Si el visor tiene valores, y el botón ingresado es CE se limpia el visor.
        } else if (boton == "CE") {
            visor.innerText = "0";
        //Si el visor tiene valores, y el botón ingresado es un símbolo matemático.
        } else if(esUnSimbolo(boton)){
            //Entonces evalúa, si el último caracter del visor NO es un símbolo matemático. Ya que si lo es, no le dejará ingresar dos seguidos.
            if (!esUnSimbolo(ultimoCaracter(visor))){
                visor.innerText += boton;    
            }
        //Si el visor NO tiene un mensaje de ERROR, podrá concatenar valores. De lo contrario, no le dejará ingresar nada.
        } else if(visor.innerText != "ERROR") {
            visor.innerText += boton;
        }
    } else {
        //Si el visor llegó a la longitud máxima, solo se podrá ingresar el botón de limpieza.
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

function ultimoCaracter(visor){
    //Devuelve el último caracter del visor.
    return visor.innerText.charAt(visor.innerText.length-1);
}

function esUnSimbolo(valor){
    if(valor == "+" || valor == "−" || valor == "x" || valor == "÷"){
        return true;
    } else{
        return false;
    }
}