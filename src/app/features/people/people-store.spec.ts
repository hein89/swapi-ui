import { TestBed } from '@angular/core/testing';

import { PeopleStore } from './people-store';

describe('PeopleStore', () => {
  let service: PeopleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
