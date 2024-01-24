package com.bootcamp.todolist.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity // Aclaro que será una entidad.
@Table(name = "tareas") // Aclaro que será una tabla llamada 'tareas'.
public class Tarea {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotNull(message = "El nombre no puede ser nulo")
	private String nombre; // Cada uno de los atributos tienen internamente la notación @Column, por lo que
							// los detectará como parte de la tabla.

	private Boolean checked;

	private String estado;

	public Tarea() {

	}

	public Tarea(Integer id, String nombre, Boolean checked, String estado) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.checked = checked;
		this.estado = estado;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

}
