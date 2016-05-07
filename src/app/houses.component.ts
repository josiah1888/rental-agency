import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';
import {HouseComponent} from './house.component';
import {EditableHouseComponent} from './editable-house.component';

@Component({
  selector: 'houses',
  directives: [HouseComponent, EditableHouseComponent],
  template: `
    <div *ngFor="let house of houses | async">
        <house [house]="house"></house>
    </div>
    
    <editable-house [house]="newHouse" *ngIf="newHouse" [hidden]="!newHouse" (save)="saveHouse($event)" ></editable-house>
    
    <button (click)="createNewHouse()">Create New House</button>
  `
})
export class HousesComponent {
  houses: Observable<House[]>;
  newHouse: House = null;
  constructor(private dataService: DataService) {
      this.houses = dataService.houses;
  }
  
  createNewHouse() {
      this.newHouse = new House();
  }
  
  saveHouse(house: House) {
      this.dataService.save(house);
      this.newHouse = null;
  }
}
