import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject, Observable, catchError, filter, first, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken = new BehaviorSubject<string | null>(null);

  constructor(private oidcSecurityService: OidcSecurityService, private http: HttpClient) {  }

  checkAuth() {
    return this.oidcSecurityService.checkAuth();
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    localStorage.clear();
    return this.oidcSecurityService.logoffAndRevokeTokens();
  }

  getAccessToken() {
    return this.oidcSecurityService.getAccessToken();
  }

  getIdToken() {
    return this.oidcSecurityService.getIdToken();
  }

  getCoffeeShopsList() {
    return this.http.get("https://localhost:5445/api/coffeeshop");
  }

  register(data:any): Observable<any> {
    return this.http.post<any>(`https://localhost:5443/api/register`, data).pipe(first())
  }
}
