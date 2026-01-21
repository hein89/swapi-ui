import { Component, input, resource } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Film } from '../film';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-detail',
  imports: [MatListModule, MatCardModule, MatIconModule, RouterLink, DatePipe, MatDivider, MatProgressSpinnerModule],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css',
})
export class FilmDetail {

  // Angular 20 "Component Input" liest automatisch :id aus der Route
  id = input.required<string>();

  filmResource = resource({
    loader: () => {
      // Wir greifen direkt auf das Signal id() zu. 
      // Angular registriert dies automatisch als Abhängigkeit!
      const currentId = this.id(); 
      
      return fetch(`https://swapi.dev/api/films/${currentId}/`)
        .then(res => res.json() as Promise<Film>);
    }
  });

  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }

}
