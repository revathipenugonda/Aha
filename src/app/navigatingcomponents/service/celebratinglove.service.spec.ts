import { TestBed } from '@angular/core/testing';

import { CelebratingloveService } from './celebratinglove.service';

describe('CelebratingloveService', () => {
  let service: CelebratingloveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebratingloveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
