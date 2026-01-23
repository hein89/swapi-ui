import { ComponentFixture, TestBed } from '@angular/core/testing';

import { People } from './people';
import { provideZonelessChangeDetection } from '@angular/core';
import { PeopleStore } from './people-store';
import { provideRouter } from '@angular/router';

describe('People', () => {
  let component: People;
  let fixture: ComponentFixture<People>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [People],
      providers: [provideZonelessChangeDetection(), provideRouter([]), PeopleStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(People);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function providerRouter(arg0: never[]): any {
  throw new Error('Function not implemented.');
}

