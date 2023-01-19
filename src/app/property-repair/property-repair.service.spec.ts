import { TestBed } from '@angular/core/testing';

import { PropertyRepairService } from './property-repair.service';

describe('PropertyRepairService', () => {
  let service: PropertyRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
