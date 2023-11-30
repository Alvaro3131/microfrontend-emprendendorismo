import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-teacher',
  templateUrl: './header-teacher.component.html',
  styleUrls: ['./header-teacher.component.scss']
})
export class HeaderTeacherComponent implements OnInit {

  user:string = ''

  constructor() {

  }
  ngOnInit() {
    this.user = sessionStorage.getItem('user') ?? '';
  }

  logout() {
    sessionStorage.clear();
  }
}
