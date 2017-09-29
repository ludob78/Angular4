import { TestBed, inject } from '@angular/core/testing';

import { TpserviceService } from './tpservice.service';

describe('TpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TpserviceService]
    });
  });

  it('should be created', inject([TpserviceService], (service: TpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
