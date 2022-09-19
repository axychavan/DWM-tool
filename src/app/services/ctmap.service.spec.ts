import { TestBed } from '@angular/core/testing';

import { CtmapService } from './ctmap.service';

describe('CtmapService', () => {
  let service: CtmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
