import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planets } from './planets';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PlanetsStore } from './planets-store';

describe('Planets', () => {
  let component: Planets;
  let fixture: ComponentFixture<Planets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planets],
      providers: [provideZonelessChangeDetection(), provideRouter([]), PlanetsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Planets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
