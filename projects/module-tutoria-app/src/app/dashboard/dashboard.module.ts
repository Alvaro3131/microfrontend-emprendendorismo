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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditTutorComponent } from './components/modals/edit-tutor/edit-tutor.component';
import { EditPsicologoComponent } from './components/modals/edit-psicologo/edit-psicologo.component';
import { EditAsesorEspiritualComponent } from './components/modals/edit-asesor-espiritual/edit-asesor-espiritual.component';


@NgModule({
  declarations: [DahsboardComponent, RegistrarAsistenciaComponent, TutoriaComponent, AddPsicologoComponent, AddAsesorEspiritualComponent, AddClassmateComponent, AddTutorComponent, EditTutorComponent, EditPsicologoComponent, EditAsesorEspiritualComponent], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DashboardModule { }
