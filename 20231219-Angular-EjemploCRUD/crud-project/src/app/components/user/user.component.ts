import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  usuarios: any[] = [];
  

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.usuarios = data.data;
    })
  }

  createUser(form: NgForm) {
    if (form.value.id === 0 || form.value.id === null) {
      this.userService.createUser(form.value).subscribe((data) => {
        console.log("Respuesta del servidor al crear:");
        console.log(data);
        //Vuelvo a renderizar la tabla, para mostrar los nuevos elementos.
        this.listUsers();
        //Limpio los inputs.
        this.resetForm(form);
      });
    } else {
      this.userService.updateUser(form.value).subscribe((data) => {
        console.log("Respuesta del servidor al editar:");
        console.log(data);
        //Vuelvo a renderizar la tabla, para mostrar los nuevos elementos.
        this.listUsers();
        //Limpio los inputs.
        this.resetForm(form);
      });
    }
  }

  deleteUser(id: number) {
    let confirmacion = confirm(`¿Deseas eliminar el usuario con ID ${id}?`)
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe((data) => {
        //Vuelvo a renderizar la tabla, para mostrar los elementos. La razón por la que está acá dentro es para asegurarse de que la llamada a la API funcionó y salió todo ok, si lo pusiera afuera, si la llamada se demora su tiempo se ejecutaría el this.listUsers() antes.
        console.log(data);
        this.listUsers();
      });
    }
  }

  updateUser(usuario: any) {
    //Seteamos dentro del form, los datos del usuario.
    this.userService.user = { id: usuario.id, nombre: usuario.first_name, trabajo: "Modelo" }
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
