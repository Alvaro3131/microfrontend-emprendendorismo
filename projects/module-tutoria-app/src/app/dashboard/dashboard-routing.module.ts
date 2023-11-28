import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dashboard.component';
import { RegistrarAsistenciaComponent } from './teacher/modules/asistencia/pages/registrar-asistencia/registrar-asistencia.component';
import { HomeComponent } from './teacher/modules/home/pages/home/home.component';
import { TutoriaComponent } from './teacher/tutoria/tutoria.component';

const routes: Routes = [
  {path:'', component:DahsboardComponent, children:[
    {path:'', redirectTo:'tutorias', pathMatch: 'full'},
    { path:'tutorias', component:TutoriaComponent }
  ] }
  /* Rutas del teacher*/
  ,{
    path:'teacher',
    component:HomeComponent,
    loadChildren: () => import('../dashboard/teacher/modules/home/home.module').then(m => m.HomeModule)},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
