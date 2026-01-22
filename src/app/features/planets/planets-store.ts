import { Injectable, resource } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStore {
  planetsResource = resource({
    loader: () => 
      fetch('https://swapi.dev/api/planets/')
        .then(res => res.json())
        .then(data => data.results as Planet[])
  });
  
}
