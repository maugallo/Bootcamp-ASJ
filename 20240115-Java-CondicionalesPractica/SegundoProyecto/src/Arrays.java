import java.util.Random;
import java.util.Scanner;

public class Arrays {

	public static void main(String[] args) {
		
		ExerciseEight();

	}

	public static void ExerciseTwo() {
		int[] arrayNumeros = new int[5];

		Scanner scanner = new Scanner(System.in);
		StringBuilder stringBuilder = new StringBuilder();

		for (int i = 0; i <= (arrayNumeros.length - 1); i++) {
			System.out.print("Ingrese el número en el índice [" + (i) + "]: ");

			if (i == (arrayNumeros.length - 1)) { // Pregunta si está parado en el último índice del array.
				arrayNumeros[0] = scanner.nextInt();
				stringBuilder.append(arrayNumeros[0] + "[" + 0 + "]\n");
			} else {
				arrayNumeros[i + 1] = scanner.nextInt();
				stringBuilder.append(arrayNumeros[i + 1] + "[" + (i + 1) + "]\n");
			}
		}

		scanner.close();

		System.out.println(stringBuilder);
	}

	public static void ExerciseThree() {
		Integer[] arrayOrdenados = new Integer[5];
		Integer[] arrayImpares = new Integer[5];

		int numero;
		int indexPares = 0;
		int indexImpares = 0;

		Random random = new Random();

		// Cargar números pares e impares.
		for (int i = 0; i < arrayOrdenados.length; i++) {
			numero = random.nextInt(101);

			if (numero % 2 == 0) { // Suma su indice a medida que encuentra números pares.
				arrayOrdenados[indexPares] = numero;
				indexPares++;
			} else { // Suma su indice a medida que encuentra números impares.
				arrayImpares[indexImpares] = numero;
				indexImpares++;
			}

		}

		indexImpares = 0;
		for (int i = 0; i < arrayOrdenados.length; i++) {
			if (arrayOrdenados[i] == null) {
				arrayOrdenados[i] = arrayImpares[indexImpares];
				indexImpares++;
			}
		}

		System.out.println("Numeros transformados:");
		for (int i = 0; i < arrayOrdenados.length; i++) {
			System.out.println(arrayOrdenados[i]);
		}

	}

	public static void ExerciseFour() {
		Integer[][] matrizNumeros = new Integer[3][3];
		int numero;

		Random random = new Random();

		for (int i = 0; i < matrizNumeros.length; i++) {
			for (int b = 0; b < matrizNumeros.length; b++) {

				do {
					numero = GenerateRandom(random);
				} while (isNumberRepeated(matrizNumeros, numero));
				matrizNumeros[i][b] = numero;

			}
		}

		for (int i = 0; i < matrizNumeros.length; i++) {
			for (int b = 0; b < matrizNumeros.length; b++) {
				System.out.println(matrizNumeros[i][b]);
			}
			System.out.println();
		}

	}

	public static boolean isNumberRepeated(Integer[][] matriz, int number) {
		for (int i = 0; i < matriz.length; i++) {
			for (int b = 0; b < matriz.length; b++) {
				if (matriz[i][b] != null && number == matriz[i][b])
					return true;
			}
		}
		return false;
	}

	public static int GenerateRandom(Random random) {
		return random.nextInt(101);

	}

	public static void ExerciseFive() {
		int resp, posicion, suma = 0;

		Integer[][] matrizNumeros = getMatriz();

		Scanner scanner = new Scanner(System.in);

		System.out.println("J  J  J");
		for (int i = 0; i < matrizNumeros.length; i++) { // Iterar sobre las filas
			for (int j = 0; j < matrizNumeros[i].length; j++) { // Iterar sobre las columnas
				System.out.print(matrizNumeros[i][j] + " "); // Imprimir cada elemento seguido de un espacio
			}
			System.out.println(); // Imprimir una nueva línea al final de cada fila
		}

		System.out.println("\n¿Qué desea sumar?:\n1- Fila\n2- Columna");

		do {
			resp = scanner.nextInt();
			if (resp < 1 || resp > 2)
				System.out.println("Ingrese una respuesta válida");
		} while (resp < 1 || resp > 2);

		System.out.println("¿Qué posición de fila/columna desea sumar?");

		do {
			posicion = scanner.nextInt();
			if (posicion < 1 || posicion > 3)
				System.out.println("Ingrese una respuesta válida");
		} while (posicion < 1 || posicion > 3);

		scanner.close();

		if (resp == 1) {
			for (int i = 0; i < matrizNumeros.length; i++) {
				suma += matrizNumeros[posicion - 1][i];
			}
		} else if (resp == 2) {
			for (int i = 0; i < matrizNumeros.length; i++) {
				suma += matrizNumeros[i][posicion - 1];
			}
		}

		System.out.println("Resultado: " + suma);

	}

