const notyf = new Notyf();
const arrayProductos = [];

let cantidadProducto = document.getElementById("cantidad");
let nombreProducto = document.getElementById("nombre-producto");
let precioProducto = document.getElementById("precio-producto");

function sumarCantidad(){
    if(Number(cantidadProducto.value) < 100){
        cantidadProducto.value = Number(cantidadProducto.value) + 1;
    }
}

function restarCantidad(){
    if(Number(cantidadProducto.value) > 1){
        cantidadProducto.value = Number(cantidadProducto.value) - 1;
    }
}

function agregarProducto(){
    arrayProductos.push({nombre: nombreProducto.value, precio: precioProducto.value, cantidad: cantidadProducto.value});
    notyf.success("¡Producto agregado correctamente!");
}

function redirigirCarrito(){
    if (arrayProductos.length > 0){
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    }
    window.location.href = "ecommerce-cart.html";
}