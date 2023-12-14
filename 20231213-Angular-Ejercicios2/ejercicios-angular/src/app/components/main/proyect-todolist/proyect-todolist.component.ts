import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect-todolist',
  templateUrl: './proyect-todolist.component.html',
  styleUrl: './proyect-todolist.component.css'
})
export class ProyectTodolistComponent {
  
  nombreTarea!: string;
  codigoTarea: number = 1;
  tarea!: Tarea;
  fecha: Date = new Date();

  arrayMostrar: Tarea[] = [];
  arrayTodas: Tarea[] = [];
  arrayEliminados: Tarea[] = [];

  //El array de tareas y de su respectivo checkbox trabajan a la par.
  agregarTarea(){
    this.tarea = {nombre: this.nombreTarea, checkbox: false, codigo: this.codigoTarea};
    this.codigoTarea++;
    this.arrayTodas.push(this.tarea);
    this.arrayMostrar = JSON.parse(JSON.stringify(this.arrayTodas));
    this.nombreTarea = "";
  }

  //Si la casilla no esta marcada, se pasa a true para marcarla, y viceversa.
  marcarCasilla(i: number){
    if (this.arrayMostrar[i].checkbox === false){
      this.arrayMostrar[i].checkbox = true;
      this.arrayTodas.map((tarea) => { if (tarea.codigo === this.arrayMostrar[i].codigo) tarea.checkbox = true; })
    } else{
      this.arrayMostrar[i].checkbox = false;
      this.arrayTodas.map((tarea) => { if (tarea.codigo === this.arrayMostrar[i].codigo) tarea.checkbox = false; })
    }
  }

  eliminarTarea(i: number){
    //Guardo en el array en eliminados:
    this.arrayEliminados.push(this.arrayMostrar[i]);
    //Busco el index del objeto dentro del array de todas las tareas, y una vez encontrado lo elimino.
    let index = this.arrayTodas.findIndex((tarea) => {
      if (tarea.codigo == this.arrayMostrar[i].codigo) { return true} else{ return false } 
      });
    this.arrayTodas.splice(index, 1);
    //Elimino el objeto también del arrayMostrar.
    this.arrayMostrar.splice(i, 1);
  }

  filtrarLista(filtro: string){
    this.arrayMostrar = [];
    switch (filtro){
      case "todas":
        this.arrayMostrar = JSON.parse(JSON.stringify(this.arrayTodas));
        break;

      case "pendientes":
        this.arrayMostrar =  this.arrayTodas.filter(tarea => tarea.checkbox === false);
        break;
        
      case "completadas":
        this.arrayMostrar = this.arrayTodas.filter(tarea => tarea.checkbox != false);
      break;

      case "eliminadas":
        this.arrayMostrar = JSON.parse(JSON.stringify(this.arrayEliminados));
      break;
    }
  }
}

export interface Tarea{
  nombre: string;
  checkbox: boolean;
  codigo: number;
}