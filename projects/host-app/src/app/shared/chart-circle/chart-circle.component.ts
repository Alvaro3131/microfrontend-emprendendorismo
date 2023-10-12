import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss']
})
export class ChartCircleComponent {
  
  @Input() color: any;

}
