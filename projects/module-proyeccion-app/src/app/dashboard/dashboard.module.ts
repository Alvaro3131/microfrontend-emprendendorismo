import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dashboard.component';
import { CardViewHoursComponent } from './card-view-hours/card-view-hours.component';
import { PersonsProyeccionComponent } from './persons-proyeccion/persons-proyeccion.component';
import { NextProyectionComponent } from './next-proyection/next-proyection.component';
import { SharedModule } from '../shared/shared.module';
import { NewProyeccionComponent } from './new-proyeccion/new-proyeccion.component';
import { ConteinAddProyectoComponent } from './contein-add-proyecto/contein-add-proyecto.component';


@NgModule({
  declarations: [DahsboardComponent, CardViewHoursComponent, PersonsProyeccionComponent, NextProyectionComponent, NewProyeccionComponent, ConteinAddProyectoComponent,], // declare the component here
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DashboardModule { }
