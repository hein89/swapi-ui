import { Component, effect, inject, input, resource } from '@angular/core';
import { Person } from '../person';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PeopleStore } from '../people-store';
import { PlanetsStore } from '../../planets/planets-store';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-person-detail',
  imports: [MatIconModule, MatCardModule, MatListModule],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.css',
})
export class PersonDetail {
  private peopleStore = inject(PeopleStore);
  private planetsStore = inject(PlanetsStore); // Den zweiten Store dazu holen
  
  // ID aus der URL (:id)
  id = input.required<string>();


  // Daten über den Store beziehen
  personResource = this.peopleStore.getPersonResource(this.id);

  extractId(url: string): string {
    return url.split('/').filter(part => !!part).pop() || '';
  }
  
}
