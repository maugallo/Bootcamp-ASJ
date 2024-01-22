import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private URL_API = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(`${this.URL_API}/task`);
  }

  createTask(tarea: Tarea): Observable<Boolean>{
    return this.http.post<Boolean>(`${this.URL_API}/task`, tarea);
  }

  updateTask(tarea: Tarea): Observable<Boolean>{
    return this.http.put<Boolean>(`${this.URL_API}/task/${tarea.id}`, tarea);
  }

  disableTask(tarea: Tarea): Observable<Boolean>{
    return this.http.put<Boolean>(`${this.URL_API}/task/${tarea.id}`, tarea);
  }

  deleteTask(id: number): Observable<Boolean>{
    return this.http.delete<Boolean>(`${this.URL_API}/task/${id}`);
  }

}
