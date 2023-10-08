import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-student',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './header-student.component.html',
  styleUrls: ['./header-student.component.scss'],
})
export class HeaderStudentComponent {


}
