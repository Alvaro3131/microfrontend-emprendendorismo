import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-hours',
  templateUrl: './chart-hours.component.html',
  styleUrls: ['./chart-hours.component.scss']
})
export class ChartHoursComponent {
  @Input() color: any;
}
