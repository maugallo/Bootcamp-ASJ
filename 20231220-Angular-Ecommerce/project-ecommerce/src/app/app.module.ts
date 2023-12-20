import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AllProductsComponent } from './components/main/all-products/all-products.component';
import { ProductDetailComponent } from './components/main/product-detail/product-detail.component';
import { CategoryProductsComponent } from './components/main/category-products/category-products.component';
import { CartComponent } from './components/main/cart/cart.component';
import { EcommerceServiceService } from './services/ecommerce-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AllProductsComponent,
    ProductDetailComponent,
    CategoryProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EcommerceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
