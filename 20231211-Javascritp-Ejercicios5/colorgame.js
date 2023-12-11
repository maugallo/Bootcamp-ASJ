//EJERCICIO CON PAIR PROGRAMMING | Simón Sueldo y Mauro Gallo

let colors = [];
const cuadrados = document.querySelectorAll(".square");
const titulo = document.getElementById("h1");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const body = document.querySelector("body");
const colorFondo = body.style.getPropertyValue("background-color");
const resetBtn = document.getElementById("reset");
const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");

let pickedColor = "";
let clickedColor = "";

// Al inicializarse por primera vez
colors = generateRandomColors(cuadrados.length);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

// Evento para jugar

cuadrados.forEach((cuadrado, i) => {
  cuadrado.style.backgroundColor = colors[i];
  cuadrado.setAttribute("id", colors[i]);
  cuadrado.addEventListener("click", (e) => {
    clickedColor = e.target.id;
    if (clickedColor != pickedColor) {
      cuadrado.style.backgroundColor = colorFondo; //Desaparecer cuadrado.
      message.textContent = "Intentalo Nuevamente";
    } else {
      message.textContent = "Correcto!";
      changeColors(clickedColor);
      resetBtn.textContent = "Play Again?";
    }
  });
});

// Evento para reiniciar el juego

resetBtn.addEventListener("click", reset);

// Botones para elegir dificultad

easyBtn.addEventListener("click", isSelected);
hardBtn.addEventListener("click", isSelected);

/* Funciones utiles */

function isSelected(e) {
  if (e.target.id == "easy") {
    toggleDifficultyBtn();
    //Código para activar el modo fácil.
  } else if (e.target.id == "hard") {
    toggleDifficultyBtn();
    //Código para activar el modo difícil.
  }
}

function toggleDifficultyBtn() {
  easyBtn.classList.toggle("selected");
  hardBtn.classList.toggle("selected");
}

function reset() {
  colors = generateRandomColors(cuadrados.length);
  titulo.style.backgroundColor = colorFondo;
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "Nuevos Colores";
  message.textContent = "";
  cuadrados.forEach((cuadrado, i) => {
    cuadrado.style.backgroundColor = colors[i];
    cuadrado.setAttribute("id", colors[i]);
  });
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)]; //Retorna un número aleatorio entre 0 y 5.
}

function changeColors(clickedColor) {
  titulo.style.backgroundColor = clickedColor;
  cuadrados.forEach((cuadrado) => {
    cuadrado.style.backgroundColor = clickedColor;
  });
}

function generateRandomColors(cantidad) {
  let array = [];
  for (let i = 0; i < cantidad; i++) {
    array.push(randomColor());
  }
  return array;
}

function randomColor() {
  return `rgb(${numeroAleatorio()},${numeroAleatorio()},${numeroAleatorio()})`;
}

function numeroAleatorio() {
  return Math.floor(Math.random() * (255 - 1) + 1); //Retorna un número aleatorio entre 1 y 255.
}
