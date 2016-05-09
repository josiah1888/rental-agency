import {Component} from '@angular/core';
import {HousesComponent} from './house/houses.component';
import {HouseDetailsComponent} from './house/house-details/house-details.component';
import {LoginComponent} from './login/login.component';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

@Routes([
  {path: '/', component: HousesComponent},
  {path: '/login', component: LoginComponent},
  {path: '/:address', component: HouseDetailsComponent}
])
@Component({
  selector: 'my-app',
  template: `
      <div class="float-right"><a [routerLink]="['/login']">Login</a></div>
      <router-outlet></router-outlet>
  `,
  directives: [HousesComponent, LoginComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(private router: Router) {}
}
