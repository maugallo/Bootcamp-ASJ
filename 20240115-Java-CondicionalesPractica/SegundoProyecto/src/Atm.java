import java.util.Scanner;

public class Atm {
	
	public static double saldo = 5000;
	
	public static Scanner scanner = new Scanner(System.in);
	
	public static boolean execute = true;
	
	public static String movimientos = "";

	public static void main(String[] args) {
		
		while(execute) {
			Menu();	
		}
		
	}
	
	public static void Menu() {
		
		PrintMenu();
		
		int resp = RespMenu();
		
		switch (resp) {
		case 1: {
			Extraer();
			break;
		}
		case 2: {
			Depositar();
			break;
		}
		case 3: {
			ConsultarSaldo();
			break;
		}
		case 4: {
			VerMovimientos();
			break;
		}
		case 5: {
			Salir();
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + resp);
		}
		
	}
	
	public static void PrintMenu() {
		System.out.println("CAJERO AUTOMÁTICO ASJ");
		System.out.println("----------------------");
		System.out.println("1- Extraer\n2- Depositar\n3- Consultar Saldo\n4- Ver Últimos Movimientos\n5- Salir");
		System.out.println("----------------------");
	}
	
	public static int RespMenu() {
		int resp;
		
		do {
			System.out.print("Respuesta: ");
			resp = scanner.nextInt();
			if (resp < 1 || resp > 5) System.out.println("Ingrese una opción válida.");
		} while(resp < 1 || resp > 5);
		
		return resp;
	}

	public static void Extraer() {
		
		if (saldo == 0) {
			System.out.println("No tienes dinero disponible en tu cuenta.");
		} else {
			double resp;
			
			do {
				System.out.print("Ingrese cuánto dinero desea extraer: $");
				resp = scanner.nextDouble();
				if (resp > saldo) System.out.println("El dinero a extraer no puede ser mayor al saldo disponible.");
				else if (resp <= 0) System.out.println("El dinero a extraer no puede ser menor a $1.");
			} while(resp > saldo || resp <= 0);
			
			ClearConsole();
			
			saldo -= resp;
			movimientos += "* Se extrajeron $" + resp + "\n";
			
			System.out.println("$" + resp + " extraidos correctamente.");
		}
	}
	
	public static void Depositar() {
		double resp;
		
		do {
			System.out.print("Ingrese cuánto dinero desea depositar: $");
			resp = scanner.nextDouble();
			if (resp <= 0) System.out.println("El dinero a depositar no puede ser menor a $1.");
		} while(resp <= 0);
		
		ClearConsole();
		
		saldo += resp;
		movimientos += "* Se depositaron $" + resp + "\n";
		
		System.out.println("$" + resp + " depositados correctamente.");
	}
	
	public static void ConsultarSaldo() {
		ClearConsole();
		
		System.out.println("SALDO ACTUAL: $" + saldo);
	}
	
	public static void VerMovimientos() {
		ClearConsole();
		
		if (movimientos.equals("")) {
			System.out.println("No hay movimientos de dinero registrados.");
		} else {
			System.out.println("Sus movimientos son: ");
			System.out.println(movimientos);
		}
	}
	
	public static void Salir() {
		ClearConsole();
		
		System.out.println("Programa finalizado.");
		scanner.close();
		execute = false;
	}
	
	public static void ClearConsole() {
		System.out.println(new String(new char[70]).replace("\0", "\r\n"));
	}
	
}
