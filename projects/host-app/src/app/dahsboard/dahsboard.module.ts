import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DahsboardComponent } from './dahsboard.component';
import { DashboardRoutingModule } from './dashboard.routes';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DahsboardComponent],
  exports: [DahsboardComponent],
})
export class DahsboardModule {}
