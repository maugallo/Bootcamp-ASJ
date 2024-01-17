import java.util.Scanner;

public class NumbersExercise {

	public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese su texto: ");
        String text = scanner.nextLine();
        scanner.close();
        
        String resultado = Function(text);
        System.out.println(resultado);
    }
    
    public static String Function(String text) {
        StringBuilder resultado = new StringBuilder();
        
        int numIngresado = 0;
        int contador = -1;
        
        for (int i = 0; i < text.length(); i ++) {
            char letra = text.charAt(i);
            
            if ((int) letra != 32) { //Si no es un espacio, obtenemos el caracter ingresado, y le sumamos 1 al contador para ver cuántas veces está ingresado el caracter.
            	numIngresado = Character.getNumericValue(letra);
                contador ++;
            } else if((int) letra == 32) { //Si es un espacio, ahí corta el for y obtenemos la letra con el método obtenerChar.
            	resultado.append(obtenerChar(numIngresado, contador));
                contador = -1;
            }
            
            if (i == text.length() - 1) { //Si se llegó al último caracter, concateno al resultado el último caracter.
            	resultado.append(obtenerChar(numIngresado, contador));
            }
            
        }
        
        return resultado.toString();
    }
    
    public static char obtenerChar(int numIngresado, int contador) { //Toma como parámetro el número ingresado y la cantidad de veces que se repite.
    	
        char[][] diccionario = {
                {' '}, 				// 0
                {'.'}, 				// 1
                {'a', 'b', 'c'}, 	// 2
                {'d', 'e', 'f'},	// 3
                {'g', 'h', 'i'},	// 4
                {'j', 'k', 'l'}, 	// 5
                {'m', 'n', 'o'}, 	// 6
                {'p', 'q','r', 's'},// 7
                {'t', 'u', 'v'}, 	// 8
                {'w', 'x', 'y','z'}	// 9
                };
        
        if (numIngresado == 7 || numIngresado == 9) {                        
            return (diccionario[numIngresado][contador % 4]); //Con el módulo dejo en el contador pendiente la cantidad de números ingresados que sobraron. EJ: 5 % 4 = Sobra 1 nueve o siete.
        } else if (numIngresado == 0 || numIngresado == 1) {
            return (diccionario[numIngresado][contador % 1]);
        } else {
            return (diccionario[numIngresado][contador % 3]);
        }
    }

}
