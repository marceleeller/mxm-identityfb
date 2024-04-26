import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oidcSecurityService: OidcSecurityService, private http: HttpClient) { }

  checkAuth() {
    return this.oidcSecurityService.checkAuth();
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    return this.oidcSecurityService.logoffAndRevokeTokens();
  }

  getAccessToken() {
    return this.oidcSecurityService.getAccessToken();
  }

  api() {
    this.getAccessToken().subscribe((token) => {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      };

      this.http.get("https://localhost:5445/api/coffeeshop", httpOptions)
        .subscribe((result) => console.log("api result:", result));
    });
  }
}
