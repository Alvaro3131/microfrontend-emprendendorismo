import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, getHours, setHours, setMinutes, startOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
@Component({
  templateUrl: './tutorships.component.html',
  styleUrls: ['./tutorships.component.scss']
})
export class TutorshipsComponent {
  constructor(){
    this.generateWeeklyEvents();
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
  abrirWhatsApp() {
    const whatsappURL = 'https://api.whatsapp.com/send/?phone=51981131748&text&type=phone_number&app_absent=0';
    window.open(whatsappURL, '_blank');
  }
}
