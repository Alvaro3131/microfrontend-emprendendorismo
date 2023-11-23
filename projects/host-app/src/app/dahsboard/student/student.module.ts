import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import { HeaderStudentComponent } from '../../shared/header-student/header-student.component';
import { ChartCircleComponent } from '../../shared/chart-circle/chart-circle.component';
import { CardHoursComponent } from './card-hours/card-hours.component';
import { NextProjectionComponent } from './next-projection/next-projection.component';
import { VinculacionPanelComponent } from './vinculacion-panel/vinculacion-panel.component';
import { StudentComponent } from './student.component';
import { TutorshipsComponent } from './tutorships/tutorships.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentComponent,
    InfoStudentComponent,
    CardHoursComponent,
    NextProjectionComponent,
    VinculacionPanelComponent,
    TutorshipsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule,
    HeaderStudentComponent,
    ChartCircleComponent,
    NgCircleProgressModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class StudentModule { }
