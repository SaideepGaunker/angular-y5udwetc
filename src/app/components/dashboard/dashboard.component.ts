import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeDropdown: string | null = null;
  private authService = inject(AuthService);
  
  get currentUser() {
    return this.authService.getCurrentUser();
  }
  
  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
  
  signOut() {
    this.authService.logout();
  }
}