import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { EcommerceServiceService } from '../../services/ecommerce-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  categories:Category[] = [];

  constructor(public apiService: EcommerceServiceService){}

  ngOnInit(): void {
    console.log("EJecutando on init...");
      this.apiService.getCategories().subscribe((data) =>{
        this.categories = data;
        
      });
  }
}
