import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { ProyectTodolistComponent } from './components/main/proyect-todolist/proyect-todolist.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectSimpsonsComponent } from './components/main/proyect-simpsons/proyect-simpsons.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProyectRickandmortyComponent } from './components/main/proyect-rickandmorty/proyect-rickandmorty.component';
import { CharacterComponent } from './components/main/proyect-rickandmorty/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { NumerosPrimosPipe } from './pipes/numeros-primos.pipe';
import { ProyectPipeComponent } from './components/main/proyect-pipe/proyect-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    ProyectTodolistComponent,
    FooterComponent,
    ProyectSimpsonsComponent,
    HomeComponent,
    ProyectRickandmortyComponent,
    CharacterComponent,
    NumerosPrimosPipe,
    ProyectPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
