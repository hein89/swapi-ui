import { Injectable, resource } from '@angular/core';
import { Film, SwapiResponse } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmsStore {

  // Fetch ist ausreichend, um Daten von der SWAPI zu laden, ausreichend für eine Lese-App

  // 1. Liste aller Filme
  filmsResource = resource({
    loader: async (): Promise<Film[]> => {
      const res = await fetch('https://swapi.dev/api/films/');
      const data: SwapiResponse<Film> = await res.json();
      return data.results;
    }
  });

  // 2. Methode für einen einzelnen Film
  getFilmResource(idSignal: () => string) {
    return resource({
      loader: async () => {
        const currentId = idSignal(); // Hier wird die Abhängigkeit registriert
        const res = await fetch(`https://swapi.dev/api/films/${currentId}/`);
        return await (res.json() as Promise<Film>);
      }
    });
  }

}