import { TestBed } from '@angular/core/testing';

import { FilmsStore } from './films-store';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FilmsStore', () => {
  let store: FilmsStore;

  beforeEach(() => {
    // Mocking der API-Antwort
    spyOn(window, 'fetch').and.callFake(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [{ title: 'A New Hope', episode_id: 4, url: '.../1/' }]
        })
      } as Response)
    );


    // Testumgebung konfiguriert
    TestBed.configureTestingModule({
      providers: [FilmsStore, provideZonelessChangeDetection()]
    });
    
    store = TestBed.inject(FilmsStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('sollte den Store erfolgreich instanziieren', () => {
    // ASSERT
    expect(store).toBeTruthy();
  });

  it('sollte Filme beim Initialisieren laden', async () => {
    // ACT, hier wird der Zugriff getriggert
    // Wir rufen das Signal einmal auf, damit die Resource merkt, dass sie laden soll
    store.filmsResource.value();

    // 2. Warten, bis alle asynchronen Prozesse (Promises/Fetch) durch sind
    // Ein kleiner Tick reicht meistens aus
    await new Promise(resolve => setTimeout(resolve, 0));

    // 3. Den aktuellen Wert des Signals holen
    const films = store.filmsResource.value();

    // ASSERT
    // Jetzt sollte fetch gerufen worden sein
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.dev/api/films/');
    
    // Und der Wert sollte nun definiert sein
    expect(films).toBeDefined(); 
    expect(films?.length).toBe(1);
    expect(films?.[0].title).toBe('A New Hope');
  });

});

