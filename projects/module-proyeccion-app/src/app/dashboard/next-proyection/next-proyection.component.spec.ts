import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProyectionComponent } from './next-proyection.component';

describe('NextProyectionComponent', () => {
  let component: NextProyectionComponent;
  let fixture: ComponentFixture<NextProyectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextProyectionComponent]
    });
    fixture = TestBed.createComponent(NextProyectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
