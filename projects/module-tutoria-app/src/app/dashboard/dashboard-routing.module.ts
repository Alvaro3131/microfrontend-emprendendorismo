import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dashboard.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { RegistrarAsistenciaComponent } from './components/registrar-asistencia/registrar-asistencia.component';

const routes: Routes = [
  {path:'', component:DahsboardComponent, children:[
    {path:'', redirectTo:'activities', pathMatch: 'full'},
    { path:'activities', component:ListActivitiesComponent },
    {path: 'registrar-asistencia', component:RegistrarAsistenciaComponent}

    /*
    {path:'activities', component:ListActivitiesComponent, children: [
      {path: 'registrar-asistencia', component:RegistrarAsistenciaComponent}
    ]}
    */

  ] }


  /* Rutas del teacher*/
,{
  path:'teacher',
 loadChildren: () => import('../dashboard/teacher/teacher.module').then(m => m.TeacherModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
