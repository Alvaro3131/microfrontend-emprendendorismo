import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtExportComponent } from './formt-export.component';

describe('FormtExportComponent', () => {
  let component: FormtExportComponent;
  let fixture: ComponentFixture<FormtExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormtExportComponent]
    });
    fixture = TestBed.createComponent(FormtExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
