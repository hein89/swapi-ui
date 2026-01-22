import { Component, inject } from '@angular/core';
import { PlanetsStore } from './planets-store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planets',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class Planets {

  store = inject(PlanetsStore);

  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }

}