let btnEnviar = document.getElementById("btn-enviar");
let txtCiudad = document.getElementById("txt-ciudad");

let spanCiudad = document.getElementById("ciudad");
let spanTemp = document.getElementById("temperatura");
let spanGrados = document.getElementById("grados");
let wIcon = document.getElementById("wicon");
let spanDescripcion = document.getElementById("descripcion");

function cargarCiudad(ciudad) {
    //Asigno un ícono de cargando mientras la promesa está en estado pendiente.
    wIcon.setAttribute("src","https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9522ed56y7ng4017xyxsn1iziumganswca7p1di9bma&ep=v1_gifs_search&rid=200w.gif&ct=g");

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=dcec7df661b1e6b0edab51d796b7339c")
    .then((response) => response.json())
    .then((json) => {
        spanCiudad.textContent = json.name;
        spanTemp.textContent = kelvinToCelcius(json.main.feels_like);
        spanGrados.innerHTML = "<sup>C°</sup>";
        spanDescripcion.textContent = json.weather[0].description;
        establecerIcon(json.weather[0].description);
        console.log(json);
    })
    .catch(() => {
        alert("Esa ciudad no existe!");
        wIcon.removeAttribute("src");
        document.querySelector(".container").style.visibility = "hidden";
    });
}

function kelvinToCelcius(temperatura){
    return Math.floor((temperatura - 273));
}

function establecerIcon(descripcionClima){
    switch (descripcionClima) {
        case "clear sky":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            break;

        case "few clouds":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
            break;
        
        case "scattered clouds":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
            break;

        case "broken clouds":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            break;
        
        case "shower rain":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            break;

        case "rain":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            break;

        case "thunderstorm":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            break;

        case "snow":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            break;

        case "mist":
            wIcon.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            break;
    
        default:
            wIcon.setAttribute("src", "https://static.thenounproject.com/png/1856611-200.png");
            break;
    }
}

btnEnviar.addEventListener("click", ()=>{
    document.querySelector(".container").style.visibility = "visible";
    cargarCiudad(txtCiudad.value);
    txtCiudad.value = "";
});