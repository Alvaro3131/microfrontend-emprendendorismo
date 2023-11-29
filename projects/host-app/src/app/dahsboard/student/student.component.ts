import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/persona.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  constructor( private personService:AuthService) { }
  data:any;
  ngOnInit(): void {
    this.personService.getData(sessionStorage.getItem('code')!).subscribe((res:any)=>{
      this.data=res.data.name
    });
  }
}
