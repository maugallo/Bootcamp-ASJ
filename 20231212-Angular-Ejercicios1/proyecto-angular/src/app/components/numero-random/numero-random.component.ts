import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numero-random.component.html',
  styleUrl: './numero-random.component.css'
})
export class NumeroRandomComponent {
  numRandom = 0;
  numMas = 0;
  numMenos = 0;

  arrayObjetos = [{nombre: "Mauro", apellido: "Gallo"}, {nombre:"Santiago", apellido: "Gallo"}, {nombre: "Andrés", apellido: "Gallo"}, {nombre: "Verónica", apellido: "Kuhn"}];

  numeroRandom(){
    this.numRandom = Math.floor(Math.random() * 10 + 1);
  }

  numeroMas(){
    this.numMas++;
  }

  numeroMenos(){
    this.numMenos--;
  }
}
