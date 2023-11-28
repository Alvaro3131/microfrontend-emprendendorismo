import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path:'student',loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  {path:'teacher',loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)},
  {path:'event', component:EventsComponent}, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
