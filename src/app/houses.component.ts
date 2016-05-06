import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';
import {HouseComponent} from './house.component';

@Component({
  selector: 'houses',
  directives: [HouseComponent],
  template: `
        <div *ngFor="let house of houses | async">
            <house [house]="house"></house>
        </div>
    
    <button (click)="save()">Save new house</button>
  `
})
export class HousesComponent {
  houses: Observable<House[]>;
  constructor(private dataService: DataService) {
      this.houses = dataService.houses;
  }
  
  save() {
      this.dataService.save(new House({rent: 525, isRented: true }));
  }
}