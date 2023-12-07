const notyf = new Notyf({position: {x:'center',y:'top'}});
let body = document.getElementById("table-body");
let btnPay = document.getElementById("btn-pay");
let arrayProductos;

window.addEventListener("load", () =>{
    arrayProductos = JSON.parse(localStorage.getItem("productos"));
    if (arrayProductos != null){
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
            let trEliminar = document.createTextNode("");
            //Enlazo cada columna con su contenido:
            tdName.appendChild(trProductName);
            tdPrice.appendChild(trProductPrice);
            tdQuantity.appendChild(trProductQuantity);
            tdSubtotal.appendChild(trSubtotal);
            tdEliminar.appendChild(trEliminar);
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

btnPay.addEventListener("click", () =>{
    let modalBody = document.getElementById("modal-pay");
    arrayProductos = JSON.parse(localStorage.getItem("productos"));
    if (arrayProductos != null){
        
    }
});