import java.util.Random;

public class Password {

	private String contrasena;
	private int longitud;

	public Password() {
		this.longitud = 8;
	}

	public Password(int longitud) {
		this.longitud = longitud;
	}
	
	public Password(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getContrasena() {
		return contrasena;
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public void generarPassword() {

		Random random = new Random();
		String password = "";
		int numRandom;

		for (int i = 0; i < this.longitud; i++) {
			numRandom = (1 + random.nextInt(3)); //Números random entre 1 y 3.
			password += (char) this.generarAscii(random, numRandom);
		}
		
		this.contrasena = password;
	}

	private int generarAscii(Random random, int num) {

		switch (num) {
		case 1: {
			return (48 + random.nextInt(10)); // Números random entre 48 a 57. ASCII (1-9)
		}
		case 2: {
			return (65 + random.nextInt(26)); // Números random entre 65 a 90. ASCII (a-z)
		}
		case 3: {
			return (97 + random.nextInt(26)); // Números random entre 91 a 122. ASCII (A-Z)
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + num);
		}

	}

	public boolean esFuerte() {
		int mayusc = 0, minusc = 0, num = 0;
		int AsciiCode;

		for (int i = 0; i < this.contrasena.length(); i++) {
			AsciiCode = (int) this.contrasena.charAt(i);

			if (AsciiCode > 47 && AsciiCode < 58) {
				num++;
			} else if (AsciiCode > 64 && AsciiCode < 91) {
				mayusc++;
			} else if (AsciiCode > 96 && AsciiCode < 123) {
				minusc++;
			}
		}

		if (mayusc > 2 && minusc > 1 && num > 5) {
			return true;
		} else {
			return false;
		}

	}
}