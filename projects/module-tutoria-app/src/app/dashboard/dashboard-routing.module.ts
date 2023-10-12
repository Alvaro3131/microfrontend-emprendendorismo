import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dashboard.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';

const routes: Routes = [
  {path:'', component:DahsboardComponent, children:[
    {path:'', redirectTo:'activities', pathMatch: 'full'},
    {path:'activities', component:ListActivitiesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
