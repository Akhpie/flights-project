// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NavBarComponent],
//   template: `
//     <div class="min-h-screen bg-gray-50">
//       <app-nav-bar></app-nav-bar>
//       <router-outlet></router-outlet>
//     </div>
//   `
// })
// export class AppComponent {}

import { Component } from "@angular/core";
import { RouterOutlet, Router, NavigationEnd } from "@angular/router";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-nav-bar *ngIf="!isAdminRoute"></app-nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  isAdminRoute = false;

  constructor(private router: Router) {
    // Set initial route state
    this.isAdminRoute = this.router.url.includes("/admin");

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isAdminRoute = event.urlAfterRedirects.startsWith("/admin");
        }
      });
  }
}
