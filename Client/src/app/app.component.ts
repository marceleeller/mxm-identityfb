import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService, public http: HttpClient) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;
          if (isAuthenticated) {
            console.log('User is authenticated');
            console.log('Access Token:', accessToken);
            console.log('Id token:', idToken);
          } else {
            console.log('User is not authenticated');
          }

        /*...*/
      });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe(result => {
      console.log(result);
    });
  }

  api() {
    this.oidcSecurityService.getAccessToken().subscribe((token) => {
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
