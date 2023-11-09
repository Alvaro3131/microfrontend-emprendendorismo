import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dashboard.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { RegistrarAsistenciaComponent } from './teacher/modules/asistencia/pages/registrar-asistencia/registrar-asistencia.component';
import { HomeComponent } from './teacher/modules/home/pages/home/home.component';

const routes: Routes = [
  {path:'', component:DahsboardComponent, children:[
    {path:'', redirectTo:'activities', pathMatch: 'full'},
    { path:'activities', component:ListActivitiesComponent }
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
