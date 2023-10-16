import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dashboard.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { RegistrarAsistenciaComponent } from './components/registrar-asistencia/registrar-asistencia.component';


@NgModule({
  declarations: [DahsboardComponent, ListActivitiesComponent, RegistrarAsistenciaComponent], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
