import java.util.Random;

public class Persona {

	private String nombre;
	private int edad;
	private String dni;
	private char sexo;
	private double peso;
	private double altura;

	public Persona() {
		this.dni = this.generaDni();
	}

	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = this.generaDni();
		this.sexo = this.comprobarSexo(sexo);
	}

	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generaDni();
		this.sexo = this.comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}

	public int calcularIMC() {
		double imc = this.peso / (this.altura * this.altura);
		
		if (this.peso == 0 || this.altura == 0) {
			return 2;
		} else if (imc < 20) {
			return -1;
		} else if (imc >= 20 && imc <= 25) {
			return 0;
		} else {
			return 1;
		}
	}

	public boolean esMayorDeEdad() {

		if (this.edad > 18) {
			return true;
		} else {
			return false;
		}
	}

	private char comprobarSexo(char sexo) {

		if (sexo != 'h' && sexo != 'm') {
			return 'h';
		} else {
			return sexo;
		}
	}

	private String generaDni() {

		Random random = new Random();
		String dni = "";

		for (int i = 0; i < 8; i++) {
			dni += random.nextInt(10);
		}

		return dni;
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}

}