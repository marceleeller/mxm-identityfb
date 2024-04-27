import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './features/auth-callback/auth-callback.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'', children: [
      { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'registrar', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
      { path: 'inicial', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule), canActivate: [authGuard]},
      { path: 'auth-callback', component: AuthCallbackComponent  }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
