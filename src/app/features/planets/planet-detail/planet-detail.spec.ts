import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetail } from './planet-detail';
import { provideZonelessChangeDetection } from '@angular/core';
import { PlanetsStore } from '../planets-store';
import { provideRouter } from '@angular/router';

describe('PlanetDetail', () => {
  let component: PlanetDetail;
  let fixture: ComponentFixture<PlanetDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetDetail],
      providers: [provideZonelessChangeDetection(), provideRouter([]), PlanetsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDetail);
    component = fixture.componentInstance;

    // Den erforderlichen Input setzen, damit Angular nicht meckert
    fixture.componentRef.setInput('id', '1');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
