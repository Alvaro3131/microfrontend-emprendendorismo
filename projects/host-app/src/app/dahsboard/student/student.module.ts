import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import { HeaderStudentComponent } from '../../shared/header-student/header-student.component';
import { ChartCircleComponent } from '../../shared/chart-circle/chart-circle.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MainPanelComponent,
    InfoStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HeaderStudentComponent,
    ChartCircleComponent,
    NgChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class StudentModule { }
