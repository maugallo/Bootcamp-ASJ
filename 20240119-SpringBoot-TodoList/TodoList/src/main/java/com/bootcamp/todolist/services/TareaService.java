package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.Tarea;
import com.bootcamp.todolist.repositories.TareaRepository;

//Será llamado por el controller, e irá a buscar los objetos que el controller pida al repository.
@Service
public class TareaService {

	@Autowired // Con esta notación estoy conectando el repository con este service.
	TareaRepository tareaRepository;

	public List<Tarea> getTareas() {
		return tareaRepository.findAll(); // Es como hacer un SELECT * FROM tareas.
	}

	public Optional<Tarea> getTareaById(int id) {
		return tareaRepository.findById(id);
	}

	public Boolean createTarea(Tarea tarea) {
		if (tarea != null) {
			tareaRepository.save(tarea);
			return true;
		} else {
			return false;
		}
		
	}

	public Boolean updateTarea(Integer id, Tarea updatedTarea) {
		Tarea tarea = tareaRepository.findById(id).get();

		if (tarea != null) {
			tarea.setNombre(updatedTarea.getNombre());
			tarea.setChecked(updatedTarea.getChecked());
			tarea.setEstado(updatedTarea.getEstado());
			tareaRepository.save(tarea); //Guarda la tarea modificada.

			return true;
		} else {
			return false;
		}

	}

	public Boolean deleteTarea(int id) {
		tareaRepository.deleteById(id);
		return true;
	}

}
