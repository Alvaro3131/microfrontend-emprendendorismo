import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dashboard.component';
import { RegistrarAsistenciaComponent } from './teacher/modules/asistencia/pages/registrar-asistencia/registrar-asistencia.component';
import { SharedModule } from '../shared/shared.module';
import { TutoriaComponent } from './teacher/tutoria/tutoria.component';
import { AddPsicologoComponent } from './components/modals/add-psicologo/add-psicologo.component';
import { AddAsesorEspiritualComponent } from './components/modals/add-asesor-espiritual/add-asesor-espiritual.component';
import { AddClassmateComponent } from './components/modals/add-classmate/add-classmate.component';
import { AddTutorComponent } from './components/modals/add-tutor/add-tutor.component';


@NgModule({
  declarations: [DahsboardComponent, RegistrarAsistenciaComponent, TutoriaComponent, AddPsicologoComponent, AddAsesorEspiritualComponent, AddClassmateComponent, AddTutorComponent], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
