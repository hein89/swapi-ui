import { Component, inject, input, resource } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Film } from '../film';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import { FilmsStore } from '../films-store';

@Component({
  selector: 'app-film-detail',
  imports: [MatListModule, MatCardModule, MatIconModule, RouterLink, DatePipe, MatDivider, MatProgressSpinnerModule],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css',
})
export class FilmDetail {

  private filmsStore = inject(FilmsStore);

  // Angular 20 "Component Input" liest automatisch :id aus der Route
  id = input.required<string>();

  // Wir initialisieren die Resource über den Store
  // Da 'id' ein Signal ist, können wir es einfach übergeben
  filmResource = this.filmsStore.getFilmResource(this.id);

  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }

}
