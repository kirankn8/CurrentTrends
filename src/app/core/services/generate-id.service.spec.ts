import { TestBed, inject } from '@angular/core/testing';

import { GenerateIdService } from './generate-id.service';

describe('GenerateIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateIdService]
    });
  });

  it('should be created', inject([GenerateIdService], (service: GenerateIdService) => {
    expect(service).toBeTruthy();
  }));
});
