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
    let arrayProductos = [];
    if (localStorage.getItem("productos") === null){
        let producto = {codigo: 1, nombre: nombreProducto.value, precio: precioProducto.value, cantidad: cantidadProducto.value};
        //Agrego al array vacío el producto.
        arrayProductos.push(producto);
        //Seteo el local storage con el array entero.
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    } else{
        arrayProductos = JSON.parse(localStorage.getItem("productos"));
        let ultimoCodigo = arrayProductos[arrayProductos.length - 1].codigo;
        let producto = {codigo: ultimoCodigo + 1, nombre: nombreProducto.value, precio: precioProducto.value, cantidad: cantidadProducto.value};
        arrayProductos.push(producto);
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    };
    notyf.success("¡Producto agregado correctamente!");
}

function redirigirCarrito(){
    window.location.href = "ecommerce-cart.html";
}