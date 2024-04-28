import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';


@NgModule({

    imports: [AuthModule.forRoot({
        config: {
              authority: environment.server,
              redirectUrl: `${window.location.origin}/auth-callback`,
              postLoginRoute: '/auth-callback',
              unauthorizedRoute: '/home',
              postLogoutRedirectUri: window.location.origin,
              clientId: 'angular',
              scope: 'openid profile email DesafioMXMAPI.read', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: false,
              useRefreshToken: false,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              secureRoutes: [environment.apiUrl],
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {
}
