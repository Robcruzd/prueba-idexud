import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstudianteComponent } from './crud-estudiante.component';

describe('CrudEstudianteComponent', () => {
  let component: CrudEstudianteComponent;
  let fixture: ComponentFixture<CrudEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
