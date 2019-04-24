import { TestBed, inject } from '@angular/core/testing';

import { AgendaService } from './agenda.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendaService]
    });
  });

  it('should be created', inject([AgendaService], (service: AgendaService) => {
    expect(service).toBeTruthy();
  }));
});
