import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		
		exerciseFive();

	}
	
	public static void structuresExercise() {
		
		Scanner scanner = new Scanner(System.in);
		
		int cantidad;
		System.out.println("¿Cuántas notas quiere ingresar?");
		cantidad = scanner.nextInt();
		
		int[] notas = new int[cantidad];
		for (int i = 0; i < cantidad; i++) { //Uso de FOR.
			
			do { //Uso de DO-WHILE.
				System.out.println("Ingrese la nota: " + (i+1));
				notas[i] = scanner.nextInt();
				scanner.nextLine();
			} while(notas[i] < 1 || notas[i] > 10);
			
		}
		
		scanner.close();
		
		int num = 0;
		int total = 0;
		while (num < cantidad) { //Uso de WHILE.
			total += notas[num++];
		}
		
		System.out.println("Su promedio es: " + (double) total/cantidad);
	}
	
	public static void exerciseOne() {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese los 3 ángulos internos: ");
		int ang1 = scanner.nextInt();
		scanner.nextLine();
		int ang2 = scanner.nextInt();
		scanner.nextLine();
		int ang3 = scanner.nextInt();
		
		scanner.close();
		
		if (ang1 > 0 && ang2 > 0 && ang3 > 0 && (ang1 + ang2 + ang3) == 180) {
			System.out.println("Es triángulo es válido!");
		} else {
			System.out.println("El triángulo no es válido!");
		}
		
	}
	
	public static void exerciseTwo() {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese su texto: ");
		String text = scanner.nextLine();
		scanner.close();
		
		if ((int) text.charAt(0) >= 48 && (int) text.charAt(0) <= 57) {
			System.out.println("Tu primer caracter es un número!");
		} else {
			System.out.println("Tu primer caracter es una letra!");
		}
		
	}
	
	public static void exerciseThree() {
		
		int n, m, total = 0;
		
		Scanner scanner = new Scanner(System.in);
		
		do {
			System.out.println("Ingrese el valor de N y M: ");
			n = scanner.nextInt();
			m = scanner.nextInt();
			if (n == m) {
				System.out.println("Los valores no pueden ser iguales.\n");
			} else if (n < 1 || m < 1) {
				System.out.println("Los valores no pueden ser menor a 1.\\n");
			} else if (m > n) {
				System.out.println("El valor M no puede ser mayor al valor N.\n");
			}
		} while (n == m || n < 1 || m < 1 || m > n);
		
		scanner.close();
		
		for (int num = n; num <= m; num++) {
			if (num % 2 == 0) total += num;
		}
		
		System.out.println("La suma entre " + n + " y " + m + " es " + total + ".");
	}
	
	public static void exerciseFour() {
		
		int total = 0;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese el número: ");
		int num = scanner.nextInt();
		scanner.close();
		
		for (int i = 1; i < num; i++) {
			if (num % i == 0) total += i;
		}
		
		System.out.println((total == num) ? "Es un número perfecto!" : "No es un número perfecto");
		
	}
	
	public static void exerciseFive() {
		
		String EvenAsterisc = "* ";
		String OddAsteric = " * ";
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese un número: ");
		int num = scanner.nextInt();
		scanner.close();
		
		for (int b = 1; b < num; b++) {
			EvenAsterisc += "* ";
			if (b != num - 1) OddAsteric += "* ";
		}
		
		for (int i = 0; i < num; i++) {
			System.out.println((i % 2 == 0) ? EvenAsterisc : OddAsteric);
		}
	}

}
