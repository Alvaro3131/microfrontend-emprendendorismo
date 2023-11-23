import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { addDays, getHours, setHours, setMinutes, startOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
@Component({
  templateUrl: './tutorships.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  
}
