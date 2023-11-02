import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { VinculacionPanelComponent } from './vinculacion-panel/vinculacion-panel.component';
import { StudentComponent } from './student.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import { TutorshipsComponent } from './tutorships/tutorships.component';

const routes: Routes = [
  {
    path:'', component: StudentComponent,children: [
      { path: '', component: InfoStudentComponent},
      { path: 'tutoria', component: TutorshipsComponent},
      {
        path: 'vinculacion', component: VinculacionPanelComponent
      },
    ]
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
