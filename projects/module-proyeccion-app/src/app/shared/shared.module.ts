import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHoursComponent } from './chart-hours/chart-hours.component';



@NgModule({
  declarations: [
    ChartHoursComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChartHoursComponent
  ]
})
export class SharedModule { }
