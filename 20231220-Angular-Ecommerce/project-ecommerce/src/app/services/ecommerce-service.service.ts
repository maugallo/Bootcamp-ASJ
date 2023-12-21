import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, map, min } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {

  private URL_API = "https://api.escuelajs.co/api/v1/";
  private products!: Observable<Product[]>;

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<any>{
    return this.http.get(this.URL_API + "categories");
  }

  public getProducts():Observable<any>{
    this.products = this.http.get<any>(this.URL_API + "products");
    return this.products;
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

  public filterByPrice(priceMin: number, priceMax: number):Observable<any>{
    return this.http.get(this.URL_API + 'products/?price_min=' + priceMin + '&price_max=' + priceMax);
  }

  public filterByTitle(title: string):Observable<any>{
    return this.http.get(this.URL_API + 'products/?title=' + title);
  }
}
