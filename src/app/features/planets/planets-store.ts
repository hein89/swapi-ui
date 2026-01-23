import { Injectable, resource } from '@angular/core';
import { Planet } from './planet';
import { SwapiResponse } from '../films/film';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStore {
 
  // 1. Lädt ALLE Planeten durch rekursives Abrufen der "next"-Links
  planetsResource = resource({
    loader: async (): Promise<Planet[]> => {
      let allPlanets: Planet[] = [];
      let nextUrl: string | null = 'https://swapi.dev/api/planets/';

      while (nextUrl) {
        const res = await fetch(nextUrl);
        const data: SwapiResponse<Planet> = await res.json();
        
        allPlanets = [...allPlanets, ...data.results];
        nextUrl = data.next; // Setzt die URL für die nächste Seite oder null
      }

      return allPlanets;
    }
  });

  // 2. Detail-Resource basierend auf der ID (für /planets/:id)
  getPlanetResource(idSignal: () => string) {
    return resource({
      loader: async () => {
        const currentId = idSignal();
        const res = await fetch(`https://swapi.dev/api/planets/${currentId}/`);
        return await (res.json() as Promise<Planet>);
      }
    });
  }
  
}
