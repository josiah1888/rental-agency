import {Component} from '@angular/core';
import {HousesComponent} from './houses.component';

@Component({
  selector: 'my-app',
  template: `
      <houses></houses>
  `,
  directives: [HousesComponent]
})
export class AppComponent {
}
