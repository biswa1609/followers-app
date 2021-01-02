import { TestBed } from '@angular/core/testing';

import { AdminAuthguard } from './admin-authguard.service';

describe('AdminAuthguardService', () => {
  let service: AdminAuthguard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthguard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
