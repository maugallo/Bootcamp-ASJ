const notyf = new Notyf();

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
    let producto = {nombre: nombreProducto.value, precio: precioProducto.value, cantidad: cantidadProducto.value};
    if (localStorage.getItem("productos") === null){
        let arrayProductos = [];
        //Agrego al array vacío el producto.
        arrayProductos.push(producto);
        //Seteo el local storage con el array entero.
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    } else{
        let arrayTemporal = JSON.parse(localStorage.getItem("productos"));
        arrayTemporal.push(producto);
        localStorage.setItem("productos", JSON.stringify(arrayTemporal));
    };
    notyf.success("¡Producto agregado correctamente!");
}

function redirigirCarrito(){
    //Validar que la key "producto" exista. Si no existe, crearla. SI ya existe, capturar lo que venga
    //parsearlo con JSON y unirlo al arreglo.
    window.location.href = "ecommerce-cart.html";
}