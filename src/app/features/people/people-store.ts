import { Injectable, resource } from '@angular/core';
import { Person } from './person';
import { SwapiResponse } from '../films/film';

@Injectable({
  providedIn: 'root',
})
export class PeopleStore {

// 1. Liste aller Personen aber nur die ersten 10
/*
  peopleResource = resource({
    loader: () => 
      fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => data.results as Person[])
  });
*/

// Lädt ALLE Personen durch rekursives Abrufen der "next"-Links
peopleResource = resource({
    loader: async () => {
      let allPeople: Person[] = [];
      let nextUrl: string | null = 'https://swapi.dev/api/people/';

      // Wir laufen so lange durch, bis die API kein 'next' mehr liefert
      while (nextUrl) {
        const res = await fetch(nextUrl);
        const data: SwapiResponse<Person> = await res.json();
        
        allPeople = [...allPeople, ...data.results];
        nextUrl = data.next; // URL der nächsten 10 oder null
      }

      return allPeople;
    }
  });

  // 2. NEU: Detail-Resource basierend auf der ID (für die Detail-Route)
  getPersonResource(idSignal: () => string) {
    return resource({
      loader: () => {
        const currentId = idSignal();
        return fetch(`https://swapi.dev/api/people/${currentId}/`)
          .then(res => res.json() as Promise<Person>);
      }
    });
  }

  // 3. Hilfsmethode für direkte URLs (z.B. aus Film-Details)
  getPersonByUrl(url: string) {
    return resource({
      loader: () => fetch(url).then(res => res.json() as Promise<Person>)
    });
  }
  
}
