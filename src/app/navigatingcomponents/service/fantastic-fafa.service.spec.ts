import { TestBed } from '@angular/core/testing';

import { FantasticFafaService } from './fantastic-fafa.service';

describe('FantasticFafaService', () => {
  let service: FantasticFafaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasticFafaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
