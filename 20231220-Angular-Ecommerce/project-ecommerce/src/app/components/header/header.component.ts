import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { EcommerceServiceService } from '../../services/ecommerce-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  categories:Category[] = [];

  constructor(public apiService: EcommerceServiceService, private route: Router){}

  ngOnInit(): void {
      this.apiService.getCategories().subscribe((data) =>{
        this.categories = data;
      });
  }

  activeCategory(name: string, id: number){
    return (this.route.url === `/category/${name}/${id}`);
  }

  activeAll(){
    return (this.route.url === `/`);
  }
}
