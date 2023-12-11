const notyf = new Notyf({position: {x:'center',y:'top'}});
let body = document.getElementById("table-body");
let btnPay = document.getElementById("btn-pay");
let arrayProductos;

window.addEventListener("load", () =>{
    if (localStorage.getItem("productos") != null){
        arrayProductos = JSON.parse(localStorage.getItem("productos"));
        for(let index = 0; index < arrayProductos.length; index++){
            //Defino el tr:
            let tr = document.createElement("tr");
            //Defino las columnas de cada fila:
            let tdName = document.createElement("td");
            let tdPrice = document.createElement("td");
            let tdQuantity = document.createElement("td");
            let tdSubtotal = document.createElement("td");
            let tdEliminar = document.createElement("td");
            //Defino el contenido de cada columna:
            let trProductName = document.createTextNode(arrayProductos[index].nombre);
            let trProductPrice = document.createTextNode(`$${arrayProductos[index].precio}`);
            let trProductQuantity = document.createTextNode(arrayProductos[index].cantidad);
                //Multiplico la cantidad de productos seleccionados por su precio:
            let trSubtotal = document.createTextNode(`$${Number(arrayProductos[index].cantidad) * Number(arrayProductos[index].precio)}`);
            //Enlazo cada columna con su contenido:
            tdName.appendChild(trProductName);
            tdPrice.appendChild(trProductPrice);
            tdQuantity.appendChild(trProductQuantity);
            tdSubtotal.appendChild(trSubtotal);
            tdEliminar.innerHTML = `<a class="me-2 text-decoration-none btn btn-outline-danger" href="" onclick="eliminarProducto(${arrayProductos[index].codigo})">Eliminar</a>`;
            //Enlazo cada columna al tr
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdSubtotal);
            tr.appendChild(tdEliminar);
            //Enlazo el tr con el table-body:
            body.appendChild(tr);
        }
    } else{
        notyf.error("¡Todavía hay productos en el carrito!");
        btnPay.disabled = true;
    }
});

function eliminarProducto(codigo){
    let arrayProductos = JSON.parse(localStorage.getItem("productos"));
    let index = arrayProductos.findIndex(producto => producto.codigo === codigo);
    arrayProductos.splice(index, 1);
    if ( arrayProductos.length > 0){
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    } else{
        localStorage.removeItem("productos");
    }
}