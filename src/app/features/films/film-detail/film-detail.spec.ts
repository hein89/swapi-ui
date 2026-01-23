import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetail } from './film-detail';
import { provideZonelessChangeDetection } from '@angular/core';
import { FilmsStore } from '../films-store';
import { provideRouter } from '@angular/router';

describe('FilmDetail', () => {
  let component: FilmDetail;
  let fixture: ComponentFixture<FilmDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetail],
      providers: [provideZonelessChangeDetection(), provideRouter([]), FilmsStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmDetail);
    component = fixture.componentInstance;

    // --- WICHTIG: Den erforderlichen Input setzen ---
    fixture.componentRef.setInput('id', '1');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
