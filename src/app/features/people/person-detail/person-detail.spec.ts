import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetail } from './person-detail';
import { provideZonelessChangeDetection } from '@angular/core';
import { People } from '../people';
import { PeopleStore } from '../people-store';
import { PlanetsStore } from '../../planets/planets-store';
import { provideRouter } from '@angular/router';

describe('PersonDetail', () => {
  let component: PersonDetail;
  let fixture: ComponentFixture<PersonDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetail],
      providers: [provideZonelessChangeDetection(), provideRouter([]), PeopleStore, PlanetsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetail);
    component = fixture.componentInstance;

    // Den erforderlichen Input setzen, damit Angular nicht meckert
    fixture.componentRef.setInput('id', '1');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
