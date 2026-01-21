import { Component, inject } from '@angular/core';
import { PeopleStore } from './people-store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {

  store = inject(PeopleStore);

  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }

}
