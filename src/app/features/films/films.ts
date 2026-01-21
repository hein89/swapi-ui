import { Component, inject } from '@angular/core';
import { FilmsStore } from './films-store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-films',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './films.html',
  styleUrl: './films.css',
})
export class Films {
  
  store = inject(FilmsStore);

  // Hilfsmethode, um die ID aus "https://swapi.dev/api/films/1/" zu bekommen
  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }

}
