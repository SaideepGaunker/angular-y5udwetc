import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  
  // Output event for parent-child communication
  loginAttempt = output<{email: string, password: string}>();
  
  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
  
  onLogin() {
    // Emit login attempt to parent component
    this.loginAttempt.emit({
      email: this.email,
      password: this.password
    });
  }
}