import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dashboard.component';
import { NewProyeccionComponent } from './new-proyeccion/new-proyeccion.component';
import { ConteinAddProyectoComponent } from './contein-add-proyecto/contein-add-proyecto.component';

const routes: Routes = [
  {path:'', component:DahsboardComponent},
  {path:'new', component: NewProyeccionComponent, children:[
    {
      path:'',
      component: ConteinAddProyectoComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
