package test;

public class Ejercicio2 {
	public static void main (String [ ] args) {
		Alumno arrayAlumnos[] = new Alumno[2];
		int[]notas1 = {6, 7, 3, 4};
		arrayAlumnos[0] = new Alumno("Jorge", "Perez", notas1);
		int[]notas2 = {8, 8, 8, 8};
		arrayAlumnos[1] = new Alumno("Facundo", "Díaz", notas2);
		promedio(arrayAlumnos, "aprobado");
	}
	
	public static void promedio(Alumno array[], String estado){
		Devolucion arrayAprobados[] = new Devolucion[2];
		
		
	}
}
