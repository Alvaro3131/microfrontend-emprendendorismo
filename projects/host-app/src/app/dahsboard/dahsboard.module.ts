import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DahsboardComponent } from './dahsboard.component';
import { DashboardRoutingModule } from './dashboard.routes';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DahsboardComponent, EventsComponent],
  exports: [DahsboardComponent],
})
export class DahsboardModule {}
