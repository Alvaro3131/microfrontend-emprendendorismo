import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { RegistrarAsistenciaComponent } from './pages/registrar-asistencia/registrar-asistencia.component';

const routes: Routes = [
  {
    path:'',
    component:AsistenciaComponent,
    outlet:'teacher',
    children: [
      {
        path: 'registrar-asistencia',
        component:RegistrarAsistenciaComponent,
        outlet: 'teacher'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }
