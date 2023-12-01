import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, getHours, setHours, setMinutes, startOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import { TutorShipService } from '../../../services/tutorship.service';
@Component({
  templateUrl: './tutorships.component.html',
  styleUrls: ['./tutorships.component.scss']
})
export class TutorshipsComponent  implements OnInit{
  psicologies: any[] = []
  spritual: any[] = []
  percent: number = 0;
  allActivities: number = 0;
  particpatedActivities: number = 0;
  lugar: string = '';
  fecha: string = '';
  name:string='';
  constructor(private tutorship: TutorShipService ){
    this.generateWeeklyEvents();
  }
  ngOnInit(): void {
    this.tutorship.getDataPsicology().subscribe((data) => {
      console.log(data);
      this.psicologies = data.data;
    });
    this.tutorship.getDataSpiritual().subscribe((data) => {
      this.spritual = data.data;
    });
    this.tutorship.getDataHoursAcivate().subscribe((data) => {
      this.allActivities = data.data.allActivates;
      this.particpatedActivities = 4;
      this.percent = Math.round((this.particpatedActivities / this.allActivities) * 100);
    });
    this.tutorship.getAllActivates().subscribe((data) => {
      if (data.data.length > 0) {
        const lastElement = data.data[data.data.length - 1]; // Obteniendo el último elemento
        const lastElementId = lastElement.id; // Suponiendo que el ID está almacenado en la propiedad 'id'
    
        this.tutorship.getActivateId(lastElementId).subscribe((data) => {
          this.lugar = data.data.place;
          this.fecha = data.data.date;
          this.name=data.data.name;
        });
      }
    });
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
  abrirWhatsApp(phone?: string) {
    if(phone){
      const whatsappURL = `https://api.whatsapp.com/send/?phone=51${phone}&text&type=phone_number&app_absent=0`;
      window.open(whatsappURL, '_blank');
    }else{
      const whatsappURL = 'https://api.whatsapp.com/send/?phone=51981131748&text&type=phone_number&app_absent=0';
      window.open(whatsappURL, '_blank');
    }
  }
}
