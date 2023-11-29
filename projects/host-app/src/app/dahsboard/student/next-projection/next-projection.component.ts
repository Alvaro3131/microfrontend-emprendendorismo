import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-projection',
  templateUrl: './next-projection.component.html',
  styleUrls: ['./next-projection.component.scss']
})
export class NextProjectionComponent implements OnInit{
  days: number = 8;
  hours: number = 5;
  minutes: number = 2;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      // Resta 1 minuto cada segundo
      this.minutes--;
      if (this.minutes === -1) {
        this.minutes = 59;
        this.hours--;
        if (this.hours === -1) {
          this.hours = 23;
          this.days--;
        }
      }
    }, 1000);
  }
}
