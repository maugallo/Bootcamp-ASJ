let btnChiste = document.getElementById("btn-chiste");
let txtChiste = document.getElementById("txt-chiste");

btnChiste.addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((json) => {
            txtChiste.textContent = json.value;
        })
        .catch(() => console.log("Error!"));
});