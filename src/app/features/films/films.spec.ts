import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Films } from './films';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FilmsStore } from './films-store';

describe('Films', () => {
  let component: Films;
  let fixture: ComponentFixture<Films>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Films],
      providers: [provideZonelessChangeDetection(), provideRouter([]), FilmsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Films);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
