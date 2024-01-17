
public class Calculo {

	private double num1;
	private double num2;

	public Calculo(double num1, double num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	public double Suma() {
		return this.num1 + this.num2;
	}

	public double Resta() {
		return this.num1 - this.num2;
	}

	public double Multiplicacion() {
		return this.num1 * this.num2;
	}

	public double Division() {
		return this.num1 / this.num2;
	}

}
