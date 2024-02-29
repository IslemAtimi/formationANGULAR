import { TestBed } from '@angular/core/testing';

import { ConnectServiceService } from './connect-service.service';

describe('ConnectServiceService', () => {
  let service: ConnectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
