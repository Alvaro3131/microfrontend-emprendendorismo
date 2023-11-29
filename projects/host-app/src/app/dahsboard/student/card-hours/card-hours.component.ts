import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-hours',
  templateUrl: './card-hours.component.html',
  styleUrls: ['./card-hours.component.scss']
})
export class CardHoursComponent {
  @Input() percent: number=33;
  @Input() title: string='';
  @Input() titleHours: string='';
}
