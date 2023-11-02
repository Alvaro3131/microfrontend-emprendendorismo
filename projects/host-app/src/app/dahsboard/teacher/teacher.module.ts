import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { HeaderTeacherComponent } from './header-teacher/header-teacher.component';
import { ProyeccionComponent } from './modules/proyeccion/proyeccion.component';
import { TutoriaComponent } from './modules/tutoria/tutoria.component';

@NgModule({
  imports: [CommonModule,TeacherRoutingModule],
  declarations: [TeacherComponent, HeaderTeacherComponent, ProyeccionComponent, TutoriaComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TeacherModule {}
