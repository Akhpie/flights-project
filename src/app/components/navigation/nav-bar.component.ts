import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="relative z-10 container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-white text-2xl font-bold">SkyBooker</h1>
        <div class="space-x-6">
          <a routerLink="/" class="text-white hover:text-blue-200 transition-colors">Home</a>
          <a routerLink="/flights" class="text-white hover:text-blue-200 transition-colors">Flights</a>
          <a routerLink="/about" class="text-white hover:text-blue-200 transition-colors">About</a>
          <a routerLink="/contact" class="text-white hover:text-blue-200 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  `
})
export class NavBarComponent {}