import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiRickandmortyService {

  constructor(private http: HttpClient) { }

  get getCharacters(){
    return this.http.get("https://rickandmortyapi.com/api/character/?page=1");
  }

  getCharacter(id: string){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
