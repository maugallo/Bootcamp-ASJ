import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { EcommerceServiceService } from '../../services/ecommerce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  categories:Category[] = [];
  countCart!: number;

  constructor(public apiService: EcommerceServiceService, private route: Router){}

  ngOnInit(): void {
      this.apiService.getCartCount().subscribe((data) => { //Se suscribe al BehaviourSubject que observa la cantidad de productos del carrito. De esta forma ante un nuevo cambio, renderizará ese cambio en el HTML, sin importar que el valor se encuentre en otro componente.
        this.countCart = data;
      });
      if (this.countCart === null) this.countCart = 0;
  }
}
