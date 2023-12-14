import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect-simpsons',
  templateUrl: './proyect-simpsons.component.html',
  styleUrl: './proyect-simpsons.component.css'
})
export class ProyectSimpsonsComponent {
  txtNombre: string  = "";;
  txtImg: string  = "";;
  txtProfesion: string  = "";;

  simpson!: Simpson;
  arraySimpson: Simpson[] = [];

  agregarSimpson(){
    this.simpson = {nombre: this.txtNombre, imagen: this.txtImg, profesion: this.txtProfesion};
    this.arraySimpson.push(this.simpson);
    this.txtNombre = "";
    this.txtImg = "";
    this.txtProfesion = "";
  }

  camposVacios(){
    if (this.txtNombre != "" && this.txtImg != "" && this.txtProfesion != ""){
      return false;
    } else{
      return true;
    }
  }
}

export interface Simpson{
  nombre: String;
  imagen: String;
  profesion: String;
}