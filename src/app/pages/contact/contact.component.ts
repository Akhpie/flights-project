import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-8 slide-in">Contact Us</h1>
          
          <div class="bg-white rounded-lg shadow-lg p-8 fade-in">
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" [(ngModel)]="contactForm.name" name="name"
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" [(ngModel)]="contactForm.email" name="email"
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea [(ngModel)]="contactForm.message" name="message" rows="4"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>

              <button type="submit" class="btn-primary w-full">Send Message</button>
            </form>

            <div class="mt-8 pt-8 border-t border-gray-200">
              <h2 class="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
              <div class="space-y-4">
                <p class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support&#64;skybooker.com
                </p>
                <p class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-800-SKY-BOOK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
  }
}