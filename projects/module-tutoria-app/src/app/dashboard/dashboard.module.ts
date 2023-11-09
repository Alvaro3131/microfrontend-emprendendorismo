import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dashboard.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { RegistrarAsistenciaComponent } from './teacher/modules/asistencia/pages/registrar-asistencia/registrar-asistencia.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DahsboardComponent, ListActivitiesComponent, RegistrarAsistenciaComponent], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
