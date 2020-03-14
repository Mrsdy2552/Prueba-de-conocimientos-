import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorasComponent } from './form-horas.component';

describe('FormHorasComponent', () => {
  let component: FormHorasComponent;
  let fixture: ComponentFixture<FormHorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
