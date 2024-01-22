import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../../models/tarea';
import { TodolistService } from '../../../services/todolist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyect-todolist',
  templateUrl: './proyect-todolist.component.html',
  styleUrl: './proyect-todolist.component.css'
})
export class ProyectTodolistComponent implements OnInit {
  
  inputTarea: string = "";
  selectedCategory: string = "todas";
  fecha: Date = new Date();

  arrayTareas: Tarea[] = [];
  tarea!: Tarea;

  constructor(public todoListService: TodolistService) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(categoria = "todas"){
    this.todoListService.getTasks().subscribe((data) => {
      if (categoria !== "todas"){
        this.arrayTareas = data.filter((tarea) => tarea.estado === categoria);
      } else {
        this.arrayTareas = data.filter((tarea) => tarea.estado !== "eliminada");
      }
    });
  }

  agregarTarea(){
    this.tarea = {
      id: 0,
      nombre: this.inputTarea,
      checked: false,
      estado: "pendiente"
    }

    this.inputTarea = "";

    this.todoListService.createTask(this.tarea).subscribe((data) => {
      if (data){
        this.cargarTareas();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Tarea agregada correctamente!",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        alert("Ocurrió un error al conectar con la API");
      }
    })
  }

  marcarCasilla(tarea: Tarea){
    if (tarea.checked == false){
      tarea.checked = true;
      tarea.estado = "completada";
    } else {
      tarea.checked = false;
      tarea.estado = "pendiente";
    }

    this.todoListService.updateTask(tarea).subscribe((data) => {
      if (data){
        this.cargarTareas(this.selectedCategory);
      } else {
        alert("Ocurrió un error al conectar con la API");
      }
    });

  }

  deshabilitarTarea(tarea: Tarea){
    tarea.estado = "eliminada";
    tarea.checked = false;

    this.todoListService.disableTask(tarea).subscribe((data) => {
      if (data){
        this.cargarTareas(this.selectedCategory);
      } else {
        alert("Ocurrió un error al conectar con la API");
      }
    });
  }

  eliminarTarea(id: number){
    Swal.fire({
      title: "Estás seguro que deseas eliminar la tarea?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoListService.deleteTask(id).subscribe((data) => {
          if (data){
            this.cargarTareas(this.selectedCategory);
          } else {
            alert("Ocurrió un error al conectar con la API");
          }
        });
      }
    });
    
  }

  filtrarLista(categoria: string){
    switch (categoria) {
      case "pendientes":
        this.selectedCategory = "pendiente";
        this.cargarTareas("pendiente");
        break;

      case "completadas":
        this.selectedCategory = "completada";
        this.cargarTareas("completada");
        break;

      case "eliminadas":
        this.selectedCategory = "eliminada";
        this.cargarTareas("eliminada");
        break;
    
      default:
        this.selectedCategory = "todas";
        this.cargarTareas();
        break;
    }
  }
}