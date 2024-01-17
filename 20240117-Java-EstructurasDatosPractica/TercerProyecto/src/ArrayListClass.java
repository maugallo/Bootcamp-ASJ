import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListClass {

	public static void main(String[] args) {
		
		
		
	}
	
	public static void ArrayList() {
		//ArrayList<tipo> {nombreArrayList} = new ArrayList<tipo>();

		ArrayList<String> lista = new ArrayList<String>();
		
		//Se puede colocar también List<String> lista = new ArrayList<String>(); ya que ArrayList hereda de la clase List, por ende se puede usar.
		
		lista.add("objeto String");
		lista.add("objeto String");
		lista.add("objeto String");
		lista.add("objeto String");
		lista.add("objeto String");
		
		//For común:
		for (int i = 0; i < lista.size(); i++) {
			System.out.println(lista.get(i));
		}
		
		//Foreach:
		for (String elemento: lista) {
			System.out.println(elemento);
		}
		
		Iterators(lista);
	}
	
	public static void Iterators(ArrayList<String> lista) {
		//Objeto iterador para una arrayList.
		Iterator<String> iterator = lista.iterator();
		
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}

	
}
