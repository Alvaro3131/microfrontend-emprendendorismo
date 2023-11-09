import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHoursComponent } from './chart-hours.component';

describe('ChartHoursComponent', () => {
  let component: ChartHoursComponent;
  let fixture: ComponentFixture<ChartHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartHoursComponent]
    });
    fixture = TestBed.createComponent(ChartHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
