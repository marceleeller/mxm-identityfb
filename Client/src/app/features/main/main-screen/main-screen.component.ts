import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LoginResponse } from 'angular-auth-oidc-client';
import { delay, filter, repeatWhen, retryWhen, takeWhile } from 'rxjs';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  headerStyle:object = {
    'background-color': 'white',
    'border': '1px solid gray',
  };

  coffeeShopsList:any;
  userName!:string;
  loading:boolean = true;
  processing: boolean = false;

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.authService.getCoffeeShopsList().subscribe((data) => {
      this.coffeeShopsList = data;
      this.loading = false;
    });
    this.userName = localStorage.getItem('name') || '';
  }

  logout() {
    this.processing = true;
    this.authService.logout().subscribe({
      error: (err) => {
        this.processing = false;
      }
    });
  }
}
