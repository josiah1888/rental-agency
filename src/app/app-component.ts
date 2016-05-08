import {Component} from '@angular/core';
import {HousesComponent} from './houses.component';
import {LoginComponent} from './login.component';

@Component({
  selector: 'my-app',
  template: `
      <houses></houses>
      <login></login>
  `,
  directives: [HousesComponent, LoginComponent]
})
export class AppComponent {
}
