//Clase hija de la clase "Automovil".

public class Camion extends Automovil {
	
	private double cargaMax;

	public Camion(int ruedas, String marca, String modelo, double cargaMax) {
		
		super(ruedas, marca, modelo);
		this.cargaMax = cargaMax;
		
	}

	public double getCargaMax() {
		return cargaMax;
	}

	public void setCargaMax(double cargaMax) {
		this.cargaMax = cargaMax;
	}
	
	public void mostrarAtributos() {
		System.out.println(super.getMarca()); //Llamo al método que usó el padre.
	}
}
