import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router){}

  //Método para que la sidebar se esconda cuando vamos al carrito o al detalle del producto:
  showAside(){
    if (this.router.url !== '/cart' && !this.router.url.startsWith('/detail')){
      return true;
    } else{
      return false;
    }
  }
}
