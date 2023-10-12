import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorshipsComponent } from './tutorships.component';

describe('TutorshipsComponent', () => {
  let component: TutorshipsComponent;
  let fixture: ComponentFixture<TutorshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorshipsComponent]
    });
    fixture = TestBed.createComponent(TutorshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
