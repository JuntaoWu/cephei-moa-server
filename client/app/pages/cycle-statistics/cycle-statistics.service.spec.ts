import { TestBed } from '@angular/core/testing';

import { CycleStatisticsService } from './cycle-statistics.service';

describe('CycleStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CycleStatisticsService = TestBed.get(CycleStatisticsService);
    expect(service).toBeTruthy();
  });
});
