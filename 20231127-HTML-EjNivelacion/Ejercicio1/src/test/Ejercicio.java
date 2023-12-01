package test;

import java.util.Scanner;

public class Ejercicio {
	public static void main (String [ ] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Ingrese un número:");
		int num = sc.nextInt();
		if (num % 2 == 0) {
			System.out.println("Número par!");
		} else {
			System.out.println("Número impar!");
		}

		sc.close();
	}
}
