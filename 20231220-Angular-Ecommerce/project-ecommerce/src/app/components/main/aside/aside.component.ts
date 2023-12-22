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

  //Input de filtros:
  activeCategory: number= -1;
  name!: string | null;
  price!: number | undefined;
  minPrice!: number | undefined;
  maxPrice!: number | undefined;
  categories:Category[] = [];

  //Texto que concatenará varios filtros (o uno):
  filterText: string = ""
  msgError: string = "";

  constructor(public apiService: EcommerceServiceService, private route: Router) { }

  ngOnInit(): void {
      this.loadSelectCategories(); //Cargar las categories en el select.
  }

  filter() {

    this.route.navigate(['filter'],
      { queryParams: {title: this.name, price_min: this.minPrice, price_max: this.maxPrice, categoryId: (this.activeCategory == -1) ? null : this.activeCategory}}
      ); // ---> /filter/?title=this.name?price_min=this.minPrice?price_max=this.maxPrice?categoryId=this.activeCategory
  }

  clear() {
    this.name = null;
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

  loadSelectCategories(){
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }
}
