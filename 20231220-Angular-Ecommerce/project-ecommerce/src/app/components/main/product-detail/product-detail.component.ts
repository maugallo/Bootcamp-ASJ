import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/products';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  idProduct!: number;

  constructor(public apiService: EcommerceServiceService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) =>{
      this.idProduct = params.get('idProduct')!;
      this.apiService.getProduct(this.idProduct).subscribe(
        (data)=>{
          this.product = data;
        }
      )
    })
  }

  changeImage(event: Event): void {
    const imagen = event.target as HTMLImageElement;
    imagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png';
  }

  addToCart(){
    this.apiService.addProductToCart(this.idProduct); //Agregamos un producto al localStorage del carrito.

    this.apiService.updateCartCount(); //Actualizamos la cantidad de productos en el carrito que el BehaviourSubject leerá, pasando por parámetro la cantidad de carritos contados.

    alert(`${this.product.title} agregado al carrito!`);

    this.router.navigate([""]);
  }
}
