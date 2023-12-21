import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { Product } from '../../../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit {
  products: Product[] = [];
  idCategory!: number;
  nameCategory!: string;
  noProducts: boolean = false;

  constructor(public apiService: EcommerceServiceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.idCategory = param.get("idCategory")!;
      this.nameCategory = param.get("nameCategory")!;
      this.apiService.getProductsByCategory(this.idCategory).subscribe((data) =>{
        this.products = data;
        //Validar si existen o no productos.
        this.noProducts = this.products.length === 0;
      });
    });
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }
}
