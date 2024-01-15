import java.util.Scanner;

public class Challenges {

	public static void main(String[] args) {
		
		LoopsTwo();

	}
	
	public static void InputOutputOne() {
		
		Scanner scanner = new Scanner(System.in);
		
		
		int num1 = scanner.nextInt();
		int num2 = scanner.nextInt();
		int num3 = scanner.nextInt();

		scanner.close();
		
		System.out.println("\nResults:\n\n" + num1 + "\n" + num2 + "\n" + num3);
		
	}
	
	public static void InputOutputTwo() {
			
		Scanner scanner = new Scanner(System.in);
		
		int num = scanner.nextInt();
		scanner.nextLine();
		double num2 = scanner.nextDouble();
		scanner.nextLine();
		String text = scanner.next();
		
		scanner.close();
		
		System.out.println("\nString: " + text);
		System.out.println("Double: " + num2);
		System.out.println("Int: " + num);
		
	}

	public static void IfElseCondition() {
		
		Scanner scanner = new Scanner(System.in);
		
		int num = scanner.nextInt();
		
		scanner.close();
		
		if (num % 2 == 0 && ((num >= 2 && num <= 5) || (num > 20))){
			System.out.println("Not weird!");
		} else if ((num % 2 == 0 && (num >= 6 && num <= 20)) || (num % 2 != 0)) {
			System.out.println("Weird!");
		}
		
	}
	
	public static void LoopsOne() {
		
		Scanner scanner = new Scanner(System.in);
		
		int num = scanner.nextInt();
		
		while (num < 2 || num > 20) {
			System.out.println("Ingrese un valor válido");
			num = scanner.nextInt();
		}
		
		for(int mult = 1; mult <= 10; mult++ ) {
			System.out.println(num + " x " + mult + " = " + mult * num);
		}
		
	}
	
	public static void LoopsTwo() {
		
		Scanner scanner = new Scanner(System.in);
		
		StringBuilder stringbuilder = new StringBuilder();
		
		System.out.println("q: ");
		int q = scanner.nextInt();
		while (q < 0 || q > 500) {
			System.out.println("Ingrese un valor válido para q");
			q = scanner.nextInt();
		}
		
		for (int i = 0; i < q; i++) {
			System.out.println("a: ");
			int a = scanner.nextInt();
			while (a < 0 || a > 50) {
				System.out.println("Ingrese un valor válido para a");
				a = scanner.nextInt();
			}
			
			System.out.println("b: ");
			int b = scanner.nextInt();
			while (b < 0 || b > 50) {
				System.out.println("Ingrese un valor válido para b");
				b = scanner.nextInt();
			}
			
			System.out.println("n: ");
			int n = scanner.nextInt();
			while (n < 1 || n > 15) {
				System.out.println("Ingrese un valor válido para n");
				n = scanner.nextInt();
			}
			
			for (int s = 0; s < n; s++) {
				a += Calculation(b, s);
				stringbuilder.append(a);
				stringbuilder.append("\t");
			}
			stringbuilder.append("\n");
		}
		
		scanner.close();
		
		System.out.println(stringbuilder);
		
	}
	
	public static int Calculation(int b, int s) {
		return (int) (Math.pow(2, s) * b);
	}
	
}
