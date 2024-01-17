import java.util.ArrayList;
import java.util.Scanner;

public class Poo {

	public static void main(String[] args) {

		ExerciseSuperheroes();

	}

	public static void ExerciseOne() {

		Calculo calculo = new Calculo(52, 25);

		System.out.println(calculo.Suma());

		System.out.println(calculo.Resta());

		System.out.println(calculo.Multiplicacion());

		System.out.println(calculo.Division());
	}

	public static void ExerciseTwo() {

		Cuenta cuenta = new Cuenta("Gallo Mauro", 5000);

		System.out.println(cuenta.toString());

		cuenta.Retirar(4000);

		System.out.println(cuenta.toString());

		cuenta.Retirar(1500);

		System.out.println(cuenta.toString());

		cuenta.Ingresar(10000);

		System.out.println(cuenta.toString());
	}

	public static void ExerciseThree() {

		Scanner scanner = new Scanner(System.in);
		ArrayList<Password> listaPasswords = new ArrayList<Password>();
		Password password = new Password();
		boolean execute = true;

		System.out.println("Bienvenido al sistema de verificación de contraseña");

		while (execute) {
			System.out.println(
					"\nDesea:\n1- Ingresar su propia contraseña.\n2- Generar una contraseña nueva\n3- Verificar contraseñas");

			int resp = scanner.nextInt();
			scanner.nextLine();

			if (resp == 1) {
				System.out.print("Ingrese su contraseña: ");
				String contrasena = scanner.nextLine();

				password = new Password(contrasena);

				listaPasswords.add(password);
			} else if (resp == 2) {
				System.out.print("Ingrese la longitud deseada: ");
				int longitud = scanner.nextInt();

				password = new Password(longitud);
				password.generarPassword();

				listaPasswords.add(password);
			} else if (resp == 3) {
				execute = false;
			}
		}
		scanner.close();

		for (Password elemento : listaPasswords) {
			System.out.print("Su contraseña '" + elemento.getContrasena() + "' es: ");
			System.out.print(elemento.esFuerte() ? "**FUERTE**" : "**DÉBIL**");
			System.out.println();
		}

	}

	public static void ExerciseFour() {

		ArrayList<Persona> listaPersonas = new ArrayList<Persona>();

		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese el nombre: ");
		String nombre = scanner.nextLine();
		System.out.print("Ingrese la edad: ");
		int edad = scanner.nextInt();
		scanner.nextLine();
		System.out.print("Ingrese el sexo: ");
		char sexo = scanner.nextLine().charAt(0);
		System.out.print("Ingrese el peso (kg): ");
		double peso = scanner.nextDouble();
		scanner.nextLine();
		System.out.print("Ingrese la altura (m): ");
		double altura = scanner.nextDouble();
		scanner.nextLine();

		Persona persona1 = new Persona(nombre, edad, sexo, peso, altura);

		System.out.print("---------------------\nIngrese el nombre: ");
		nombre = scanner.nextLine();
		System.out.print("Ingrese la edad: ");
		edad = scanner.nextInt();
		scanner.nextLine();
		System.out.print("Ingrese el sexo: ");
		sexo = scanner.nextLine().charAt(0);

		Persona persona2 = new Persona(nombre, edad, sexo);

		Persona persona3 = new Persona();

		listaPersonas.add(persona1);
		listaPersonas.add(persona2);
		listaPersonas.add(persona3);

		System.out.print("---------------------\n");
		for (Persona persona : listaPersonas) {
			System.out.print("IMC: ");

			if (persona.calcularIMC() == -1) {
				System.out.println("Debajo de peso de ideal");
			} else if (persona.calcularIMC() == 0) {
				System.out.println("Peso ideal");
			} else if (persona.calcularIMC() == 1) {
				System.out.println("Sobrepeso");
			} else if (persona.calcularIMC() == 2) {
				System.out.println("Error");
			}

			System.out.print("Edad: ");

			if (persona.esMayorDeEdad()) {
				System.out.println("Es mayor de edad.");
			} else {
				System.out.println("No es mayor de edad.");
			}

			System.out.println(persona.toString());

			System.out.println();
		}

	}

	public static void ExerciseSuperheroes() {
		
		Dimension dim1 = new Dimension(10, 5, 3);
		Dimension dim2 = new Dimension(8, 4, 2);

		// Crear algunos objetos Superheroe
		Superheroe superheroe1 = new Superheroe("Superman");
		Superheroe superheroe2 = new Superheroe("Batman");
		superheroe2.setCapa(true);

		// Crear algunos objetos Figura
		Figura figura1 = new Figura("001", 50, superheroe1, dim1);
		Figura figura2 = new Figura("002", 30, superheroe2, dim2);

		// Crear una colección
		Coleccion coleccion = new Coleccion("Mi Coleccion");

		// Agregar figuras a la colección
		coleccion.anadirFigura(figura1);
		coleccion.anadirFigura(figura2);

		// Mostrar información de la colección
		System.out.println("Información de la colección:");
		System.out.println(coleccion);

		// Subir el precio de una figura en la colección
		coleccion.subirPrecio(10, "001");

		// Mostrar información de la colección después de subir el preci
		// Mostrar información de la colección después de subir el precio
		System.out.println("\nInformación de la colección después de subir el precio:");
		System.out.println(coleccion);

		// Mostrar figuras con capa
		System.out.println("\nFiguras con capa:");
		System.out.println(coleccion.conCapa());

		// Mostrar la figura más valiosa
		System.out.println("\nFigura más valiosa:");
		System.out.println(coleccion.masValiosa());

		// Mostrar el valor total de la colección
		System.out.println("\nValor total de la colección: $" + coleccion.getValorColeccion());

		// Mostrar el volumen total de la colección
		System.out.println("Volumen total de la colección: " + coleccion.getVolumenColeccion() + " unidades cúbicas");
		
	}
}
