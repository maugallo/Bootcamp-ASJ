//Ejecutar ejercicio:
ejercicioBar();

//Ejercicio 1:
function ejercicioBar(){
    let resp;
    let cuenta = 0;
    let ejecucion = true;
    alert("¡Bienvenido al bar para 1 persona! Aquí tienes tu carta, avísame qué quieres hacer.");
    
    while (ejecucion) {
        resp = controlarRespuesta(3, 1, `OPCIONES:\n 1- Ver menú\n 2- Pedir un chiste\n 3- Pedir la cuenta\n\nCuenta: $${cuenta}`); 
    
        switch (resp) {
            case 1:
                verMenu();
                break;
    
            case 2:
                escucharChiste();
                break;
    
            case 3:
                ejecucion = pagarCuenta();
                break;
    
            default:
                alert("No te entendí!");
                break;
        }
    }

    function verMenu(){
        resp = controlarRespuesta(4, 1, "-----MENU-----\n1. Fernet c/Coca-Cola - $500\n2. Gin Tonic c/Tónica - $500\n3. Milanesa Napolitana c/Puré - $1500\n4. Fideos c/bolognesa - $1000");
        switch (resp) {
            case 1:
                alert("Servite tu Fernet c/Coca-Cola");
                cuenta += 500;
                break;
    
            case 2:
                alert("Servite tu Gin Tonic c/Tónica");
                cuenta += 500;
                break;
    
            case 3:
                alert("Servite tu Milanesa Napolitana c/Puré");
                cuenta += 1500;
                break;
    
            case 4:
                alert("Servite tu Fideos c/bolognesa");
                cuenta += 1000;
                break;
    
            default:
                alert("No entendí lo que querés");
                break;
        }
    }
    
    function escucharChiste(){
        resp = controlarRespuesta(2, 1, "¡Por supuesto! Elige entre dos:\n1. Chiste sobre Python\n2. Chiste sobre JavaScript");
        if (resp === 1) {
            alert("¿Por qué los programadores de Python no pueden reconocer sus relaciones tóxicas? Porque ignoran las excepciones.");
        } else {
            alert("¿Cómo confortas a un desarrollador de JavaScript? Simplemente le dices 'Estoy aquí para ti; no eres indefinido.'");
        }
    }
    
    function pagarCuenta(){
        if (cuenta === 0){
            alert("No hace falta que pagues nada!")
        } else{
            resp = controlarRespuesta(2, 1, "¿La cuenta? ¡Enseguida! ¿Vas a agregar propina?\n1. Sí\n2. No");
    
            resp === 1 ? alert(`El total sería $${cuenta += (cuenta * 0.1)}`): alert(`El total sería $${cuenta}`) 
        }
        alert("¡Un gusto tenerte como cliente, nos vemos!");
        return false;
    }
    
    function controlarRespuesta(valorMax, valorMin, mensaje){
        let resp;
        do {
            resp = Number(prompt(mensaje));
        } while (resp > valorMax || resp < valorMin || isNaN(resp));
        return resp;
    }
}

