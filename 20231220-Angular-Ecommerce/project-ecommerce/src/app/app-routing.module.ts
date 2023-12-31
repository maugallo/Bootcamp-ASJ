import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/main/all-products/all-products.component';
import { CartComponent } from './components/main/cart/cart.component';
import { ProductDetailComponent } from './components/main/product-detail/product-detail.component';

const routes: Routes = [
  { path:'', component: AllProductsComponent},
  { path: 'filter', component: AllProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'detail/:nameProduct/:idProduct', component: ProductDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }