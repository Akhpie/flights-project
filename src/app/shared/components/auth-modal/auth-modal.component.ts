import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth-modal",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div
      class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all"
        style="box-shadow: 0 0 40px rgba(0,0,0,0.12)"
      >
        <div class="flex justify-between items-center mb-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">
              {{ isLogin ? "Welcome back" : "Create account" }}
            </h2>
            <p class="text-gray-500 text-sm">
              {{
                isLogin ? "Great to see you again!" : "Join our community today"
              }}
            </p>
          </div>
          <button
            (click)="close.emit()"
            class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form [formGroup]="authForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-1">
            <label for="email" class="text-sm font-medium text-gray-700 block">
              Email address
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                formControlName="email"
                placeholder="you@example.com"
                class="pl-10 w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-sm"
                [class.border-red-300]="
                  authForm.get('email')?.touched &&
                  authForm.get('email')?.invalid
                "
              />
            </div>
            <div
              class="text-red-500 text-xs mt-1"
              *ngIf="
                authForm.get('email')?.touched && authForm.get('email')?.invalid
              "
            >
              <span *ngIf="authForm.get('email')?.errors?.['required']"
                >Email is required</span
              >
              <span *ngIf="authForm.get('email')?.errors?.['email']"
                >Please enter a valid email</span
              >
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="password"
              class="text-sm font-medium text-gray-700 block"
            >
              Password
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                formControlName="password"
                placeholder="Enter your password"
                class="pl-10 w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none text-sm"
                [class.border-red-300]="
                  authForm.get('password')?.touched &&
                  authForm.get('password')?.invalid
                "
              />
            </div>
            <div
              class="text-red-500 text-xs mt-1"
              *ngIf="
                authForm.get('password')?.touched &&
                authForm.get('password')?.invalid
              "
            >
              <span *ngIf="authForm.get('password')?.errors?.['required']"
                >Password is required</span
              >
              <span *ngIf="authForm.get('password')?.errors?.['minlength']"
                >Password must be at least 6 characters</span
              >
            </div>
          </div>

          <button
            type="submit"
            [disabled]="authForm.invalid || isLoading"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm"
          >
            <div class="flex items-center justify-center">
              <svg
                *ngIf="isLoading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {{
                isLoading
                  ? "Please wait..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"
              }}
            </div>
          </button>
        </form>

        <div class="mt-6 text-center">
          <button
            (click)="toggleAuthMode()"
            class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            {{
              isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"
            }}
          </button>
        </div>

        <!-- Social Sign-in Options -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              class="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>

            <button
              class="w-full flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AuthModalComponent {
  authForm: FormGroup;
  isLogin = true;
  isLoading = false;
  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.authForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    this.isLoading = true;
    try {
      if (this.isLogin) {
        this.auth.login(this.authForm.value);
      } else {
        this.auth.signup(this.authForm.value);
      }
      this.close.emit();
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      this.isLoading = false;
    }
  }

  toggleAuthMode() {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
  }
}
