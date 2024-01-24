package com.example.primerSpring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EjemploController {

	// Indica que cuando alguien utilice un método HTTP GET en este endpoint, se
	// devolverá un mensaje.
	@GetMapping("/message") // http://localhost:8080/message
	public String messageEjemplo() {
		return "Hola mundo! Este es un mensaje de ejemplo, obtenido mediante una llamada HTTP con GET!";
	}

	@GetMapping("/message/{name}") // http://localhost:8080/message/jorge
	public String messageParametroEjemplo(@PathVariable String name) {
		return "¡Hola " + name + "!";
	}

}

/*
 * 
 * Controller: Encargado de manejar las peticiones HTTP que el servicio de
 * Angular le envía. Toda petición HTTP que recibirá deberá tener: Endpoint de
 * la API (Url). Método HTTP que solicita (get, post, put, delete, patch, etc).
 * Datos (opcionales, como objetos o tipos de datos).
 * 
 */