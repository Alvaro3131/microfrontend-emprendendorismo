import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-student',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './header-student.component.html',
  styleUrls: ['./header-student.component.scss'],
})
export class HeaderStudentComponent {

  constructor(private router:Router){}

  navigateToVinculacion(){
    this.router.navigate(['./dashboard/student/vinculacion']);
  }
}
