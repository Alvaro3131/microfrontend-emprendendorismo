import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { VinculacionPanelComponent } from './vinculacion-panel/vinculacion-panel.component';

const routes: Routes = [
  {
    path:'', component: MainPanelComponent
  },
  {
    path: 'vinculacion', component: VinculacionPanelComponent
  },
  {
    path:'**', redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
