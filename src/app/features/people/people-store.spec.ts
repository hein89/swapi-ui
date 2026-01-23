import { TestBed } from '@angular/core/testing';

import { PeopleStore } from './people-store';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PeopleStore', () => {
  let service: PeopleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleStore, provideZonelessChangeDetection()]
    });
    service = TestBed.inject(PeopleStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
