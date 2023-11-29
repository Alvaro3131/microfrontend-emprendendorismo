import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProyeccionModalComponent } from './add-proyeccion-modal.component';

describe('AddProyeccionModalComponent', () => {
  let component: AddProyeccionModalComponent;
  let fixture: ComponentFixture<AddProyeccionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProyeccionModalComponent]
    });
    fixture = TestBed.createComponent(AddProyeccionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
