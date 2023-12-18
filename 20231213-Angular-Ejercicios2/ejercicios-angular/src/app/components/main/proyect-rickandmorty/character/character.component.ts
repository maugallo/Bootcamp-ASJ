import { Component, OnInit } from '@angular/core';
import { ApiRickandmortyService } from '../../../../services/api-rickandmorty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  character!: any;
  id!: any;

  constructor(public apiServicio: ApiRickandmortyService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id");
      this.apiServicio.getCharacter(this.id).subscribe((data: any) =>{
        this.character = data;
      });
  }
}
