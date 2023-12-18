import { Component, OnInit } from '@angular/core';
import { ApiRickandmortyService } from '../../../services/api-rickandmorty.service';

@Component({
  selector: 'app-proyect-rickandmorty',
  templateUrl: './proyect-rickandmorty.component.html',
  styleUrl: './proyect-rickandmorty.component.css'
})
export class ProyectRickandmortyComponent implements OnInit {
  arrayCharacters: any = [];

  constructor(public apiServicio: ApiRickandmortyService){}

  ngOnInit(): void {
    this.apiServicio.getCharacters.subscribe((data: any) =>{
      this.arrayCharacters = data.results;
    });
  }
}
