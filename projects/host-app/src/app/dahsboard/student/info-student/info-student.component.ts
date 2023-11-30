import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/persona.service';
import { TutorShipService } from '../../../services/tutorship.service';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.scss']
})
export class InfoStudentComponent implements OnInit {
  constructor( private personService:AuthService, private tutorship:TutorShipService) { }
  name:string='';
  allActivities: number = 0;
  particpatedActivities: number = 0;
  percent: number = 0;
  ngOnInit(): void {
    this.personService.getData(sessionStorage.getItem('code')!).subscribe((res:any)=>{
      this.name=res.data.name
    });
    this.tutorship.getDataHoursAcivate().subscribe((data) => {
      this.allActivities = data.data.allActivates;
      this.particpatedActivities = data.data.getAllActivatesForPerson;
      this.percent = Math.round((this.particpatedActivities / this.allActivities) * 100);
    });
  }

}
