import { Component } from '@angular/core';

@Component({
  selector: 'componente-secundario',
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.css'
})
export class SecundarioComponent {
  texto = "Este es un texto secundario";
}
