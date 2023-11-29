import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/persona.service';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.scss']
})
export class InfoStudentComponent implements OnInit {
  constructor( private personService:AuthService) { }
  name:string='';
  ngOnInit(): void {
    this.personService.getData(sessionStorage.getItem('code')!).subscribe((res:any)=>{
      this.name=res.data.name
    });

  }

}
