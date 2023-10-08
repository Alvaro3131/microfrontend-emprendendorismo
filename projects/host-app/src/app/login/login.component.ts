import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginTeacher:boolean=false;
  user:string='';
  constructor(private router:Router){}

  login(){
    this.router.navigate(['./dashboard/student'])
  }
  loginTeacher(){
    if(this.user=='asin'){
      this.router.navigate(['./dashboard/teacher/tutoria'])
    }else if(this.user=='diana'){
      this.router.navigate(['./dashboard/teacher/proyeccion'])
    }
  }
}
