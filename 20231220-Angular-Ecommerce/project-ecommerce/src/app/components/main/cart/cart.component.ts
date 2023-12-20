import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { Product } from '../../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  total:number=0;


  constructor(public apiService: EcommerceServiceService, private router: Router){}

  ngOnInit(): void {
    let cart = this.apiService.getProductsOfCart();
    this.initCart(cart);
  }

  initCart(cart: number[]){
    for (let id of cart){
      this.apiService.getProduct(id).subscribe((data) =>{
        this.products.push(data);
        this.total+=data.price;
      });
    }
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

  buyCart(){
    //llamar al servicio para comprar carrito
    this.apiService.buyCart();

    //alert que se compro el carrito
    alert("¡Gracias por tu compra!");

    //redirigir a pagina principal
    this.router.navigate([""]);
  }

  isCartEmpty(){
    if (this.apiService.getProductsOfCart().length === 0){
      return true;
    } else{
      return false;
    }
  }
}
