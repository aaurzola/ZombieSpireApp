import { TestBed } from '@angular/core/testing';

import { HumanService } from './human.service';

describe('HumanServiceService', () => {
  let service: HumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
