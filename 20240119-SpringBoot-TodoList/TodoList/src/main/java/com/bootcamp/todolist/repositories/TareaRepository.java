package com.bootcamp.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todolist.models.Tarea;

//JpaRepository<T, ID> hace referencia al model que apunta y al tipo de dato de su ID (Integer en este caso).
public interface TareaRepository extends JpaRepository<Tarea, Integer> {

	// Gracias a esto, podemos aprovechar de todos los métodos que JpaRepository nos
	// ofrece, volviendo la funcionalidad de CRUD más fácil de implementar.

}
