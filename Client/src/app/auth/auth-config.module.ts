import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://localhost:5443',
              redirectUrl: 'https://desafiomxm.vercel.app/auth-callback',
              postLoginRoute: '/auth-callback',
              unauthorizedRoute: '/home',
              postLogoutRedirectUri: window.location.origin,
              clientId: 'angular',
              scope: 'openid profile email DesafioMXMAPI.read', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: false,
              useRefreshToken: false,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              secureRoutes: ['https://localhost:5445/api'],
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
