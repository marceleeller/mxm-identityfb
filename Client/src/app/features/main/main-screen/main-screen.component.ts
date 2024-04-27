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

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.authService.getCoffeeShopsList().subscribe((data) => {
      this.coffeeShopsList = data;
    });
    this.userName = localStorage.getItem('name') || '';
  }

  logout() {
    this.authService.logout().subscribe(result => {
      console.log(result);
    });
  }
}
