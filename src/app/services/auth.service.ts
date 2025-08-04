import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = signal(false);
  private currentUser = signal<string | null>(null);

  // Dummy credentials
  private validCredentials = {
    email: 'admin@bodhami.com',
    password: 'admin123'
  };

  constructor(private router: Router) {
    // Check if user is already logged in (from localStorage)
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLoginState = localStorage.getItem('isLoggedIn');
      const savedUser = localStorage.getItem('currentUser');
      
      if (savedLoginState === 'true' && savedUser) {
        this.isLoggedIn.set(true);
        this.currentUser.set(savedUser);
      }
    }
  }

  login(email: string, password: string): boolean {
    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      this.isLoggedIn.set(true);
      this.currentUser.set(email);
      
      // Save to localStorage
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', email);
      }
      
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    
    // Clear localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('currentUser');
    }
    
    // Navigate to login
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  getCurrentUser(): string | null {
    return this.currentUser();
  }
}