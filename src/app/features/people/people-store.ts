import { Injectable, resource } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PeopleStore {

  // Lädt alle Personen (Root-Ressource 2)
  peopleResource = resource({
    loader: 
      () => fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => data.results as Person[])
  });

  // Hilfsmethode, um Details für eine spezifische URL zu laden (wichtig für die Verknüpfung)
  getPersonByUrl(url: string) {
  return resource({
    loader: () => fetch(url).then(res => res.json())
  });
}
  
}
