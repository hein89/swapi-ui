import { Component, input, resource } from '@angular/core';
import { Person } from '../person';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-person-detail',
  imports: [MatCardModule, MatListModule],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.css',
})
export class PersonDetail {
  id = input.required<string>();

  personResource = resource({
    loader: () => {
      const currentId = this.id();
      return fetch(`https://swapi.dev/api/people/${currentId}/`)
        .then(res => res.json() as Promise<Person>);
    }
  });
}
