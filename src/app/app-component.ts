import {Component} from '@angular/core';
import {HousesComponent} from './houses.component';
import {HouseDetailsComponent} from './house-details.component';
import {LoginComponent} from './login.component';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

@Routes([
  {path: '/', component: HousesComponent},
  {path: '/login', component: LoginComponent},
  {path: '/:address', component: HouseDetailsComponent}
])
@Component({
  selector: 'my-app',
  template: `
      <router-outlet></router-outlet>
  `,
  directives: [HousesComponent, LoginComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(private router: Router) {}
}
