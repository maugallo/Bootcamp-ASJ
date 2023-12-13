import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  flag = true;

  botonPerro(){
    this.flag = true;
  }

  botonGato(){
    this.flag = false;
  }
}
