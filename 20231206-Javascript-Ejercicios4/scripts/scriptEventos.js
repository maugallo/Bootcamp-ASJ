let inputTxt = document.getElementById("inputTxt");
let txtSinVocales = document.getElementById("txtSinVocales");

inputTxt.addEventListener("keydown", function(event){
    if (esVocal(event.key)){
        txtSinVocales.innerHTML += "_";
    }else if (event.which < 91 && event.which >=65){
        txtSinVocales.innerHTML += event.key;
    } else if(event.code === "Space"){
        txtSinVocales.innerHTML += "&nbsp";
    } else if (event.code === "Backspace"){
        txtSinVocales.innerHTML = txtSinVocales.innerHTML.substring(0, txtSinVocales.innerHTML.length-1);
    }
});

function esVocal(tecla){
    if (tecla === "a" || tecla === "e" || tecla === "i" || tecla === "o" || tecla === "u"){
        return true;
    } else{
        return false;
    }
}

