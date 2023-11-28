import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinAddProyectoComponent } from './contein-add-proyecto.component';

describe('ConteinAddProyectoComponent', () => {
  let component: ConteinAddProyectoComponent;
  let fixture: ComponentFixture<ConteinAddProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteinAddProyectoComponent]
    });
    fixture = TestBed.createComponent(ConteinAddProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
