import { TestBed, inject } from '@angular/core/testing';

import { SupermanService } from './superman.service';

describe('SupermanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupermanService]
    });
  });

  it('should be created', inject([SupermanService], (service: SupermanService) => {
    expect(service).toBeTruthy();
  }));
});
