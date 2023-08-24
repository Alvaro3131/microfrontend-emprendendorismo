import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentComponent } from './student.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StudentComponent],
  exports: [StudentComponent],
})
export class StudentModule {}
