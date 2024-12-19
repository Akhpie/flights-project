import { Component } from '@angular/core';

@Component({
  selector: 'app-flights',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-gray-900 mb-8 slide-in">Available Flights</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
          <!-- Example Flight Cards -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h3 class="text-lg font-semibold">New York (JFK) → London (LHR)</h3>
                <p class="text-gray-600">American Airlines</p>
              </div>
              <span class="text-2xl font-bold text-blue-600">$599</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500">
              <span>Duration: 7h 30m</span>
              <span>Departure: 10:30 AM</span>
            </div>
            <button class="btn-primary w-full mt-4">Book Now</button>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h3 class="text-lg font-semibold">Paris (CDG) → Tokyo (HND)</h3>
                <p class="text-gray-600">Air France</p>
              </div>
              <span class="text-2xl font-bold text-blue-600">$899</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500">
              <span>Duration: 12h 15m</span>
              <span>Departure: 2:15 PM</span>
            </div>
            <button class="btn-primary w-full mt-4">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FlightsComponent {}