	public static Integer[][] getMatriz() {
		Integer[][] matrizNumeros = new Integer[3][3];
		int numero;

		Random random = new Random();

		for (int i = 0; i < matrizNumeros.length; i++) {
			for (int b = 0; b < matrizNumeros.length; b++) {

				do {
					numero = GenerateRandom(random);
				} while (isNumberRepeated(matrizNumeros, numero));
				matrizNumeros[i][b] = numero;

			}
		}

		return matrizNumeros;
	}

	public static void ExerciseSix() {
		boolean execute = true;
		int resp;

		Integer[][] matrizNumeros = null;
		Scanner scanner = new Scanner(System.in);

		while (execute) {
			PrintMenu();

			resp = RespuestaMenu(scanner);

			switch (resp) {
			case 1: {
				matrizNumeros = LlenarMatriz(scanner);
				break;
			}
			case 2: {
				SumarFila(matrizNumeros, scanner);
				break;
			}
			case 3: {
				SumarColumna(matrizNumeros, scanner);
				break;
			}
			case 4: {
				SumarDiagonalPrincipal(matrizNumeros);
				break;
			}
			case 5: {
				SumarDiagonalInversa(matrizNumeros);
				break;
			}
			case 6: {
				CalcularMedia(matrizNumeros);
				break;
			}
			default:
				throw new IllegalArgumentException("Unexpected value: " + resp);
			}
		}

	}

	public static void PrintMenu() {

		System.out.println("EJERCICIO NÚMERO 6:");
		System.out.println("--------------------");
		System.out.println(
				"1- Llenar matriz\n2- Sumar fila\n3- Sumar columna\n4- Sumar diagonal principal\n5- Suma diagonal inversa\n6- Media de todos los valores");
		System.out.println("--------------------");

	}

	public static int RespuestaMenu(Scanner scanner) {
		int resp;
		do {
			resp = scanner.nextInt();
			if (resp < 1 || resp > 6)
				System.out.println("Ingrese una respuesta válida");
		} while (resp < 1 || resp > 6);

		return resp;
	}

	public static Integer[][] LlenarMatriz(Scanner scanner) {
		Integer[][] matrizNumeros = new Integer[4][4];

		Random random = new Random();

		for (int i = 0; i < matrizNumeros.length; i++) {
			for (int j = 0; j < matrizNumeros.length; j++) {
				matrizNumeros[i][j] = random.nextInt(101);
			}
		}

		System.out.println("Matriz rellenada correctamente.");

		return matrizNumeros;
	}

	public static void SumarFila(Integer[][] matriz, Scanner scanner) {
		if (matriz == null) {
			System.out.println("La matriz no está llena.");
		} else {
			PrintMatriz(matriz);

			System.out.println("Ingrese la posición de la fila que desea sumar:");
			int posicion = scanner.nextInt();
			int total = 0;

			for (int i = 0; i < matriz.length; i++) {
				total += matriz[posicion - 1][i];
			}

			System.out.println("El total de la suma es " + total);
		}
	}

	public static void SumarColumna(Integer[][] matriz, Scanner scanner) {
		if (matriz == null) {
			System.out.println("La matriz no está llena.");
		} else {
			PrintMatriz(matriz);

			System.out.println("Ingrese la posición de la columna que desea sumar:");
			int posicion = scanner.nextInt();
			int total = 0;

			for (int i = 0; i < matriz.length; i++) {
				total += matriz[i][posicion - 1];
			}

			System.out.println("El total de la suma es " + total);
		}
	}

	public static void SumarDiagonalPrincipal(Integer[][] matriz) {
		if (matriz == null) {
			System.out.println("La matriz no está llena.");
		} else {
			PrintMatriz(matriz);

			int total = 0;
			for (int i = 0; i < matriz.length; i++) {
				total += matriz[i][i];
			}

			System.out.println("El total de la suma es " + total);
		}
	}

