import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { Product } from '../../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(public apiService: EcommerceServiceService){}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) =>{
      this.products = data;
    });
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }
}
