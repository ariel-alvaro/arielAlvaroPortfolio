import { TestBed } from '@angular/core/testing';

import { MinimapService } from './minimap.service';

describe('MinimapService', () => {
  let service: MinimapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
