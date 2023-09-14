import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chart-circle',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss']
})
export class ChartCircleComponent {

}
