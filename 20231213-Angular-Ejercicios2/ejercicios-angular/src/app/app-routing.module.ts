import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ProyectTodolistComponent } from './components/main/proyect-todolist/proyect-todolist.component';
import { ProyectSimpsonsComponent } from './components/main/proyect-simpsons/proyect-simpsons.component';
import { ProyectRickandmortyComponent } from './components/main/proyect-rickandmorty/proyect-rickandmorty.component';
import { CharacterComponent } from './components/main/proyect-rickandmorty/character/character.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'proyects/to-do-list', component: ProyectTodolistComponent},
  { path: 'proyects/simpsons', component: ProyectSimpsonsComponent},
  { path: 'proyects/rick-and-morty',
  children:[
    { path: '', component: ProyectRickandmortyComponent},
    { path: ':id', component: CharacterComponent},
  ]},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
