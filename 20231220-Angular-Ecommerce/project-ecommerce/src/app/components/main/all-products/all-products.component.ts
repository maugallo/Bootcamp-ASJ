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
  allProducts: Product[] = [];
  filterName: string = "";
  filterMinPrice!: number | undefined;
  filterMaxPrice!: number | undefined;

  constructor(public apiService: EcommerceServiceService){}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) =>{
      this.products = data;
      this.allProducts = data;
    });
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

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
}
