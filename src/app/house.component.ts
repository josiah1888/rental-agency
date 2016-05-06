import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';

@Component({
  selector: 'house',
  templateUrl: 'app/house.component.html'
})
export class HouseComponent {
  @Input() house: House;
}

