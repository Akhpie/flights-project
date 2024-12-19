import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-8 slide-in">About SkyBooker</h1>
          
          <div class="prose lg:prose-xl fade-in">
            <p class="text-lg text-gray-700 mb-6">
              SkyBooker is your trusted partner in air travel, dedicated to making your journey 
              seamless and enjoyable. Since our founding in 2024, we've helped millions of 
              travelers reach their destinations with ease and confidence.
            </p>

            <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p class="text-lg text-gray-700 mb-6">
              To provide travelers with the most convenient and reliable flight booking 
              experience, offering competitive prices and exceptional customer service.
            </p>

            <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
            <ul class="list-disc list-inside text-lg text-gray-700 mb-6">
              <li>24/7 Customer Support</li>
              <li>Best Price Guarantee</li>
              <li>Secure Booking Process</li>
              <li>Extensive Flight Network</li>
              <li>Easy Booking Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}