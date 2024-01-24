package com.example.primerSpring.models;

public class Alumno {
	
	private Integer id;
	private String nombre;
	private String apellido;
	private Double promedio;
	
	public Alumno(Integer id, String nombre, String apellido, Double promedio) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.promedio = promedio;
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

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Double getPromedio() {
		return promedio;
	}

	public void setPromedio(Double promedio) {
		this.promedio = promedio;
	}
	
}
