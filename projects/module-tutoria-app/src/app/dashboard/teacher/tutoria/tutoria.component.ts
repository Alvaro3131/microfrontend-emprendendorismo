import { Component, OnInit } from '@angular/core';
import { PsicologiaService } from '../../../services/psicologia.service';
import { Psicologo } from '../../../models/psicologo';
import { EspiritualService } from '../../../services/espiritual.service';
import { Asesor_espiritual } from '../../../models/asesor_espiritual';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, getHours, setHours, setMinutes, startOfWeek } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.scss']
})
export class TutoriaComponent implements OnInit {

  psicologos:Psicologo[]=[];
  asesores:Asesor_espiritual[]=[];
  asesor:Asesor_espiritual = new Asesor_espiritual;

  idAsesor?:number;
  nameAsesor?:string;
  apepatAsesor?:string;
  apematAsesor?:string;

  phoneAsesor?:string;
  emailAsesor?:string;
  type_personAsesor?:string;

  idPsico?:number;
  namePsico?:string;
  apepatPsico?:string;
  apematPsico?:string;

  phonePsico?:string;
  emailPsico?:string;
  type_personPsico?:string;


  constructor (
    private psicoService: PsicologiaService,
    private asesorService: EspiritualService
  ) { 
    this.generateWeeklyEvents();
  }

  ngOnInit() {
    this.getPsicologos();
    this.getAsesores();
  }

  getPsicologos() {
    this.psicoService.getPsicologos().subscribe(data => {
      this.psicologos = data.data;
    });
  }

  getPsicologos2daVez($event:any){
    this.psicoService.getPsicologos().subscribe(data => {
      this.psicologos = data.data;
    });
  }

  getAsesores() {
    this.asesorService.getAsesores().subscribe(data => {
      this.asesores = data.data;
    });
  }

  getAsesores2daVez($event:any) {
    this.asesorService.getAsesores().subscribe(data => {
      this.asesores = data.data;
    });
  }

  redirigirAWsp(phone:string) {
    window.open(`https://api.whatsapp.com/send/?phone=51${phone}8&text&type=phone_number&app_absent=0`,'_blank')
  }

  editPsico(
    id:number,
    name:string,
    phone:string,
    email:string,
    type_person:string
  ){
    this.idPsico = id;
    let partesNombre = name!.split(" ");

    this.namePsico = partesNombre[0];
    this.apepatPsico = partesNombre[1];
    this.apematPsico = partesNombre.slice(2).join(" ");
    this.phonePsico = phone;
    this.emailPsico = email;
    this.type_personPsico = type_person;
  }

  eliminarPsicologo(id_psicologo:number){
    this.psicoService.deletePsicologo(id_psicologo).subscribe(response => {
      this.getPsicologos();
    })
  }


  editAsesor(
    id:number,
    name:string,
    phone:string,
    email:string,
    type_person:string
  ){
    this.idAsesor = id;
    let partesNombre = name!.split(" ");

    this.nameAsesor = partesNombre[0];
    this.apepatAsesor = partesNombre[1];
    this.apematAsesor = partesNombre.slice(2).join(" ");
    this.phoneAsesor = phone;
    this.emailAsesor = email;
    this.type_personAsesor = type_person;
  }

  eliminarAsesor(id_asesor:number){
    this.asesorService.deleteAsesor(id_asesor).subscribe(response => {
      this.getAsesores();
    })
  }


  view: CalendarView = CalendarView.Week;

  viewDate = new Date();

  events: CalendarEvent[] = [];

  refresh = new Subject<void>();
  startHour = 8;
  endHour = 11;
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  generateWeeklyEvents() {
    this.endHour= 13;
    this.startHour= 8;
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1); // Genera eventos para el próximo año

    let currentDay = startOfWeek(today, { weekStartsOn: 0 }); // Inicia en el próximo domingo
    while (currentDay < nextYear) {
      if (currentDay.getDay() === 5 || currentDay.getDay() === 3) { // Viernes (5) o Miércoles (3)
        const event: CalendarEvent = {
          start: setHours(setMinutes(currentDay, 0), 8), // Hora de inicio del evento
          end: setHours(setMinutes(currentDay, 0), 11), // Hora de finalización del evento
          title: 'Programación en Java',
          resizable: {
            afterEnd: true,
          },
        };
        this.events.push(event);
      }
      currentDay = addDays(currentDay, 1); // Avanza al próximo día
    }
  }
  generateWeeklyEventschange() {
    this.endHour= 17;
    this.startHour= 13;
    this.events = [];
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1); // Genera eventos para el próximo año
  
    let currentDay = startOfWeek(today, { weekStartsOn: 0 }); // Inicia en el próximo domingo
    while (currentDay < nextYear) {
      if (currentDay.getDay() === 2) { // Martes (2)
        const eventStart = setHours(setMinutes(currentDay, 0), 15); // Martes a las 3:00 PM
        const eventEnd = setHours(setMinutes(currentDay, 0), 17); // Martes a las 5:00 PM
  
        const event: CalendarEvent = {
          start: eventStart,
          end: eventEnd,
          title: 'Sistemas Operativos', // Puedes cambiar el título aquí si es necesario
          resizable: {
            afterEnd: true,
          },
        };
        this.events.push(event);
      }
      currentDay = addDays(currentDay, 1); // Avanza al próximo día
    }
  }

}
