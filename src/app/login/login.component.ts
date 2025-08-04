import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  activeDropdown: string | null = null;
  errorMessage = signal('');
  
  private authService = inject(AuthService);
  private router = inject(Router);
  
  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
  
  onLogin() {
    // Reset error message
    this.errorMessage.set('');
    
    // Basic validation
    if (!this.email || !this.password) {
      this.errorMessage.set('Please fill in all fields');
      return;
    }
    
    if (!this.isValidEmail(this.email)) {
      this.errorMessage.set('Please enter a valid email address');
      return;
    }
    
    // Attempt login
    const loginSuccess = this.authService.login(this.email, this.password);
    
    if (loginSuccess) {
      // Navigate to dashboard on successful login
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage.set('Invalid credentials. Use admin@bodhami.com / admin123');
    }
  }
  
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
