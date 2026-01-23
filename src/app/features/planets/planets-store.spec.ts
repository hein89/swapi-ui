import { TestBed } from '@angular/core/testing';

import { PlanetsStore } from './planets-store';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PlanetsStore', () => {
  let service: PlanetsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsStore, provideZonelessChangeDetection()]
    });
    service = TestBed.inject(PlanetsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
