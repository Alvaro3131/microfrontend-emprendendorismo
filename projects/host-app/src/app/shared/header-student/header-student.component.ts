import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() name:string='';
  constructor(private router:Router){}

  navigateToVinculacion(){
    this.router.navigate(['./dashboard/student/vinculacion']);
  }
}
