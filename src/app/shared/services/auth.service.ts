import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface AuthCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  private isModalOpenSubject = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.isModalOpenSubject.asObservable();

  openAuthModal() {
    this.isModalOpenSubject.next(true);
  }

  closeAuthModal() {
    this.isModalOpenSubject.next(false);
  }

  login(credentials: AuthCredentials): void {
    // TODO: Implement actual authentication
    console.log("Login attempt:", credentials);
    this.isAuthenticatedSubject.next(true);

    // For testing purposes, let's make the user with email containing 'admin' an admin
    if (credentials.email.includes("admin")) {
      this.isAdminSubject.next(true);
    }
  }

  signup(credentials: AuthCredentials): void {
    // TODO: Implement actual signup
    console.log("Signup attempt:", credentials);
    this.isAuthenticatedSubject.next(true);

    // For testing purposes, let's make the user with email containing 'admin' an admin
    if (credentials.email.includes("admin")) {
      this.isAdminSubject.next(true);
    }
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.isAdminSubject.next(false);
  }

  isAdmin(): boolean {
    let isAdmin = false;
    this.isAdmin$.subscribe((value) => (isAdmin = value));
    return isAdmin;
  }
}
