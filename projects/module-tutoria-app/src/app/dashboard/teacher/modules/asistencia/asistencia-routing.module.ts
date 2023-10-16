import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';

const routes: Routes = [
  {
    path:'',
    component:AsistenciaComponent,
    outlet:'teacher'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }
