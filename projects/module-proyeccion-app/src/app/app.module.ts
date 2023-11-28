import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AddProyeccionModalComponent } from './components/add-proyeccion-modal/add-proyeccion-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    AddProyeccionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
