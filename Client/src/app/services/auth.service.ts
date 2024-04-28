import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject, Observable, catchError, filter, first, switchMap, tap } from 'rxjs';
import { environment } from './../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken = new BehaviorSubject<string | null>(null);
  private readonly API = `${environment.API_URL}/coffeeshop`;
  private readonly SERVER = `${environment.SERVER_URL}/api/register`;

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
    return this.http.get(this.API);
  }

  register(data:any): Observable<any> {
    return this.http.post<any>(this.SERVER, data).pipe(first())
  }
}
