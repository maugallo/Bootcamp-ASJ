import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService{

  private URL_API = 'https://api.escuelajs.co/api/v1/';
  private behaviourSubject = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient) { }

  //Métodos para obtener productos:
  public getAllProducts():Observable<any>{
    return this.http.get(this.URL_API + 'products');
  }

  public getProduct(id: number):Observable<any>{
    return this.http.get(this.URL_API + 'products/'+id);
  }

  //Métodos para obtener todas las categorías:
  public getCategories():Observable<any>{
    return this.http.get(this.URL_API + "categories");
  }

  //Métodos del carrito:
  public updateCartCount(){
    let cart: number[] = this.getProductsOfCart();
    this.behaviourSubject.next(cart.length); //El behaviourSubject avisa con next() a quienes están suscritos que cambió el valor que está observando.
  }

  public getCartCount(){
    return this.behaviourSubject.asObservable(); //El behaviourSubject se transforma en objeto Observable así los componentes pueden suscribirse a él.
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

  public addProductToCart(id: number){
    let cart: number[] = this.getProductsOfCart();

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  public clearCart(){
    localStorage.removeItem("cart");
  }

  //Métodos para filtrar:
  public filter(urlText: string):Observable<any>{
    return this.http.get(this.URL_API + 'products/?' + urlText);
  }

  public filterByTitle(title: string):Observable<any>{
    return this.http.get(this.URL_API + 'products/?title=' + title);
  }

  public filterByPrice(price: number):Observable<any>{
    return this.http.get(this.URL_API + 'products/?price=' + price);
  }

  public filterByPriceRange(priceMin: number, priceMax: number):Observable<any>{
    return this.http.get(this.URL_API + 'products/?price_min=' + priceMin+'&price_max=' + priceMax);
  }

  public filterByCategory(idCategory: number):Observable<any>{
    return this.http.get(this.URL_API + 'products/?categoryId=' + idCategory);
  }
}