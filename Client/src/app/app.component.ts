import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(public authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.authService.checkAuth()
    .subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated, userData } = loginResponse;

      if (isAuthenticated) {
        console.log('User is authenticated');
        localStorage.setItem('name', userData.name);
        this.router.navigate(['/inicial']);
      } else {
        console.log('User is not authenticated');
      }
    });
  }

}
