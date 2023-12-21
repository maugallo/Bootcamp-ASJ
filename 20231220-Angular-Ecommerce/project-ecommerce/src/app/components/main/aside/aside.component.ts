import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  name!: string;
  minPrice!: number | undefined;
  maxPrice!: number | undefined;

  constructor(private route: Router){}

  filter(){
    if (this.name != null && this.name != ""){
      this.route.navigate([`/filter/title/${this.name}`]);
    } else if (this.validatePrices()){
      this.route.navigate([`/filter/price_range/${this.minPrice}/${this.maxPrice}`]);
    } else{
      this.mostrarToast();
    }
  }

  clear(){
    this.name = "";
    this.minPrice = undefined;
    this.maxPrice = undefined;
  }

  mostrarToast(){
    const toastEl = document.getElementById('toastMsg');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }

  validatePrices(){
    let rta = false;

    if(this.minPrice!=undefined && this.maxPrice!=undefined){
      if(this.minPrice > 0 && this.maxPrice > 0 && this.minPrice <= this.maxPrice){
        rta = true;
      }
    }
    return rta;
  }
}
