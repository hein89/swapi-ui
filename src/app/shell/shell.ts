import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-shell',
  imports: [
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatIconModule, 
    RouterOutlet, 
    RouterLink
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  private breakpointObserver = inject(BreakpointObserver);
  
  // Wir wandeln den Breakpoint-Stream in ein Signal um
  isHandset = toSignal(
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

  title = signal('SWAPI UI');

}
