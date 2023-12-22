import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../models/category';
import { EcommerceServiceService } from '../../../services/ecommerce-service.service';

declare var bootstrap: any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {
  name!: string;
  minPrice!: number | undefined;
  maxPrice!: number | undefined;
  price!: number | undefined;
  msgError: string = "";
  categories:Category[] = [];
  activeCategory!: Category;

  constructor(public apiService: EcommerceServiceService, private route: Router) { }

  ngOnInit(): void {
      this.apiService.getCategories().subscribe((data) => {
        this.categories = data;
      })
  }

  filter() {
    if (this.name != null && this.name != "") {
      this.route.navigate([`/filter/title/${this.name}`]);
    } else if (this.price != undefined) {
      if (this.price < 0) {
        this.msgError = "El precio debe ser mayor a 0";
        this.mostrarToast();
      }
      this.route.navigate([`/filter/price/${this.price}`]);
    } else if (this.validatePrices()) {
      this.route.navigate([`/filter/price_range/${this.minPrice}/${this.maxPrice}`]);
    } else{
      this.mostrarToast();
    }
  }

  clear() {
    this.name = "";
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.price = undefined;
  }

  mostrarToast() {
    const toastEl = document.getElementById('toastMsg');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }

  validatePrices() {
    let rta = true;

    if (this.minPrice === undefined || this.maxPrice === undefined) {
      rta = false;
    }
    else if (this.minPrice <= 0 || this.maxPrice <= 0 || this.minPrice > this.maxPrice) {
      rta = false;
    }

    if (rta === false) {
      this.msgError = "Debe escribir valores validos";
      this.mostrarToast();
    }

    return rta;
  }
}
