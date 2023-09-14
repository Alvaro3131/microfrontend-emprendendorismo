import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCircleComponent } from './chart-circle.component';

describe('ChartCircleComponent', () => {
  let component: ChartCircleComponent;
  let fixture: ComponentFixture<ChartCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartCircleComponent]
    });
    fixture = TestBed.createComponent(ChartCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
