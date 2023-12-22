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
    this.route.paramMap.subscribe((params: any) => {
      this.title = params.get('title')!;
      this.price = params.get('price')!;
      this.minPrice = params.get('min')!;
      this.maxPrice = params.get('max')!;
      this.categoryId = params.get('idCategory')!;
      this.categoryName = params.get('nameCategory')!;

      //Verificar si hay algún valor en los filtros (por ahora por separado):
      if (this.title != null) {
        this.apiService.filterByTitle(this.title).subscribe((data) => {
          this.products = data;
          //Método para avisar si hay o no productos:
          this.noProducts = this.areProductsAvailable();

          this.filterText = "Producto > " + this.title;
        });
      } else if (this.price != null) {
        this.apiService.filterByPrice(this.price).subscribe((data) => {
          this.products = data;
          //Método para avisar si hay o no productos:
          this.noProducts = this.areProductsAvailable();
          this.filterText = "Productos > $" + this.price;
        });
      } else if (this.minPrice != null && this.maxPrice != null) {
        this.apiService.filterByPriceRange(this.minPrice, this.maxPrice).subscribe((data) => {
          this.products = data;
          //Método para avisar si hay o no productos:
          this.noProducts = this.areProductsAvailable();
          this.filterText = "Productos > Entre $" + this.minPrice + " y $" + this.maxPrice;
        });
      } else if (this.categoryId) {
        this.apiService.filterByCategory(this.categoryId).subscribe((data) => {
          this.products = data;
          //Método para avisar si hay o no productos:
          this.noProducts = this.areProductsAvailable();
          this.filterText = "Categoría > " + this.categoryName;
        });
      } else {
        //Si ningún valor de los filtros se recibió, se muestran todos:
        this.apiService.getAllProducts().subscribe((data) => {
          this.products = data;
          this.filterText = "Mostrando todos los productos";
          //Método para avisar si hay o no productos:
          this.noProducts = this.areProductsAvailable();
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

