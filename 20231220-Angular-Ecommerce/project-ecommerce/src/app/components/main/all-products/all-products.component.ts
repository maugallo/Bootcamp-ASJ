import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { Product } from '../../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];

  //Variables de ruteo:
  title!: string;
  price!: number;
  minPrice!: number;
  maxPrice!: number;
  categoryId!: number;
  categoryName!: string;

  //Texto que indica en dónde está parado el usuario:
  filterText!: string;

  //Variable para avisar que no se encontraron productos:
  noProducts: boolean = false;

  constructor(public apiService: EcommerceServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      const title = params.get('title');
      const priceMin = params.get('price_min');
      const priceMax = params.get('price_max');
      const categoryId = params.get('categoryId');

      let urlText = '';

      if (title) {
        urlText += `title=${title}&`;
      }
      if (priceMin) {
        urlText += `price_min=${priceMin}&`;
      }
      if (priceMax) {
        urlText += `price_max=${priceMax}&`;
      }
      if (categoryId) {
        urlText += `categoryId=${categoryId}&`;
      }

      // Remover el último '&' si existe
      urlText = urlText.endsWith('&') ? urlText.slice(0, -1) : urlText;
      
      if (urlText != '') {
        this.apiService.filter(urlText).subscribe((data) => {
          this.products = data;
        });
      } else{
        this.apiService.getAllProducts().subscribe((data) => {
          this.products = data;
        });
      }
    });
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

  areProductsAvailable() {
    return this.products.length === 0;
  }
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

