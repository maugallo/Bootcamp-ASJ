import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ProyectTodolistComponent } from './components/main/proyect-todolist/proyect-todolist.component';
import { ProyectSimpsonsComponent } from './components/main/proyect-simpsons/proyect-simpsons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'proyects/to-do-list', component: ProyectTodolistComponent},
  { path: 'proyects/simpsons', component: ProyectSimpsonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
