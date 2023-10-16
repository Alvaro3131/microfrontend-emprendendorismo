import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'asistencia',
    loadChildren:() => import('../asistencia/asistencia.module').then(m => m.AsistenciaModule),
  },
  {
    path:'**',
    redirectTo:'asistencia'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
