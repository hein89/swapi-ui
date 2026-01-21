import { Routes } from '@angular/router';
import { Films } from './features/films/films';
import { FilmDetail } from './features/films/film-detail/film-detail';

export const routes: Routes = [
  // Filme (Root-Ressource 1)
  {
    path: 'films',
    children: [
      { 
        path: '', 
        loadComponent: () => import('./features/films/films').then(m => m.Films) 
      },
      { 
        path: ':id', 
        loadComponent: () => import('./features/films/film-detail/film-detail').then(m => m.FilmDetail) 
      }
    ]
  },

  // Charaktere (Root-Ressource 2)
  {
    path: 'people',
    children: [
      { 
        path: '', 
        loadComponent: () => import('./features/people/people').then(m => m.People) 
      },
      { 
        path: ':id', 
        loadComponent: () => import('./features/people/person-detail/person-detail').then(m => m.PersonDetail) 
      },
    ]
  },


  // Standard-Umleitung
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: '**', redirectTo: 'films' }
];