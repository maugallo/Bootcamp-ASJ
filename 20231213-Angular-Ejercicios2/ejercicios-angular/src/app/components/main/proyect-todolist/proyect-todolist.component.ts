import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect-todolist',
  templateUrl: './proyect-todolist.component.html',
  styleUrl: './proyect-todolist.component.css'
})
export class ProyectTodolistComponent {
  
  tarea = "";

  arrayTareas: string[] = [];
  arrayCheckbox: boolean[] = [];

  //El array de tareas y de su respectivo checkbox trabajan a la par.
  agregarTarea(){
    this.arrayTareas.push(this.tarea);
    this.arrayCheckbox.push(false);
    this.tarea = "";
  }

  //Si la casilla no esta marcada, se pasa a true para marcarla, y viceversa.
  marcarCasilla(i: number){
    if (this.arrayCheckbox[i] === false){
      this.arrayCheckbox[i] = true;
    } else{
      this.arrayCheckbox[i] = false;
    }
  }

  eliminarTarea(i: number){
    this.arrayTareas.splice(i, 1);
    this.arrayCheckbox.splice(i, 1);
  }
}