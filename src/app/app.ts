import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uiuxproject');
  errorMessage = signal('');
  
  onLoginAttempt(credentials: {email: string, password: string}) {
    // Simulate login validation - you can replace this with actual authentication logic
    if (!credentials.email || !credentials.password) {
      this.errorMessage.set('Please fill in all fields');
      return;
    }
    
    if (!this.isValidEmail(credentials.email)) {
      this.errorMessage.set('Please enter a valid email address');
      return;
    }
    
    if (credentials.password.length < 6) {
      this.errorMessage.set('Password must be at least 6 characters long');
      return;
    }
    
    // Simulate authentication check
    if (credentials.email === 'test@bodhami.com' && credentials.password === 'password123') {
      this.errorMessage.set('');
      alert('Login successful!'); // Replace with actual navigation logic
    } else {
      this.errorMessage.set('Invalid email or password. Please try again.');
    }
  }
  
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
