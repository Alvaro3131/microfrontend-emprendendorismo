import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DahsboardComponent } from './dahsboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DahsboardComponent],
  exports: [DahsboardComponent],
})
export class DahsboardModule {}
