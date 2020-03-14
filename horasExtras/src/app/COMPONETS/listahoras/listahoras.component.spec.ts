import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahorasComponent } from './listahoras.component';

describe('ListahorasComponent', () => {
  let component: ListahorasComponent;
  let fixture: ComponentFixture<ListahorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListahorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListahorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
