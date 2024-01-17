import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class Coleccion {

	private String nombreColeccion;
	private ArrayList<Figura> listaFiguras;
	
	public Coleccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}
	
	public void anadirFigura(Figura figura) {
		this.listaFiguras.add(figura);
	}
	
	public void subirPrecio(double cantidad, String codigo) {
		ListIterator<Figura> iterator = this.listaFiguras.listIterator();
		boolean flag = true;
		while (iterator.hasNext() && flag) {
			Figura figura = iterator.next();
			if (figura.getCodigo().equals(codigo)) {
				figura.subirPrecio(cantidad);
				iterator.set(figura);
				flag = false;
			}
		}
	}
	
	public String conCapa() {
		String superHeroesConCapa = "";
		for (Figura figura : listaFiguras) {
			if (figura.getSuperheroe().isCapa()) {
				superHeroesConCapa += figura.toString() + "\n";
			}
		}
		
		return superHeroesConCapa;
	}
	
	public Figura masValiosa() {
		Figura figuraValiosa = null;
		double precio = 0;
		
		for (Figura figura : listaFiguras) {
			if (figura.getPrecio() > precio) {
				figuraValiosa = figura;
				precio = figura.getPrecio();
			}
		}
		
		return figuraValiosa;
	}
	
	public double getValorColeccion() {
		double total = 0;
		
		for (Figura figura : listaFiguras) {
			total += figura.getPrecio();
		}
		
		return total;
	}
	
	public double getVolumenColeccion() {
		double total = 0;
		
		for (Figura figura : listaFiguras) {
			total += figura.getDimension().getVolumen();
		}
		total += 200;
		
		return total;
	}

	@Override
	public String toString() {
		String text = "Coleccion: " + this.nombreColeccion + "\n";
		for (Figura figura : listaFiguras) {
			text += figura.toString() + "]\n";
		}
		
		return text;
	}
	
}
