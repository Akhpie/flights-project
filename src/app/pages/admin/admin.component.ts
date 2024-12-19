import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-100">
      <!-- Side Navigation -->
      <nav class="fixed left-0  w-64 bg-white h-screen shadow-lg z-10">
        <div class="p-6">
          <h2
            class="text-2xl font-bold text-indigo-700 cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <a routerLink="/">SkyBooker Admin</a>
          </h2>
        </div>
        <div class="px-4">
          <button
            (click)="activeTab = 'flights'"
            [class.bg-indigo-50]="activeTab === 'flights'"
            class="w-full text-left px-4 py-3 rounded-lg mb-2 hover:bg-indigo-50 transition-colors flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
              />
            </svg>
            Flight Management
          </button>
          <button
            (click)="activeTab = 'analytics'"
            [class.bg-indigo-50]="activeTab === 'analytics'"
            class="w-full text-left px-4 py-3 rounded-lg mb-2 hover:bg-indigo-50 transition-colors flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Analytics
          </button>
        </div>
      </nav>

      <!-- Main Content -->
      <div class="ml-64 p-8">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Flight Management</h1>
          <button
            (click)="showAddFlightModal = true"
            class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Flight
          </button>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-gray-500">Total Flights</p>
                <h3 class="text-2xl font-bold text-gray-800">156</h3>
              </div>
              <div class="bg-indigo-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-gray-500">Active Bookings</p>
                <h3 class="text-2xl font-bold text-gray-800">1,204</h3>
              </div>
              <div class="bg-green-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-sm text-gray-500">Today's Revenue</p>
                <h3 class="text-2xl font-bold text-gray-800">$24,563</h3>
              </div>
              <div class="bg-purple-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Flights Table -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-6 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-semibold text-gray-800">All Flights</h2>
              <div class="flex gap-4">
                <input
                  type="text"
                  placeholder="Search flights..."
                  class="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  class="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>All Routes</option>
                  <option>Domestic</option>
                  <option>International</option>
                </select>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Flight No.
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Route
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Departure
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Arrival
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr *ngFor="let i of [1, 2, 3, 4, 5]" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    SK{{ i }}234
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    London → Paris
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    10:30 AM
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    12:30 PM
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      On Time
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex gap-3">
                      <button class="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </button>
                      <button class="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 border-t border-gray-200">
            <div class="flex justify-between items-center">
              <div class="text-sm text-gray-500">
                Showing 1 to 5 of 50 entries
              </div>
              <div class="flex gap-2">
                <button
                  class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AdminComponent {
  activeTab = "flights";
  showAddFlightModal = false;
}
