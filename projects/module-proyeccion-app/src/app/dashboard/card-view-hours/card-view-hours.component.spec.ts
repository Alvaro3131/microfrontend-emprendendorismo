import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewHoursComponent } from './card-view-hours.component';

describe('CardViewHoursComponent', () => {
  let component: CardViewHoursComponent;
  let fixture: ComponentFixture<CardViewHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViewHoursComponent]
    });
    fixture = TestBed.createComponent(CardViewHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
