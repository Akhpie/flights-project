import { Component } from "@angular/core";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { AuthModalComponent } from "../../shared/components/auth-modal/auth-modal.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [NavBarComponent, AuthModalComponent, CommonModule],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <header class="relative h-[600px] overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-90"
        ></div>
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
        ></div>

        <app-nav-bar></app-nav-bar>

        <!-- Hero Content -->
        <div
          class="relative z-10 container mx-auto px-6 h-full flex items-center"
        >
          <div class="w-full max-w-3xl mx-auto text-center slide-in">
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Journey Begins Here
            </h2>
            <p class="text-xl text-blue-100 mb-12">
              Discover amazing destinations and book your next adventure with
              ease
            </p>
          </div>
        </div>
      </header>

      <!-- Search Box -->
      <div class="container mx-auto px-6 -mt-24 relative z-20">
        <div class="search-box">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >From</label
              >
              <input
                type="text"
                placeholder="Departure City"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >To</label
              >
              <input
                type="text"
                placeholder="Arrival City"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Date</label
              >
              <input
                type="date"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >&nbsp;</label
              >
              <button
                (click)="isAuthModalOpen = true"
                class="btn-primary w-full"
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <section class="py-20 fade-in">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Fast Booking</h3>
              <p class="text-gray-600">
                Book your flights in minutes with our streamlined process
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
              <p class="text-gray-600">
                Get the best deals and competitive prices on flights
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-600">
                Our support team is always here to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      <app-auth-modal
        *ngIf="isAuthModalOpen"
        (close)="isAuthModalOpen = false"
      ></app-auth-modal>
    </div>
  `,
})
export class HomeComponent {
  isAuthModalOpen = false;
}
