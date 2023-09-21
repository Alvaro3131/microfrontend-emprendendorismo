import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginTeacher:boolean=false;
  constructor(private router:Router){}

  login(){
    this.router.navigate(['./dashboard/student'])
  }
  loginTeacher(){
    this.router.navigate(['./dashboard/teacher'])
  }
}
