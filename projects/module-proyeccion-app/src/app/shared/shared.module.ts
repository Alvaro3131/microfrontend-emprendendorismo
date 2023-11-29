import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHoursComponent } from './chart-hours/chart-hours.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    ChartHoursComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChartHoursComponent,
    BannerComponent
  ]
})
export class SharedModule { }
