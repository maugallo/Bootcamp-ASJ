let btnEnviar = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("txtNombre");
let txtApellido = document.getElementById("txtApellido");
let h1 = document.getElementById("h1Nombre");
let h2 =  document.getElementById("h2Apellido");

btnEnviar.addEventListener("click", function(){
    h1.innerText = txtNombre.value;
    h2.innerText = txtApellido.value;
    h2.style.color = "red";
} );