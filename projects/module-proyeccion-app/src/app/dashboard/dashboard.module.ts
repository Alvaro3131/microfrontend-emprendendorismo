import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DahsboardComponent], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
