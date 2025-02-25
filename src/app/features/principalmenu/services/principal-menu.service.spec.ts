import { TestBed } from '@angular/core/testing';

import { PrincipalMenuService } from './principal-menu.service';

describe('PrincipalMenuService', () => {
  let service: PrincipalMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
