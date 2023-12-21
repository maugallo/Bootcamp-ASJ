import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { Product } from '../../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { max } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];
  minPrice!: number;
  maxPrice!: number;
  title!: string;
  filterText: string = "";
  noProducts: boolean = false;

  constructor(public apiService: EcommerceServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.minPrice = params.get('min')!;
      this.maxPrice = params.get('max')!;
      this.title = params.get('title')!;
      if (this.title !== null) {
        this.apiService.filterByTitle(this.title).subscribe((data) => {
          this.products = data;
          this.filterText = ` > ${this.title}`;
          //Validar si existen o no productos.
          this.noProducts = this.products.length === 0;
        }
        )
      } else if (this.minPrice != null && this.maxPrice != null) {
        this.apiService.filterByPrice(this.minPrice, this.maxPrice).subscribe((data) => {
            this.products = data;
            this.filterText = ` > de $${this.minPrice} a $${this.maxPrice}`
            //Validar si existen o no productos.
            this.noProducts = this.products.length === 0;
          }
        )
      } else {
        this.apiService.getProducts().subscribe((data) => {
            this.products = data;
            //Validar si existen o no productos.
            this.noProducts = this.products.length === 0;
          }
        )
      }
    })
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

  /*
  clear(){
    this.filterName = "";
    this.filterMinPrice = undefined;
    this.filterMaxPrice = undefined;
  }

  filter(){
    if(this.filterMinPrice != undefined && this.filterMaxPrice != undefined){
      this.products = this.allProducts.filter((product) => product.price >= Number(this.filterMinPrice) && product.price <= Number(this.filterMaxPrice));
      if (!this.isWhiteSpace(this.filterName)){
        this.products = this.products.filter((product) => product.title.toLowerCase().startsWith(this.filterName.toLowerCase()));
      }
      //Return true;
    } else{
      if (!this.isWhiteSpace(this.filterName)){
        this.products = this.allProducts.filter((product) => product.title.toLowerCase().startsWith(this.filterName.toLowerCase()));
        //Return true;
      } else{
        this.products = this.allProducts; //Return false;
      }
    }
  }

  isWhiteSpace(text: string){
    if (text.trim().length === 0){
      return true;
    } else{
      return false;
    }
  }
  */
}
