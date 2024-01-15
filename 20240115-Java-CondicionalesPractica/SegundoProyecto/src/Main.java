import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		AsciiExercise();
		
	}
	
	public static void AsciiExercise() {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese la palabra:");
		String text = scanner.nextLine();
		scanner.close();
		
		System.out.print("Su código ASCII es: ");
		
		for (int i = 0; i < text.length() ; i++) {
			System.out.print( (int) text.charAt(i) + " ");
		}
		
	}

}
