import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsProyeccionComponent } from './persons-proyeccion.component';

describe('PersonsProyeccionComponent', () => {
  let component: PersonsProyeccionComponent;
  let fixture: ComponentFixture<PersonsProyeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonsProyeccionComponent]
    });
    fixture = TestBed.createComponent(PersonsProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
