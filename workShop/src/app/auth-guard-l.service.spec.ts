import { TestBed } from '@angular/core/testing';

import { AuthGuardLService } from './auth-guard-l.service';

describe('AuthGuardLService', () => {
  let service: AuthGuardLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
