import { Injectable, resource } from '@angular/core';
import { Film, SwapiResponse } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmsStore {

  // Fetch ist ausreichend, um Daten von der SWAPI zu laden, ausreichend für eine Lese-App

  // Die Resource lädt die Daten sofort, wenn sie irgendwo injiziert wird
  filmsResource = resource({
    loader: async (): Promise<Film[]> => {
      const res = await fetch('https://swapi.dev/api/films/');
      const data: SwapiResponse<Film> = await res.json();
      return data.results;
    }
  });

}