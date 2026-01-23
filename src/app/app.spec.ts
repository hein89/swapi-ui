import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Shell } from './shell/shell';
import { provideRouter } from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Shell],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shell component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Prüfe statt h1 einfach, ob das Shell-Tag existiert
    expect(compiled.querySelector('app-shell')).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Wenn dein Titel in einem span oder mat-toolbar steht, nutze diesen Selektor
    // Oder suche allgemeiner nach Text im gesamten Dokument:
    expect(compiled.textContent).toContain('SWAPI'); // Nutze einen Begriff, der sicher vorkommt
  });
});
