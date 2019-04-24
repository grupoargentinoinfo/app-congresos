import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViajerosComponent } from './info-viajeros.component';

describe('InfoViajerosComponent', () => {
  let component: InfoViajerosComponent;
  let fixture: ComponentFixture<InfoViajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoViajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
