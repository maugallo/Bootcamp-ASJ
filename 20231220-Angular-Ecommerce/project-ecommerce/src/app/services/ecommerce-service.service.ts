import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {

  URL_API = "https://api.escuelajs.co/api/v1/";

  constructor(private http: HttpClient) { }

  public getCategories():Observable<any>{
    return this.http.get(this.URL_API + "categories");
  }

  public getProducts():Observable<any>{
    return this.http.get(this.URL_API + "products");
  }

  public getProductsByCategory(id: number):Observable<any>{
    return this.http.get<any>(this.URL_API + "products/?categoryId=" + id);
  }

  public getProduct(id: number): Observable<any>{
    return this.http.get(this.URL_API + "products/" + id);
  }

  public addProductToCart(id: number){
    let cart: number[] = this.getProductsOfCart();

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  public getProductsOfCart(){
    const data = localStorage.getItem("cart");
    let cart!: number[];

    if (data === null || data === undefined){
      cart = []
    }else{
      cart = JSON.parse(data);
    }

    return cart;
  }

  public buyCart(){
    localStorage.removeItem("cart");
  }

  
}
