import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated, accessToken, idToken } = loginResponse;

      if (isAuthenticated) {
        console.log('User is authenticated');
        console.log('Access Token:', accessToken);
        console.log('Id token:', idToken);
      } else {
        console.log('User is not authenticated');
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout().subscribe(result => {
      console.log(result);
    });
  }

  api() {
    this.authService.api();
  }

}
