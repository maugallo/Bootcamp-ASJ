package com.bootcamp.todolist.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bootcamp.todolist.models.Tarea;
import com.bootcamp.todolist.services.TareaService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/task") // Todo lo que funcione en este controller tendrá como mínimo la ruta
							// http://localhost:8080/task
public class TareaController {

	@Autowired // Con esta notación estoy conectando el service con este controller.
	TareaService tareaService;

	@GetMapping() // http://localhost:8080/task
	public ResponseEntity<List<Tarea>> getTareas() {

		return ResponseEntity.ok(tareaService.getTareas()); // Devuelvo
	}

	@GetMapping("/{id}") // http://localhost:8080/task/{id}
	public ResponseEntity<Optional<Tarea>> getTareaById(@PathVariable Integer id) {

		return ResponseEntity.ok(tareaService.getTareaById(id));
	}

	@PostMapping()
	public ResponseEntity<Boolean> createTarea(@Valid @RequestBody Tarea tarea, BindingResult bindingResult) {
		
		if (bindingResult.hasErrors()) return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity<>(tareaService.createTarea(tarea), HttpStatus.OK);
		//Es lo mismo que hacer ResponseEntity.ok(tareaService.createTarea(tarea)); Pero return new ResponseEntity<> es más completo en cuanto a métodos.
	}

	@PutMapping("/{id}")
	public ResponseEntity<Boolean> updateTarea(@PathVariable Integer id, @RequestBody Tarea tarea) {

		return ResponseEntity.ok(tareaService.updateTarea(id, tarea));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteTarea(@PathVariable Integer id) {

		return ResponseEntity.ok(tareaService.deleteTarea(id));
	}

}
