import { TestBed } from '@angular/core/testing';

import { RenewService } from './renew.service';

describe('RenewService', () => {
  let service: RenewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
