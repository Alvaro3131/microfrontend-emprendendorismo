import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyeccionComponent } from './new-proyeccion.component';

describe('NewProyeccionComponent', () => {
  let component: NewProyeccionComponent;
  let fixture: ComponentFixture<NewProyeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProyeccionComponent]
    });
    fixture = TestBed.createComponent(NewProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
