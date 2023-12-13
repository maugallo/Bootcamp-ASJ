import { Component } from '@angular/core';

@Component({
  selector: 'componente-secundario',
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.css'
})
//Esto es una clase, por ende le podemos armar atributos y métodos.
export class SecundarioComponent {
  texto = "Este es un texto secundario";
}
