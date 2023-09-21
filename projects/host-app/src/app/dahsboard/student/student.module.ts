import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import { HeaderStudentComponent } from '../../shared/header-student/header-student.component';
import { ChartCircleComponent } from '../../shared/chart-circle/chart-circle.component';
import { CardHoursComponent } from './card-hours/card-hours.component';
import { NextProjectionComponent } from './next-projection/next-projection.component';


@NgModule({
  declarations: [
    MainPanelComponent,
    InfoStudentComponent,
    CardHoursComponent,
    NextProjectionComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HeaderStudentComponent,
    ChartCircleComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class StudentModule { }
