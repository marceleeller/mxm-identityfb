import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LoginResponse } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }

}
