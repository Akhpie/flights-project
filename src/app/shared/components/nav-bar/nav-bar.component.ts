import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgIf, AsyncPipe } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { AuthModalComponent } from "../auth-modal/auth-modal.component";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, AuthModalComponent],
  template: `
    <nav
      class="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white shadow-lg"
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">SkyBooker</h1>
          <div class="space-x-6">
            <a routerLink="/" class="hover:text-blue-200 transition-colors"
              >Home</a
            >
            <a
              routerLink="/flights"
              class="hover:text-blue-200 transition-colors"
              >Flights</a
            >
            <a routerLink="/about" class="hover:text-blue-200 transition-colors"
              >About</a
            >
            <a
              routerLink="/contact"
              class="hover:text-blue-200 transition-colors"
              >Contact</a
            >
            <ng-container *ngIf="auth.isAuthenticated$ | async">
              <a
                routerLink="/admin"
                class="hover:text-blue-200 transition-colors"
                *ngIf="auth.isAdmin()"
                >Admin</a
              >
              <button
                (click)="auth.logout()"
                class="hover:text-blue-200 transition-colors"
              >
                Logout
              </button>
            </ng-container>
            <button
              *ngIf="!(auth.isAuthenticated$ | async)"
              (click)="isAuthModalOpen = true"
              class="hover:text-blue-200 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>

    <app-auth-modal
      *ngIf="isAuthModalOpen"
      (close)="isAuthModalOpen = false"
    ></app-auth-modal>
  `,
})
export class NavBarComponent {
  isAuthModalOpen = false;

  constructor(public auth: AuthService) {}
}
