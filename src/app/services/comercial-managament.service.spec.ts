import { TestBed, inject } from '@angular/core/testing';

import { ComercialManagamentService } from './comercial-managament.service';

describe('ComercialManagamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComercialManagamentService]
    });
  });

  it('should be created', inject([ComercialManagamentService], (service: ComercialManagamentService) => {
    expect(service).toBeTruthy();
  }));
});
