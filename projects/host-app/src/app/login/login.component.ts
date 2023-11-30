import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginTeacher:boolean=false;
  user:string='';
  constructor(private router:Router, private authService:AuthService){}

  login(){
    this.authService.loginStudent(this.user).subscribe((res:any)=>{
      console.log(res);
      if(res.data.token){
        sessionStorage.setItem('token',res.data.token);
        sessionStorage.setItem('code',this.user);
        this.router.navigate(['./dashboard/student'])
      }
    })
  }
  loginTeacher(){
    if(this.user=='asin'){

      let code = '202010398';
      let user = 'Fernando Asin'

      this.authService.loginStudent(code).subscribe((res:any)=>{
        console.log(res);
        if(res.data.token){
          sessionStorage.setItem('token',res.data.token);
          sessionStorage.setItem('user',user);
          this.router.navigate(['./dashboard/teacher/tutoria'])
        }
      })

    }else if(this.user=='diana'){
      this.router.navigate(['./dashboard/teacher/proyeccion'])
    }
  }
}