	public static void SumarDiagonalInversa(Integer[][] matriz) {
		if (matriz == null) {
			System.out.println("La matriz no está llena.");
		} else {
			PrintMatriz(matriz);

			int total = 0, j = matriz.length - 1;
			for (int i = 0; i < matriz.length; i++) {
				total += matriz[i][j];
				j--;
			}

			System.out.println("El total de la suma es " + total);
		}
	}

	public static void CalcularMedia(Integer[][] matriz) {
		int cantidad = matriz.length * matriz.length;
		int total = 0;

		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz.length; j++) {
				total += matriz[i][j];
			}
		}

		System.out.println("La media de la matriz es " + ((double) cantidad / total));
	}

	public static void PrintMatriz(Integer[][] matriz) {
		System.out.println("J J J J");
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz.length; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}
	}

	public static void ExerciseSeven() {
		int[][] matrizPersonas = new int[3][10];

		// Género
		CargarMatriz(matrizPersonas, 0);

		// Trabaja
		CargarMatriz(matrizPersonas, 1);

		// Sueldo
		CargarMatriz(matrizPersonas, 2);

		// Porcentaje de hombres:
		int cantPersonas = matrizPersonas[0].length;
		int cantHombres = CantidadHombres(matrizPersonas);

		System.out.println("Porcentaje de hombres: " + (double) cantHombres / cantPersonas * 100);

		// Porcentaje de mujeres:
		int cantMujeres = cantPersonas - cantHombres;

		System.out.println("Porcentaje de mujeres: " + (double) cantMujeres / cantPersonas * 100);

		// Porcentaje de hombres que trabajan:
		int cantTrabajadores = CantTrabajadores(matrizPersonas, 1);

		System.out.println("Porcentaje de hombres que trabajan: " + (double) cantTrabajadores / cantPersonas * 100);

		// Porcentaje de mujeres que trabajan:
		int cantTrabajadoras = CantTrabajadores(matrizPersonas, 2);

		System.out.println("Porcentaje de mujeres que trabajan: " + (double) cantTrabajadoras / cantPersonas * 100);

		// Sueldo promedio de hombres que trabajan:
		int sueldoTotal = PromedioSueldo(matrizPersonas, 1);

		System.out.println("Sueldo promedio de hombres que trabajan: " + (double) sueldoTotal / cantTrabajadores);

		// Sueldo promedio de mujeres que trabajan:
		sueldoTotal = PromedioSueldo(matrizPersonas, 2);

		System.out.println("Sueldo promedio de mujeres que trabajan: " + (double) sueldoTotal / cantTrabajadoras);
	}

	public static void CargarMatriz(int[][] matriz, int posicion) {

		Random random = new Random();

		for (int j = 0; j < matriz[0].length; j++) {

			switch (posicion) {
			case 0: { // Géneros (1- Masculino 2- Femenino):
				matriz[posicion][j] = random.nextInt(2) + 1;
				break;
			}
			case 1: { // Trabaja (1- Trabaja 2- No trabaja):
				matriz[posicion][j] = random.nextInt(2) + 1;
				break;
			}
			case 2: { // Sueldo (600 - 2000):
				matriz[posicion][j] = random.nextInt(1401) + 600;
				break;
			}
			default:
				throw new IllegalArgumentException("Unexpected value: " + posicion);
			}

		}
	}

	public static int CantidadHombres(int[][] matriz) {
		int cantHombres = 0;

		for (int j = 0; j < matriz[0].length; j++) {
			if (matriz[0][j] == 1) {
				cantHombres++;
			}
		}

		return cantHombres;
	}

	public static int CantTrabajadores(int[][] matriz, int genero) {
		int cantTrabajadores = 0;

		for (int j = 0; j < matriz[0].length; j++) {
			if (matriz[0][j] == genero && matriz[1][j] == 1) {
				cantTrabajadores++;
			}
		}

		return cantTrabajadores;
	}

	public static int PromedioSueldo(int[][] matriz, int genero) {
		int sueldoTotal = 0;

		for (int j = 0; j < matriz[0].length; j++) {
			if (matriz[0][j] == genero && matriz[1][j] == 1) {
				sueldoTotal += matriz[2][j];
			}
		}

		return sueldoTotal;
	}

	public static void ExerciseEight() {
		
	}
}
