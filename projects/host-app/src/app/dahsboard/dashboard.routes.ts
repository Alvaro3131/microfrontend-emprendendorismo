import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  {path:'student',loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  {path:'teacher',component:TeacherComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
