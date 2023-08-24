import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeacherComponent } from './teacher.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TeacherComponent],
  exports: [TeacherComponent],
})
export class TeacherModule {}
