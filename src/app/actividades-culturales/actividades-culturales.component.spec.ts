import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCulturalesComponent } from './actividades-culturales.component';

describe('ActividadesCulturalesComponent', () => {
  let component: ActividadesCulturalesComponent;
  let fixture: ComponentFixture<ActividadesCulturalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCulturalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
