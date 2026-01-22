import { Component, inject, input, resource } from '@angular/core';
import { Planet } from '../planet';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PlanetsStore } from '../planets-store';

@Component({
  selector: 'app-planet-detail',
  imports: [MatCardModule, MatListModule],
  templateUrl: './planet-detail.html',
  styleUrl: './planet-detail.css',
})
export class PlanetDetail {

  /*
  id = input.required<string>();

  planetResource = resource({
    loader: () => {
      const currentId = this.id();
      return fetch(`https://swapi.dev/api/planets/${currentId}/`)
        .then(res => res.json() as Promise<Planet>);
    }
  });
  */

  private planetsStore = inject(PlanetsStore);

  // ID aus der Route
  id = input.required<string>();

  // Daten vom Store beziehen
  planetResource = this.planetsStore.getPlanetResource(this.id);

}
