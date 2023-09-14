import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProjectionComponent } from './next-projection.component';

describe('NextProjectionComponent', () => {
  let component: NextProjectionComponent;
  let fixture: ComponentFixture<NextProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextProjectionComponent]
    });
    fixture = TestBed.createComponent(NextProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
