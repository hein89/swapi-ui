import { TestBed } from '@angular/core/testing';

import { FilmsStore } from './films-store';

describe('FilmsStore', () => {
  let service: FilmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
