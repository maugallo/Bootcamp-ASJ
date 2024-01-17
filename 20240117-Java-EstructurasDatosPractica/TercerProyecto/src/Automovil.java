
public class Automovil {
	
	private int ruedas;
	private String marca;
	private String modelo;
	
	//Constructor vacío.
	public Automovil() {
		
	}
	
	//Constructor lleno.
	public Automovil(int ruedas, String marca, String modelo) {
		super();
		this.ruedas = ruedas;
		this.marca = marca;
		this.modelo = modelo;
	}
	
	//Getters y Setters.
	public int getRuedas() {
		return this.ruedas;
	}
	
	public void setRuedas(int ruedas) {
		this.ruedas = ruedas;
	}
	
	public String getMarca() {
		return this.marca;
	}
	
	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public String getModelo() {
		return this.modelo;
	}
	
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public void imprimirMensaje() {
		System.out.println("Hola, soy un automóvil!");
	}
	
}
