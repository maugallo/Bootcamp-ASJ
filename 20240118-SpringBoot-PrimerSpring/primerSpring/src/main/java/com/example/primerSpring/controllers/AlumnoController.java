package com.example.primerSpring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.primerSpring.models.Alumno;

@RestController
public class AlumnoController {

	private List<Alumno> lista = new ArrayList<Alumno>(
			List.of(
					new Alumno(1, "Bart", "Simpson", 2.5),
					new Alumno(2, "Lisa", "Simpson", 4.8),
					new Alumno(3, "Milhouse", "Van Houten", 3.2),
					new Alumno(4, "Nelson", "Muntz", 2.0),
					new Alumno(5, "Ralph", "Wiggum", 1.5)

			)
	);
	
	@GetMapping("/alumnos") // [GET] http://localhost:8080/alumnos
	public List<Alumno> getAlumnos() {
		return lista;
	}
	
	@GetMapping("/alumnos/{id}") // [GET]  http://localhost:8080/alumnos/id
	public Alumno getAlumnoById(@PathVariable Integer id) {
		
		for (Alumno alumno : lista) {
			if(alumno.getId() == id) {
				return alumno;
			}
		}
		
		return null;
	}
	
	@PostMapping("/alumnos") // [POST]  http://localhost:8080/alumnos
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		if (alumno != null) {
			alumno.setId(lista.getLast().getId() + 1);
			lista.add(alumno);
			return alumno;
		} else {
			return null;
		}
	}
	
	@PutMapping("/alumnos/{id}") // [PUT] http://localhost:8080/alumnos/id (Ponerle parámetro)
	public Alumno editAlumno(@PathVariable Integer id, @RequestBody Alumno newAlumno) {
		
		for (Alumno alumno : lista) {
			if(alumno.getId() == id) {
				lista.set(lista.indexOf(alumno), newAlumno);
				return newAlumno;
				//return "Alumno de id " + newAlumno.getId() + " editado correctamente";
			}
		}
		
		return null;
		//return "Ocurrió un error al editar el alumno";
	}
	
	@DeleteMapping("/alumnos/{id}") // [DELETE]  http://localhost:8080/alumnos/id
	public Alumno deleteAlumnoById(@PathVariable Integer id) {
		
		for (Alumno alumno : lista) {
			if(alumno.getId() == id) {
				lista.remove(alumno);
				return alumno;
				//return "Alumno de id " + id + " eliminado correctamente";
			}
		}
		
		return null;
		//return "Ocurrió un error al eliminar el alumno";
		
	}
}
