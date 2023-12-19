import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  URL_API = "https://reqres.in/api/users";

  user: Usuario = { id: 0, nombre: '', trabajo: '' }

  //public para que sea accedido fuera de la clase.
  public getUsers(): Observable<any> { //Retornará un observable, al cual hay que suscribirse.
    return this.http.get(this.URL_API);
  }

  public createUser(usuario: any): Observable<any> { //Retornará un observable, al cual hay que suscribirse.
    return this.http.post(this.URL_API, usuario);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  public updateUser(usuario: any): Observable<any> {
    return this.http.put(`${this.URL_API}/${this.user.id}`, usuario);
  }
}
