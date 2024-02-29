import { TestBed } from '@angular/core/testing';

import { PhaseTowGuardService } from './phase-tow-guard.service';

describe('PhaseTowGuardService', () => {
  let service: PhaseTowGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhaseTowGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
