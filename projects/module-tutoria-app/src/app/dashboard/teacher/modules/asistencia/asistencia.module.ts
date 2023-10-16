import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { SharedModule } from 'projects/module-tutoria-app/src/app/shared/shared.module';


@NgModule({
  declarations: [
    AsistenciaComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    SharedModule
  ]
})
export class AsistenciaModule { }
